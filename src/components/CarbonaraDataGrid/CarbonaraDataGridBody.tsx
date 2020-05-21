import React from 'react'
import { CarbonaraDataGridBodyProps } from '../../types'
import { CarbonaraRow } from '../CarbonaraRow'

export const CarbonaraDataGridBody = ({ rows, onRowClick }: CarbonaraDataGridBodyProps) => (
  <table className='CarbonaraTable-DataGridBody'>
    <tbody>
      {rows.map((row, index) => (
        <CarbonaraRow
          onRowClick={onRowClick}
          key={`carbonaradatagrid__tablerow_${row.length}_${index}`}
          row={row}
        />
      ))}
    </tbody>
  </table >
)
