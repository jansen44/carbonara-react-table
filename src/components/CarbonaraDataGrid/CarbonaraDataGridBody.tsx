import React from 'react'
import { CarbonaraDataGridBodyProps } from '../../types'
import { CarbonaraDataGridRow } from './CarbonaraDataGridRow'

export const CarbonaraDataGridBody = ({ rows, onRowClick }: CarbonaraDataGridBodyProps) => (
  <table className='CarbonaraTable-DataGridBody'>
    <tbody>
      {rows.map((row, index) => (
        <CarbonaraDataGridRow
          onRowClick={onRowClick}
          key={`tablerow_${row.length}_${index}`}
          row={row}
        />
      ))}
    </tbody>
  </table >
)
