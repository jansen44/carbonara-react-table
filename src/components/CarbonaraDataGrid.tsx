import React, { Component } from 'react'
import { CarbonaraDataGridProps } from '../types'
import { CarbonaraTBody } from './CarbonaraTBody'
import { CarbonaraTHead } from './CarbonaraTHead'

export class CarbonaraDataGrid extends Component<CarbonaraDataGridProps> {
  private dataGridHeaderRef: any = null

  handleTableScroll = (evt: any) => {
    this.dataGridHeaderRef.style.left = `${evt.target.scrollLeft * -1}px`
  }

  render() {
    const { columns, rows, onRowClick, sortBy, onSortSelect, loading } = this.props

    return (
      <div className='CarbonaraTable-DataGridContainer'>
        <div ref={el => this.dataGridHeaderRef = el} className='CarbonaraTable-DataGridHeaderWrapper'>
          <table>
            <CarbonaraTHead
              columns={columns}
              sortBy={sortBy}
              onSortSelect={onSortSelect}
              loading={loading}
            />
          </table>
        </div>

        <div onScroll={this.handleTableScroll} className='CarbonaraTable-DataGridBodyWrapper'>
          <table className='CarbonaraTable-DataGridBody'>
            <CarbonaraTBody rows={rows} onRowClick={onRowClick} />
          </table>
        </div>
      </div>
    )
  }
}
