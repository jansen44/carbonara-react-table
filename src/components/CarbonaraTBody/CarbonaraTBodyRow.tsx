import React from 'react'
import { CarbonaraTBodyRowProps } from '../../types'
import { CarbonaraTBodyRowData } from './CarbonaraTBodyRowData'

export const CarbonaraTBodyRow = ({ row, onRowClick }: CarbonaraTBodyRowProps) => (
  <tr
    onClick={evt => !!onRowClick && onRowClick(row, evt)}
    className={`CarbonaraTable-TBodyRow ${onRowClick ? 'CarbonaraTable-TBodyRow--Clickable' : ''}`}
  >
    {row.map((data, index) => (
      <CarbonaraTBodyRowData key={`${data.value}_body_${index}`} data={data} />
    ))}
  </tr>
)
