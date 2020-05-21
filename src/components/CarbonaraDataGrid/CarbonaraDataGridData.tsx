import React, { CSSProperties } from 'react'
import { CarbonaraDataGridDataProps } from '../../types'

export const CarbonaraDataGridData = ({ data }: CarbonaraDataGridDataProps) => {
  const style: CSSProperties = {}

  if (!!data.width) {
    style['minWidth'] = data.width
    style['maxWidth'] = data.width
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
