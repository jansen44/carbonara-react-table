import React, { CSSProperties } from 'react'
import { CarbonaraTBodyLoadingRowDataProps } from '../../types'

export const CarbonaraTBodyLoadingRowData = ({ rowHeight, width }: CarbonaraTBodyLoadingRowDataProps) => {
    const style: CSSProperties = {}

    if (!!rowHeight) {
        style.minHeight = `${rowHeight}px`
        style.maxHeight = `${rowHeight}px`
        style.height = `${rowHeight}px`
    }

    if (!!width && width.indexOf('%') === -1) {
        style['minWidth'] = width
        style['maxWidth'] = width
        style['width'] = width
    }

    return (
        <td className='CarbonaraTable-TBodyLoadingRowData' style={style}>
        </td>
    )
}

export default CarbonaraTBodyLoadingRowData
