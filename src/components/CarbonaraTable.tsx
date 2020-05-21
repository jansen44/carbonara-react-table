import React, { Component } from 'react'
import { CarbonaraTableProps } from '../types'
import { CarbonaraTBody } from './CarbonaraTBody'
import { CarbonaraTHead } from './CarbonaraTHead'

export class CarbonaraDataTable extends Component<CarbonaraTableProps> {
  render() {
    const { columns, rows, onRowClick } = this.props

    return (
      <div className='CarbonaraTable-TableContainer'>
        <table>
          <CarbonaraTHead columns={columns} />
          <CarbonaraTBody rows={rows} onRowClick={onRowClick} />
        </table>
      </div >
    )
  }
}
