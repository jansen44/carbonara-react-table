import React, { CSSProperties } from 'react'
import { CarbonaraTHeadDataProps } from '../../types'

export const CarbonaraTHeadData = ({ column }: CarbonaraTHeadDataProps) => {
  const style: CSSProperties = {
    minWidth: '',
    maxWidth: '',
    width: ''
  }

  if (!!column.width && column.width.indexOf('%') === -1) {
    style['minWidth'] = column.width
    style['maxWidth'] = column.width
    style['width'] = column.width
  }
  
  return (
    <th style={style}>
      {column.label}
    </th>
  )
}
