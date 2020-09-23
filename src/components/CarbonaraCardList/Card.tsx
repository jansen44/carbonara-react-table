import React from 'react'
import { CarbonaraCardProps } from '../../types'
import { CarbonaraCardItem } from './CardItem'
import { CarbonaraCardActions } from './CardActions'

export const CarbonaraCard = ({ card, onCardClick, actions }: CarbonaraCardProps) => (
  <div
    onClick={evt => !!onCardClick && onCardClick(card, evt)}
    className={`CarbonaraTable-Card ${onCardClick ? 'CarbonaraTable-ClickableCard' : ''}`}
  >
    <div className='CarbonaraTable-CardContent'>
      {card.map((data, index) => (
        <CarbonaraCardItem key={`carbonaracarditem_${data.value}_body_${index}`} data={data} />
      ))}
    </div>

    {!!actions && <CarbonaraCardActions card={card} actions={actions} />}
  </div>
)
