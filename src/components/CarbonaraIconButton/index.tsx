import React from 'react'
import { CarbonaraIconButtonProps } from '../../types'
import { icons } from './model'

export const CarbonaraIconButton = ({ icon, ...props }: CarbonaraIconButtonProps) => (
  <input
    type='image'
    {...props}
    src={icons[icon].icon}
    alt={icons[icon].alt}
    className={`CarbonaraTable-IconButton ${props.className ? props.className : ''}`}
  />
)
