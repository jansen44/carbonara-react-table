import React, { CSSProperties } from 'react'
import { CarbonaraTHeadDataProps } from '../../types'

export const CarbonaraTHeadData = ({ column }: CarbonaraTHeadDataProps) => {
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
