import React, { CSSProperties, useRef, useState, useLayoutEffect, useEffect } from 'react'
import { useTooltip } from '../../hooks'
import ArrowDown from '../../assets/arrowDown.svg'
import { CarbonaraTHeadDataProps } from '../../types'

export const CarbonaraTHeadData = ({ column, sortBy, onSortSelect, loading }: CarbonaraTHeadDataProps) => {
  const [thWidth, setThWidth] = useState(0)
  const [spanWidth, setSpanWidth] = useState(0)
  const [formattedValue, setFormattedValue] = useState(column.label)
  const [showTooltip, hideTooltip] = useTooltip()

  const spanRef = useRef<HTMLSpanElement>(null)
  const thRef = useRef<HTMLTableDataCellElement>(null)

  const style: CSSProperties = {
    minWidth: '',
    maxWidth: '',
    width: ''
  }

  const imgStyle: CSSProperties = {
    opacity: 0,
    transform: 'translateY(-50%) rotate(0)'
  }

  useLayoutEffect(() => {
    setThWidth(thRef.current?.offsetWidth || 0)
    setSpanWidth(spanRef.current?.offsetWidth || 0)
  }, [thRef, spanRef])

  // ? Handle overflowing string content
  useEffect(() => {
    let value = column.label
    if (!!spanRef.current) {
      // Todo: Treat cases where font-size is not in px.
      const fontWidthPX = parseFloat(window.getComputedStyle(spanRef.current).fontSize) / 2
      const sliceOffset = (thWidth / fontWidthPX) - (fontWidthPX * 2)

      if (thWidth < spanWidth) {
        value = `${value.slice(0, sliceOffset)}...`
      }
    }
    setFormattedValue(value)
  }, [thWidth, spanWidth])

  // ? Add tooltip handlers
  useEffect(() => {
    let content = formattedValue !== column.label ? column.label : null

    if (!!thRef.current && !!content && content !== null) {
      thRef.current.addEventListener('mouseenter', () => showTooltip(content?.toUpperCase(), thRef.current))
      thRef.current.addEventListener('mouseleave', () => hideTooltip())
    }
  }, [formattedValue, thRef])

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

    if (sortBy.order === 'asc') {
      imgStyle['transform'] = 'translateY(-50%) rotate(180deg)'
    }
  }

  return (
    <th ref={thRef} style={style} onClick={handleSort}>
      <span ref={spanRef}>{formattedValue}</span>
      <img src={ArrowDown} style={imgStyle} />
    </th>
  )
}
