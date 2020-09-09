import React, { Component } from 'react'
import { CarbonaraTableProps } from '../types'
import { CarbonaraTBody } from './CarbonaraTBody'
import { CarbonaraTHead } from './CarbonaraTHead'

export class CarbonaraDataTable extends Component<CarbonaraTableProps> {
  render() {
    const { columns, rows, onRowClick, onSortSelect, sortBy, loading, rowHeight } = this.props

    return (
      <div className='CarbonaraTable-TableContainer'>
        <table>
          <CarbonaraTHead columns={columns} onSortSelect={onSortSelect} sortBy={sortBy} loading={loading} />
          <CarbonaraTBody rows={rows} onRowClick={onRowClick} loading={loading} rowHeight={rowHeight}/>
        </table>
      </div >
    )
  }
}
