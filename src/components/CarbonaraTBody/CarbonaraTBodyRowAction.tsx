import React, { CSSProperties } from 'react'
// import { useTooltip } from '../../hooks'
import { CarbonaraTBodyRowActionProps } from '../../types'

export const CarbonaraTBodyRowAction = ({ actions, actionWidth, rowHeight, row }: CarbonaraTBodyRowActionProps) => {
  //   const [showTooltip, hideTooltip] = useTooltip()

  const style: CSSProperties = {}

  if (!!rowHeight) {
    style.minHeight = `${rowHeight}px`
    style.maxHeight = `${rowHeight}px`
    style.height = `${rowHeight}px`
  }

  if (!!actionWidth && actionWidth.indexOf('%') === -1) {
    style['minWidth'] = actionWidth
    style['maxWidth'] = actionWidth
    style['width'] = actionWidth
  }

  return (
    <td className='CarbonaraTable-TBodyRowData' style={style}>
      <div className='CarbonaraTable-TBodyRowActions'>
        {actions.map((action, index) => (
          <action.Child
            {...action}
            key={`rowIconButton_${JSON.stringify(action)}_${index}`}
            onClick={() => action.onClick(row)}
          />
        ))}
      </div>
    </td>
  )
}
