import React from 'react'
import { TableRowProps } from '../types'
import { TableData } from './TableData'

export const TableRow = ({ row, onRowClick }: TableRowProps) => (
  <tr
    onClick={evt => !!onRowClick && onRowClick(row, evt)}
    className={onRowClick ? 'CarbonaraTable-ClickableRow' : ''}
  >
    {row.map((data, index) => (
      <TableData key={`${data.value}_body_${index}`} data={data} />
    ))}
  </tr>
)
