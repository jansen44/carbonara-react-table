import React, { CSSProperties } from 'react'
import { CarbonaraTBodyRowProps } from '../../types'
import { CarbonaraTBodyRowData } from './CarbonaraTBodyRowData'
import { CarbonaraTBodyRowAction } from './CarbonaraTBodyRowAction'

export const CarbonaraTBodyRow = ({ row, onRowClick, rowHeight, actions, actionsWidth }: CarbonaraTBodyRowProps) => {
  const style: CSSProperties = {
    minHeight: '',
    maxHeight: '',
    height: ''
  }

  if (!!rowHeight) {
    style.minHeight = `${rowHeight}px`
    style.maxHeight = `${rowHeight}px`
    style.height = `${rowHeight}px`
  }

  return (
    <tr
      style={style}
      onClick={evt => !!onRowClick && onRowClick(row, evt)}
      className={`CarbonaraTable-TBodyRow ${onRowClick ? 'CarbonaraTable-TBodyRow--Clickable' : ''}`}
    >
      {row.map((data, index) => (
        <CarbonaraTBodyRowData
          key={`${data.value}_body_${index}`}
          data={data}
          rowHeight={rowHeight}
        />
      ))}
      {(actions && actions.length > 0) && (
        <CarbonaraTBodyRowAction
          actions={actions}
          row={row}
          actionWidth={actionsWidth}
          rowHeight={rowHeight}
        />
      )}
    </tr>
  )
}
