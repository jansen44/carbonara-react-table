import React from 'react'
import { TableBodyProps } from '../types'
import { TableRow } from './TableRow'

export const TableBody = ({ rows, onRowClick }: TableBodyProps) => (
  <table className='CarbonaraTable-Body'>
    <tbody>
      {rows.map((row, index) => (
        <TableRow
          onRowClick={onRowClick}
          key={`tablerow_${row.length}_${index}`}
          row={row}
        />
      ))}
    </tbody>
  </table >
)
