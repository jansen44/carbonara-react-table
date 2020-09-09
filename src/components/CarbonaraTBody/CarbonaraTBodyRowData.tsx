import React, { CSSProperties, useRef, useLayoutEffect, useState } from 'react'
import { CarbonaraTBodyRowDataProps } from '../../types'

export const CarbonaraTBodyRowData = ({ data, rowHeight }: CarbonaraTBodyRowDataProps) => {
  const [divWidth, setDivWidth] = useState(0)
  const [tdHeight, setTdHeight] = useState(0)

  const tdRef = useRef<HTMLTableDataCellElement>(null)
  const divRef = useRef<HTMLDivElement>(null)
  const spanRef = useRef<HTMLSpanElement>(null)

  useLayoutEffect(() => {
    setDivWidth(divRef.current?.offsetWidth || 0)
    setTdHeight(tdRef.current?.offsetHeight || 0)
  }, [tdRef, divRef, spanRef])

  const style: CSSProperties = {
    wordBreak: 'break-all',
    paddingTop: '15px',
    paddingBottom: '15px'
  }

  if (!!data.width && data.width.indexOf('%') === -1) {
    style['minWidth'] = data.width
    style['maxWidth'] = data.width
    style['width'] = data.width
  }

  let value = data.value
  if (!!rowHeight && !data.render && !!spanRef.current) {
    style['paddingTop'] = ''
    style['paddingBottom'] = ''

    // Todo: Treat cases where font-size is not in px.
    const fontWidthPX = parseFloat(window.getComputedStyle(spanRef.current).fontSize) / 2
    const sliceOffset = (divWidth / fontWidthPX) - (fontWidthPX / 5)

    if (tdHeight > rowHeight && typeof value === 'string' && value.length > sliceOffset) {
      value = `${value.slice(0, sliceOffset)}...`
      style['wordBreak'] = 'normal'
      style['whiteSpace'] = 'nowrap'
    }
  }

  return (
    <td ref={tdRef} style={style}>
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
