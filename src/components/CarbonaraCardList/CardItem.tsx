import React from 'react'
import { CarbonaraCardItemProps } from '../../types'

export const CarbonaraCardItem = ({ data }: CarbonaraCardItemProps) => (
  <div className='CarbonaraTable-CardItem'>
    <div className='CarbonaraTable-CardItem-Name'>
      {data.label}
    </div>
    <div className='CarbonaraTable-CardItem-Value'>
      {data.render
        ? <data.render value={data.value} rowData={data.rowData} />
        : <div><span>{data.value}</span></div>
      }
    </div>
  </div>
)
