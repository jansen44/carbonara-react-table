import React from 'react'
import { CarbonaraCardListProps } from '../../types'
import { CarbonaraCard } from './Card'

export const CarbonaraCardList = ({ cards, onCardClick }: CarbonaraCardListProps) => (
  <div className='CarbonaraTable-CardList'>
    {cards.map((card, index) => (
      <CarbonaraCard
        card={card}
        onCardClick={onCardClick}
        key={`tablerow_${card.length}_${index}`}
      />
    ))}
  </div>
)
