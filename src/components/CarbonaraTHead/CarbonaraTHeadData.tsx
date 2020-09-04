import React, { CSSProperties } from 'react'
import ArrowDown from '../../assets/arrowDown.svg'
import { CarbonaraTHeadDataProps } from '../../types'

export const CarbonaraTHeadData = ({ column, sortBy, onSortSelect, loading }: CarbonaraTHeadDataProps) => {
  const style: CSSProperties = {
    minWidth: '',
    maxWidth: '',
    width: ''
  }

  const imgStyle: CSSProperties = {
    opacity: 0,
    transform: 'translateY(-50%) rotate(0)'
  }

  const handleSort = !!onSortSelect && !loading
    ? () => {
      if (!!sortBy && column.field === sortBy.field) {
        onSortSelect(sortBy.order === 'desc'
          ? undefined
          : { field: sortBy.field, order: 'desc' }
        )
      } else {
        onSortSelect({ field: column.field, order: 'asc' })
      }
    }
    : undefined

  if (!!column.width && column.width.indexOf('%') === -1) {
    style['minWidth'] = column.width
    style['maxWidth'] = column.width
    style['width'] = column.width
  }

  if (!!onSortSelect && !loading) {
    style['cursor'] = 'pointer'
  }

  if (!!sortBy && sortBy.field === column.field) {
    imgStyle['opacity'] = 1

    if (sortBy.order === 'desc') {
      imgStyle['transform'] = 'translateY(-50%) rotate(180deg)'
    }
  }

  return (
    <th style={style} onClick={handleSort}>
      <span>{column.label}</span>
      <img src={ArrowDown} style={imgStyle} />
    </th>
  )
}
