import React, { CSSProperties } from 'react'
import { CarbonaraRowDataProps } from '../../types'

export const CarbonaraRowData = ({ data }: CarbonaraRowDataProps) => {
  const style: CSSProperties = {}

  if (!!data.width) {
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
