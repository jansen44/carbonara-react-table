import React from 'react'
import { CarbonaraDataGridHeadProps } from '../../types'
import { CarbonaraDataGridHeadData } from './CarbonaraDataGridHeadData'

export const CarbonaraDataGridHead = ({ columns }: CarbonaraDataGridHeadProps) => (
  <table>
    <thead className='CarbonaraTable-DataGridHead'>
      <tr>
        {columns.map((column, index) => (
          <CarbonaraDataGridHeadData
            key={`${column.label}__${column.field}_header_${index}`}
            column={column}
          />
        ))}
      </tr>
    </thead>
  </table>
)
