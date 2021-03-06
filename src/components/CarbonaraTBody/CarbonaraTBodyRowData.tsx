import React, { CSSProperties, useRef, useLayoutEffect, useState, useEffect } from 'react'
import { useTooltip } from '../../hooks'
import { CarbonaraTBodyRowDataProps } from '../../types'

export const CarbonaraTBodyRowData = ({ data, rowHeight }: CarbonaraTBodyRowDataProps) => {
  const [divWidth, setDivWidth] = useState(0)
  const [spanWidth, setSpanWidth] = useState(0)
  const [spanHeight, setSpanHeight] = useState(0)
  const [formattedValue, setFormattedValue] = useState(data.value)
  const [showTooltip, hideTooltip] = useTooltip()

  const style: CSSProperties = {}
  const divRef = useRef<HTMLDivElement>(null)
  const spanRef = useRef<HTMLSpanElement>(null)
  const tdRef = useRef<HTMLTableDataCellElement>(null)

  if (!!rowHeight) {
    style.minHeight = `${rowHeight}px`
    style.maxHeight = `${rowHeight}px`
    style.height = `${rowHeight}px`
  }

  useLayoutEffect(() => {
    setDivWidth(divRef.current?.offsetWidth || 0)
    setSpanWidth(spanRef.current?.offsetWidth || 0)
    setSpanHeight(spanRef.current?.offsetHeight || 0)
  }, [divRef, spanRef, tdRef])

  // ? Handle overflowing string content
  useEffect(() => {
    let value = data.value
    if (!!rowHeight && !data.render && !!spanRef.current) {
      const factor = data.wordSplitFactor || 2
      // Todo: Treat cases where font-size is not in px.
      const fontWidthPX = parseFloat(window.getComputedStyle(spanRef.current).fontSize) / factor
      const sliceOffset = (divWidth / fontWidthPX) - fontWidthPX

      if (
        (spanHeight > rowHeight && typeof value === 'string' && value.length > sliceOffset)
        || divWidth < spanWidth) {
        value = `${value.slice(0, sliceOffset)}...`
      }
    }
    setFormattedValue(value)
  }, [divWidth, spanHeight, spanWidth])

  // ? Add tooltip handlers
  useEffect(() => {
    let content = !!data.setTooltipContent ? data.setTooltipContent(data.value, data.rowData) : null
    if (!content && !data.setTooltipContent) {
      content = formattedValue !== data.value ? data.value : null
    }

    if (!!tdRef.current && !!content && content !== null) {
      tdRef.current.addEventListener('mouseenter', () => showTooltip(content, tdRef.current))
      tdRef.current.addEventListener('mouseleave', () => hideTooltip())
    }

    return () => hideTooltip()
  }, [formattedValue, tdRef, data])

  if (!!data.width && data.width.indexOf('%') === -1) {
    style['minWidth'] = data.width
    style['maxWidth'] = data.width
    style['width'] = data.width
  }

  if (!!data.render) {
    return (
      <td className='CarbonaraTable-TBodyRowData' style={style} ref={tdRef}>
        <data.render value={data.value} rowData={data.rowData} />
      </td>
    )
  }

  return (
    <td className='CarbonaraTable-TBodyRowData' style={style} ref={tdRef} >
      <div ref={divRef}>
        <span ref={spanRef}>{formattedValue}</span>
      </div>
    </td>
  )
}
