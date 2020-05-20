import React from 'react'
import { Card } from './Card'
import { CardListProps } from '../types'

export const CardList = ({ cards, onCardClick }: CardListProps) => (
  <div className='CarbonaraTable-CardList'>
    {cards.map((card, index) => (
      <Card
        card={card}
        onCardClick={onCardClick}
        key={`tablerow_${card.length}_${index}`}
      />
    ))}
  </div >
)
