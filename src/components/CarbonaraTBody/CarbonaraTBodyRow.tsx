import React, { CSSProperties } from 'react'
import { CarbonaraTBodyRowProps } from '../../types'
import { CarbonaraTBodyRowData } from './CarbonaraTBodyRowData'

export const CarbonaraTBodyRow = ({ row, onRowClick, rowHeight }: CarbonaraTBodyRowProps) => {
  const style: CSSProperties = {
    minHeight: '',
    maxHeight: '',
    height: ''
  }

  if (!!rowHeight) {
    style.minHeight = `${rowHeight}px`
    style.maxHeight = `${rowHeight}px`
    style.height = `${rowHeight}px`
  }

  return (
    <tr
      style={style}
      onClick={evt => !!onRowClick && onRowClick(row, evt)}
      className={`CarbonaraTable-TBodyRow ${onRowClick ? 'CarbonaraTable-TBodyRow--Clickable' : ''}`}
    >
      {row.map((data, index) => (
        <CarbonaraTBodyRowData key={`${data.value}_body_${index}`} data={data} />
      ))}
    </tr>
  )
}
