import React, { Component, CSSProperties } from 'react'
import { CarbonaraTableProps } from '../../types'
import { CarbonaraRow } from '../CarbonaraRow'

export class CarbonaraDataTable extends Component<CarbonaraTableProps> {
  render() {
    const { columns, rows, onRowClick } = this.props

    console.log(rows)

    return (
      <div className='CarbonaraTable-TableContainer'>
        <table>
          <thead>
            <tr>
              {columns.map((column, index) => {
                const style: CSSProperties = {}

                if (!!column.width) {
                  style['width'] = column.width
                }

                return (
                  <th align='left' style={style} key={`${column.label}__${column.field}_header_${index}`}>
                    {column.label}
                  </th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <CarbonaraRow
                onRowClick={onRowClick}
                key={`carbonaradatagrid__tablerow_${row.length}_${index}`}
                row={row}
              />
            ))}
          </tbody>
        </table>
      </div >
    )
  }
}
