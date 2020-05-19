import React from 'react'
import { TableHeadProps } from '../types/tableHead'
import { TableHeadData } from './TableHeadData'

export const TableHead = ({ columns }: TableHeadProps) => (
  <table>
    <thead className='CarbonaraTable-Head'>
      <tr>
        {columns.map((column, index) => (
          <TableHeadData
            key={`${column.label}__${column.field}_header_${index}`}
            column={column}
          />
        ))}
      </tr>
    </thead>
  </table>
)
