import React from 'react'
import { CarbonaraTBodyProps } from '../../types'
import { CarbonaraTBodyRow } from './CarbonaraTBodyRow'

export const CarbonaraTBody = ({ rows, onRowClick, className }: CarbonaraTBodyProps) => (
  <tbody className={className || ''}>
    {rows.map((row, index) => (
      <CarbonaraTBodyRow
        onRowClick={onRowClick}
        key={`carbonaradatagrid__tablerow_${row.length}_${index}`}
        row={row}
      />
    ))}
  </tbody>
)
