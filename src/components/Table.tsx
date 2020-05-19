import React, { Component } from 'react'

import {
  TableComponentProps,
  TableComponentState,
  TableRow,
  TableData,
  TableColumn
} from '../types'
import { getNestedValue } from '../util'

import { TableBody } from './TableBody'
import { TableHead } from './TableHead'
import { TablePagination } from './TablePagination'

export class Table extends Component<TableComponentProps, TableComponentState> {
  public static defaultProps = {
    firstPage: 0
  }

  private tableHeaderRef: any = null

  constructor(props: TableComponentProps) {
    super(props)
    this.state = {
      tableRows: [],
      oldData: []
    }
  }

  componentDidMount() {
    const { columns, data } = this.props

    this.setState({
      tableRows: this.getTableRows(columns, data),
      oldData: data
    })
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
      lastPage
    } = this.props
    const { tableRows } = this.state

    return (
      <div className={`CarbonaraTable-OuterContainer ${className || ''}`}>
        {
          (!!page || page === 0) && !!handleSetPage && (
            <TablePagination
              handleSetPage={handleSetPage}
              isNextDisabled={loading || (lastPage === page)}
              isPrevDisabled={loading || (firstPage === page)}
              page={page}
              firstPage={firstPage}
              lastPage={lastPage}
            />
          )
        }
        <div className='CarbonaraTable-Container'>
          <div ref={el => this.tableHeaderRef = el} className='CarbonaraTableHeader-Wrapper'>
            <TableHead columns={columns} />
          </div>

          <div onScroll={this.handleTableScroll} className='CarbonaraTable-Wrapper'>
            <TableBody rows={tableRows} onRowClick={onRowClick} />
          </div>
        </div>
        {
          (!!page || page === 0) && !!handleSetPage && (
            <TablePagination
              handleSetPage={handleSetPage}
              isNextDisabled={loading || (lastPage === page)}
              isPrevDisabled={loading || (firstPage === page)}
              page={page}
              firstPage={firstPage}
              lastPage={lastPage}
            />
          )
        }
      </div>
    )
  }
}
