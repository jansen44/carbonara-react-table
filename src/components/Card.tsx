import React from 'react'
import { CardItem } from './CardItem'
import { CardProps } from '../types'

export const Card = ({ card, onCardClick }: CardProps) => (
  <div
    onClick={evt => !!onCardClick && onCardClick(card, evt)}
    className={`CarbonaraTable-Card ${onCardClick ? 'CarbonaraTable-ClickableCard' : ''}`}
  >
    {card.map((data, index) => (
      <CardItem key={`${data.value}_body_${index}`} data={data} />
    ))}
  </div>
)
