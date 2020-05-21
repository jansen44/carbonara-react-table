import React from 'react'
import { CarbonaraCardProps } from '../../types'
import { CarbonaraCardItem } from './CardItem'

export const CarbonaraCard = ({ card, onCardClick }: CarbonaraCardProps) => (
  <div
    onClick={evt => !!onCardClick && onCardClick(card, evt)}
    className={`CarbonaraTable-Card ${onCardClick ? 'CarbonaraTable-ClickableCard' : ''}`}
  >
    {card.map((data, index) => (
      <CarbonaraCardItem key={`carbonaracarditem_${data.value}_body_${index}`} data={data} />
    ))}
  </div>
)
