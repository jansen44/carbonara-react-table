import React from 'react'
import { IconButtonProps } from '../../types'
import { icons } from './model'

export const IconButton = ({ icon, ...props }: IconButtonProps) => (
  <input
    type='image'
    {...props}
    src={icons[icon].icon}
    alt={icons[icon].alt}
    className={`CarbonaraTable-IconButton ${props.className ? props.className : ''}`}
  />
)
