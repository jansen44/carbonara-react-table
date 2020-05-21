import React, { Component, CSSProperties } from 'react'

import { CarbonaraTableProps } from '../../types'

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
              <tr
                key={`carbonaratable__tablerow_${row.length}_${index}`}
                onClick={evt => !!onRowClick && onRowClick(row, evt)}
                className={onRowClick ? 'CarbonaraTable-DataGridRow--Clickable' : ''}
              >
                {row.map((data, index) => {
                  const style: CSSProperties = {}

                  if (!!data.width) {
                    style['width'] = data.width
                  }

                  return (
                    <td style={style} key={`${data.value}_body_${index}`}>
                      {data.render
                        ? <data.render value={data.value} rowData={data.rowData} />
                        : <div><span>{data.value}</span></div>
                      }
                    </td>
                  )
                }
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div >
    )
  }
}
