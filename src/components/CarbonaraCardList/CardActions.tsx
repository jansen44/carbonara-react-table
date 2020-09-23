import React from 'react'
import { CarbonaraCardActionsProps } from '../../types'

export const CarbonaraCardActions = ({ actions, card }: CarbonaraCardActionsProps) => (
    <div className='CarbonaraTable-CardActions'>
        {actions.map((action, index) => (
            <action.Child
                {...action}
                key={`rowIconButton_${JSON.stringify(action)}_${index}`}
                onClick={() => action.onClick(card)}
            />
        ))}
    </div>
)

export default CarbonaraCardActions
