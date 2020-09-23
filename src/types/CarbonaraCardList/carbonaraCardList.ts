import { CarbonaraAction, CarbonaraGroupedData, CarbonaraTableAction } from '../misc'

export type CarbonaraCardListProps = {
  cards: CarbonaraGroupedData[],
  onCardClick?: CarbonaraAction,
  actions?: CarbonaraTableAction[],
  loading?: boolean
}
