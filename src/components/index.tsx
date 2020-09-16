import React, { Component } from 'react'

import {
  CarbonaraComponentProps,
  CarbonaraComponentState,
  CarbonaraGroupedData,
  CarbonaraData,
  CarbonaraGroupedDataDefinition
} from '../types'

import { getNestedValue, Debounce, isString } from '../util'
import { CarbonaraCardList } from './CarbonaraCardList'
import { CarbonaraDataGrid } from './CarbonaraDataGrid'
import { CarbonaraDataTable } from './CarbonaraTable'
import { CarbonaraTablePagination } from './CarbonaraPagination'

export class CarbonaraTable extends Component<CarbonaraComponentProps, CarbonaraComponentState> {
  private debounce: any = new Debounce()
  private outerContainerRef: any = null
  private _shimmerLoadingRowsTotal: number = 5

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

    if (JSON.stringify(data) !== JSON.stringify(oldData) || data !== oldData) {
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

  renderPagination(className: string, page: number, handleSetPage: (page: number) => void): JSX.Element {
    const { loading, lastPage, firstPage } = this.props

    return <CarbonaraTablePagination
      handleSetPage={handleSetPage}
      isNextDisabled={loading || (lastPage === page)}
      isPrevDisabled={loading || (firstPage === page)}
      page={page}
      firstPage={firstPage}
      lastPage={lastPage}
      className={className}
    />
  }

  renderComponent(): JSX.Element {
    const {
      columns,
      onRowClick,
      showCards,
      maxShowCardsWidth,
      datagrid,
      NoData,
      sortBy,
      onSortSelect,
      loading,
      rowHeight,
      shimmerLoadingRowsTotal
    } = this.props
    const { tableRows, tableDimensions } = this.state

    if (tableRows.length === 0 && !loading) {
      if (!!NoData) {
        return isString(NoData)
          ? <div>{NoData}</div>
          : <NoData />
      }
      return <div>No Data Available</div>
    }

    if (!!showCards && (tableDimensions.width <= maxShowCardsWidth)) {
      return <CarbonaraCardList cards={tableRows} onCardClick={onRowClick} />
    }

    if (!!datagrid) {
      return <CarbonaraDataGrid
        columns={columns}
        rows={tableRows}
        onRowClick={onRowClick}
        sortBy={sortBy}
        onSortSelect={onSortSelect}
        loading={loading}
        rowHeight={rowHeight}
        shimmerLoadingRowsTotal={
          shimmerLoadingRowsTotal === undefined
            ? this._shimmerLoadingRowsTotal
            : shimmerLoadingRowsTotal
        }
      />
    }

    return <CarbonaraDataTable
      columns={columns}
      rows={tableRows}
      onRowClick={onRowClick}
      sortBy={sortBy}
      onSortSelect={onSortSelect}
      loading={loading}
      rowHeight={rowHeight}
      shimmerLoadingRowsTotal={
        shimmerLoadingRowsTotal === undefined
          ? this._shimmerLoadingRowsTotal
          : shimmerLoadingRowsTotal
      }
    />
  }

  render() {
    const { className, page, handleSetPage } = this.props

    return (
      <div
        ref={el => this.outerContainerRef = el}
        className={`CarbonaraTable-Container ${className || ''}`}
      >
        {(!!page || page === 0) && !!handleSetPage && (
          this.renderPagination(
            'CarbonaraTable-UpperPagination',
            page,
            handleSetPage
          )
        )}

        {this.renderComponent()}

        {(!!page || page === 0) && !!handleSetPage && (
          this.renderPagination(
            'CarbonaraTable-BottomPagination',
            page,
            handleSetPage
          )
        )}
      </div>
    )
  }
}
