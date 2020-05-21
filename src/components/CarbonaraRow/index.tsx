import React from 'react'
import { CarbonaraRowProps } from '../../types'
import { CarbonaraRowData } from './CarbonaraRowData'

export const CarbonaraRow = ({ row, onRowClick }: CarbonaraRowProps) => (
  <tr
    onClick={evt => !!onRowClick && onRowClick(row, evt)}
    className={`CarbonaraTable-Row ${onRowClick ? 'CarbonaraTable-Row--Clickable' : ''}`}
  >
    {row.map((data, index) => (
      <CarbonaraRowData key={`${data.value}_body_${index}`} data={data} />
    ))}
  </tr>
)
