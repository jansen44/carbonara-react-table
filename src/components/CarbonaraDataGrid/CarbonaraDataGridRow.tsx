import React from 'react'
import { CarbonaraDataGridRowProps } from '../../types'
import { CarbonaraDataGridData } from './CarbonaraDataGridData'

export const CarbonaraDataGridRow = ({ row, onRowClick }: CarbonaraDataGridRowProps) => (
  <tr
    onClick={evt => !!onRowClick && onRowClick(row, evt)}
    className={onRowClick ? 'CarbonaraTable-DataGridRow--Clickable' : ''}
  >
    {row.map((data, index) => (
      <CarbonaraDataGridData key={`${data.value}_body_${index}`} data={data} />
    ))}
  </tr>
)
