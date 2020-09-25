import { CarbonaraAction, CarbonaraGroupedData, CarbonaraTableAction } from '../misc'

export type CarbonaraCardProps = {
  card: CarbonaraGroupedData,
  onCardClick?: CarbonaraAction,
  actions?: CarbonaraTableAction[],
  loading?: boolean,
  onlyColumns?: boolean
}
