import { CarbonaraAction, CarbonaraGroupedData } from '../misc'

export type CarbonaraCardListProps = {
  cards: CarbonaraGroupedData[],
  onCardClick?: CarbonaraAction
}
