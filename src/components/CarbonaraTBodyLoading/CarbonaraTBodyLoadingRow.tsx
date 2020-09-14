import React from 'react'
import { CarbonaraTBodyLoadingRowProps } from '../../types'
import { CarbonaraTBodyLoadingRowData } from './CarbonaraTBodyLoadingRowData'

export const CarbonaraTBodyLoadingRow = ({ rowHeight, columns }: CarbonaraTBodyLoadingRowProps) => (
    <tr className='CarbonaraTable-TBodyLoadingRow'>
        {columns.map((column, index) => (
            <CarbonaraTBodyLoadingRowData
                key={`CarbonaraTBodyLoadingRowData${new Date().getTime()}${index}`}
                width={column.width}
                rowHeight={rowHeight}
            />
        ))}
    </tr>
)

export default CarbonaraTBodyLoadingRow
