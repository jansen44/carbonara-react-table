import React, { Component } from 'react'

import {
  TableComponentProps,
  TableComponentState,
  TableRow,
  TableData,
  TableColumn
} from '../types'
import { getNestedValue, Debounce } from '../util'

import { CardList } from './CardList'
import { TableBody } from './TableBody'
import { TableHead } from './TableHead'
import { TablePagination } from './TablePagination'

export class Table extends Component<TableComponentProps, TableComponentState> {
  private debounce: any = new Debounce()
  private tableHeaderRef: any = null
  private outerContainerRef: any = null

  public static defaultProps = {
    firstPage: 0,
    maxShowCardsWidth: 700
  }

  constructor(props: TableComponentProps) {
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

  getTableRows(columns: TableColumn[], data: object[]) {
    return data.map((datum): TableRow => (
      columns.map((column): TableData => this.getTableData(column, datum))
    ))
  }

  getTableData(column: TableColumn, datum: object): TableData {
    return {
      ...column,
      value: getNestedValue(datum, column.field),
      rowData: datum
    }
  }

  handleTableScroll = (evt: any) => {
    this.tableHeaderRef.style.left = `${evt.target.scrollLeft * -1}px`
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
        className={`CarbonaraTable-OuterContainer ${className || ''}`}
      >
        {
          (!!page || page === 0) && !!handleSetPage && (
            <TablePagination
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
          ? <CardList cards={tableRows} onCardClick={onRowClick} />
          : (
            <div className='CarbonaraTable-Container'>
              <div ref={el => this.tableHeaderRef = el} className='CarbonaraTableHeader-Wrapper'>
                <TableHead columns={columns} />
              </div>

              <div onScroll={this.handleTableScroll} className='CarbonaraTable-Wrapper'>
                <TableBody rows={tableRows} onRowClick={onRowClick} />
              </div>
            </div>
          )
        }

        {
          (!!page || page === 0) && !!handleSetPage && (
            <TablePagination
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
