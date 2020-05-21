import React, { CSSProperties } from 'react'
import { CarbonaraTBodyRowDataProps } from '../../types'

export const CarbonaraTBodyRowData = ({ data }: CarbonaraTBodyRowDataProps) => {
  const style: CSSProperties = {
    minWidth: '',
    maxWidth: '',
    width: ''
  }

  if (!!data.width && data.width.indexOf('%') === -1) {
    style['minWidth'] = data.width
    style['maxWidth'] = data.width
    style['width'] = data.width
  }

  return (
    <td style={style}>
      {data.render
        ? <data.render value={data.value} rowData={data.rowData} />
        : <div><span>{data.value}</span></div>
      }
    </td>
  )
}
