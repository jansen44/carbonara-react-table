import React from 'react'
import { CarbonaraTHeadProps } from '../../types'
import { CarbonaraTHeadData } from './CarbonaraTHeadData'

export const CarbonaraTHead = ({ columns, className }: CarbonaraTHeadProps) => (
  <thead className={`CarbonaraTable-THead ${className || ''}`}>
    <tr>
      {columns.map((column, index) => (
        <CarbonaraTHeadData
          key={`carbonaradatagrid_${column.label}__${column.field}_header_${index}`}
          column={column}
        />
      ))}
    </tr>
  </thead>
)
