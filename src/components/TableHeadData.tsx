import React, { CSSProperties } from 'react'
import { TableHeadDataProps } from '../types'

export const TableHeadData = ({ column }: TableHeadDataProps) => {
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
