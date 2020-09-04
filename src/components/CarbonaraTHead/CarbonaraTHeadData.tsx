import React, { CSSProperties } from 'react'
import { CarbonaraTHeadDataProps } from '../../types'

export const CarbonaraTHeadData = ({ column, sortBy }: CarbonaraTHeadDataProps) => {
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

  if (!!sortBy && column.field === sortBy.field) {
    console.log('Ordered by: ', sortBy.field)
    console.log('Order: ', sortBy.order)
  }
   
  return (
    <th style={style}>
      {column.label}
    </th>
  )
}
