import React from 'react'
import { CarbonaraTBodyProps } from '../../types'
import { CarbonaraTBodyRow } from './CarbonaraTBodyRow'

export const CarbonaraTBody = ({ rows, onRowClick, className, rowHeight, actions, actionsWidth }: CarbonaraTBodyProps) => (
  <tbody className={className || ''}>
    {rows.map((row, index) => (
      <CarbonaraTBodyRow
        onRowClick={onRowClick}
        key={`carbonaradatagrid__tablerow_${row.length}_${index}`}
        row={row}
        rowHeight={rowHeight}
        actions={actions}
        actionsWidth={actionsWidth}
      />
    ))}
  </tbody>
)
