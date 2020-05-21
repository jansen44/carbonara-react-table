import React, { Component } from 'react'

import { CarbonaraDataGridProps } from '../../types'

import { CarbonaraDataGridBody } from './CarbonaraDataGridBody'
import { CarbonaraDataGridHead } from './CarbonaraDataGridHead'

export class CarbonaraDataGrid extends Component<CarbonaraDataGridProps> {
  private dataGridHeaderRef: any = null

  handleTableScroll = (evt: any) => {
    this.dataGridHeaderRef.style.left = `${evt.target.scrollLeft * -1}px`
  }

  render() {
    const { columns, rows, onRowClick } = this.props

    return (
      <div className='CarbonaraTable-DataGridContainer'>
        <div ref={el => this.dataGridHeaderRef = el} className='CarbonaraTable-DataGridHeaderWrapper'>
          <CarbonaraDataGridHead columns={columns} />
        </div>

        <div onScroll={this.handleTableScroll} className='CarbonaraTable-DataGridBodyWrapper'>
          <CarbonaraDataGridBody rows={rows} onRowClick={onRowClick} />
        </div>
      </div>
    )
  }
}
