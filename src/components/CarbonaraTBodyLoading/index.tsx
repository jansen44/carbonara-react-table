import React from 'react'
import { CarbonaraTBodyLoadingProps } from '../../types'
import { CarbonaraTBodyLoadingRow } from './CarbonaraTBodyLoadingRow'

export const CarbonaraTBodyLoading = ({ columns, rowHeight, shimmerLoadingRowsTotal }: CarbonaraTBodyLoadingProps) => {
    const rows = []
    for (let i = 0; i < shimmerLoadingRowsTotal; i++) {
        rows.push(() => <CarbonaraTBodyLoadingRow columns={columns} rowHeight={rowHeight} />)
    }

    return (
        <tbody className='CarbonaraTable-TBodyLoading'>
            {rows.map((Row, index) => (
                <Row key={`CarbonaraTBodyLoadingRow${new Date().getTime()}${index}`} />)
            )}
        </tbody>
    )
}

export default CarbonaraTBodyLoading
