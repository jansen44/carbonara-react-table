import React, { Component } from 'react'

import {
  CarbonaraComponentProps,
  CarbonaraComponentState,
  CarbonaraGroupedData,
  CarbonaraData,
  CarbonaraGroupedDataDefinition
} from '../types'

import { getNestedValue, Debounce } from '../util'

import { CarbonaraCardList } from './CarbonaraCardList'
import { CarbonaraDataGrid } from './CarbonaraDataGrid'
import { CarbonaraTablePagination } from './CarbonaraPagination'

export class CarbonaraTable extends Component<CarbonaraComponentProps, CarbonaraComponentState> {
  private debounce: any = new Debounce()
  private outerContainerRef: any = null

  public static defaultProps = {
    firstPage: 0,
    maxShowCardsWidth: 700
  }

  constructor(props: CarbonaraComponentProps) {
    super(props)

    this.state = {
      tableRows: [],
      oldData: [],
      tableDimensions: {
        width: 1000,
        height: 1000
      }
    }

    this.debouncedHandleSizeChange = this.debouncedHandleSizeChange.bind(this)
    this.handleTableResize = this.handleTableResize.bind(this)
  }

  componentDidMount() {
    const { columns, data } = this.props

    this.setState({
      tableRows: this.getTableRows(columns, data),
      oldData: data
    })

    this.handleTableResize()
    window.addEventListener('resize', () => this.debouncedHandleSizeChange(700))
  }

  componentDidUpdate() {
    const { data, columns } = this.props
    const { oldData } = this.state

    if (JSON.stringify(data) !== JSON.stringify(oldData)) {
      this.setState({
        tableRows: this.getTableRows(columns, data),
        oldData: data
      })
    }
  }

  debouncedHandleSizeChange = (wait: number) => {
    this.debounce.debounced(() => {
      if (!!this.outerContainerRef) {
        this.handleTableResize()
      }
    }, wait)
  }

  handleTableResize = () => {
    const outerTableRect = this.outerContainerRef.getBoundingClientRect()

    this.setState({
      tableDimensions: {
        width: outerTableRect.width,
        height: outerTableRect.height
      }
    })
  }

  getTableRows(columns: CarbonaraGroupedDataDefinition[], data: object[]) {
    return data.map((datum): CarbonaraGroupedData => (
      columns.map((column): CarbonaraData => this.getTableData(column, datum))
    ))
  }

  getTableData(column: CarbonaraGroupedDataDefinition, datum: object): CarbonaraData {
    return {
      ...column,
      value: getNestedValue(datum, column.field),
      rowData: datum
    }
  }

  render() {
    const {
      columns,
      className,
      onRowClick,
      loading,
      page,
      handleSetPage,
      firstPage,
      lastPage,
      showCards,
      maxShowCardsWidth
    } = this.props
    const { tableRows, tableDimensions } = this.state

    return (
      <div
        ref={el => this.outerContainerRef = el}
        className={`CarbonaraTable-Container ${className || ''}`}
      >
        {
          (!!page || page === 0) && !!handleSetPage && (
            <CarbonaraTablePagination
              handleSetPage={handleSetPage}
              isNextDisabled={loading || (lastPage === page)}
              isPrevDisabled={loading || (firstPage === page)}
              page={page}
              firstPage={firstPage}
              lastPage={lastPage}
              className='CarbonaraTable-UpperPagination'
            />
          )
        }

        {!!showCards && (tableDimensions.width <= maxShowCardsWidth)
          ? <CarbonaraCardList cards={tableRows} onCardClick={onRowClick} />
          : (
            <CarbonaraDataGrid
              columns={columns}
              rows={tableRows}
              onRowClick={onRowClick}
            />
          )
        }

        {
          (!!page || page === 0) && !!handleSetPage && (
            <CarbonaraTablePagination
              handleSetPage={handleSetPage}
              isNextDisabled={loading || (lastPage === page)}
              isPrevDisabled={loading || (firstPage === page)}
              page={page}
              firstPage={firstPage}
              lastPage={lastPage}
              className='CarbonaraTable-BottomPagination'
            />
          )
        }
      </div>
    )
  }
}
