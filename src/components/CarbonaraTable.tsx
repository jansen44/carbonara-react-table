import React, { Component } from 'react'
import { CarbonaraTableProps } from '../types'
import { CarbonaraTBody } from './CarbonaraTBody'
import { CarbonaraTHead } from './CarbonaraTHead'
import { CarbonaraTBodyLoading } from './CarbonaraTBodyLoading'

export class CarbonaraDataTable extends Component<CarbonaraTableProps> {
  private dataGridHeaderRef: any = null

  handleTableScroll = (evt: any) => {
    this.dataGridHeaderRef.style.left = `${evt.target.scrollLeft * -1}px`
  }

  render() {
    const {
      columns,
      rows,
      onRowClick,
      sortBy,
      onSortSelect,
      loading,
      rowHeight,
      shimmerLoadingRowsTotal
    } = this.props

    return (
      <div className='CarbonaraTable-TableContainer'>
        <div ref={el => this.dataGridHeaderRef = el} className='CarbonaraTable-TableHeaderWrapper'>
          <table>
            <CarbonaraTHead
              columns={columns}
              sortBy={sortBy}
              onSortSelect={onSortSelect}
              loading={loading}
            />
          </table>
        </div>

        <div onScroll={this.handleTableScroll} className='CarbonaraTable-TableBodyWrapper'>
          <table>
            {
              loading
                ? <CarbonaraTBodyLoading
                  shimmerLoadingRowsTotal={shimmerLoadingRowsTotal}
                  columns={columns}
                  rowHeight={rowHeight}
                />
                : <CarbonaraTBody
                  rows={rows}
                  onRowClick={onRowClick}
                  rowHeight={rowHeight}
                />
            }
          </table>
        </div>
      </div>
    )
  }
}
