import React, { CSSProperties, useRef, useLayoutEffect, useState } from 'react'
import { CarbonaraTBodyRowDataProps } from '../../types'

export const CarbonaraTBodyRowData = ({ data, rowHeight }: CarbonaraTBodyRowDataProps) => {
  const [divWidth, setDivWidth] = useState(0)
  const [spanWidth, setSpanWidth] = useState(0)
  const [spanHeight, setSpanHeight] = useState(0)

  const divRef = useRef<HTMLDivElement>(null)
  const spanRef = useRef<HTMLSpanElement>(null)

  useLayoutEffect(() => {
    setDivWidth(divRef.current?.offsetWidth || 0)
    setSpanWidth(spanRef.current?.offsetWidth || 0)
    setSpanHeight(spanRef.current?.offsetHeight || 0)
  }, [divRef, spanRef])

  const style: CSSProperties = {}

  if (!!data.width && data.width.indexOf('%') === -1) {
    style['minWidth'] = data.width
    style['maxWidth'] = data.width
    style['width'] = data.width
  }

  let value = data.value
  if (!!rowHeight && !data.render && !!spanRef.current) {
    // Todo: Treat cases where font-size is not in px.
    const fontWidthPX = parseFloat(window.getComputedStyle(spanRef.current).fontSize) / 2
    const sliceOffset = (divWidth / fontWidthPX) - fontWidthPX

    if (
      (spanHeight > rowHeight && typeof value === 'string' && value.length > sliceOffset)
      || divWidth < spanWidth) {
      value = `${value.slice(0, sliceOffset)}...`
    }
  }

  return (
    <td className='CarbonaraTable-TBodyRowData' style={style}>
      {data.render
        ? <data.render value={value} rowData={data.rowData} />
        : (
          <div ref={divRef}>
            <span ref={spanRef}>{value}</span>
          </div>
        )
      }
    </td>
  )
}
