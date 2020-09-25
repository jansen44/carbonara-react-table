import React from 'react'
import { CarbonaraCardListProps } from '../../types'
import { CarbonaraCard } from './Card'

export const CarbonaraCardList = ({ cards, onCardClick, loading, actions, onlyColumns }: CarbonaraCardListProps) => (
  <div className='CarbonaraTable-CardList'>
    {cards.map((card, index) => (
      <CarbonaraCard
        card={card}
        onCardClick={onCardClick}
        key={`carbonaracard__${card.length}_${index}`}
        loading={loading}
        actions={actions}
        onlyColumns={onlyColumns}
      />
    ))}
  </div>
)
