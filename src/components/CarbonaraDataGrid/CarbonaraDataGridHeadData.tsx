import React, { CSSProperties } from 'react'
import { CarbonaraDataGridHeadDataProps } from '../../types'

export const CarbonaraDataGridHeadData = ({ column }: CarbonaraDataGridHeadDataProps) => {
  const style: CSSProperties = {}

  if (!!column.width) {
    style['minWidth'] = column.width
    style['maxWidth'] = column.width
  }

  return (
    <th style={style}>
      {column.label}
    </th>
  )
}
