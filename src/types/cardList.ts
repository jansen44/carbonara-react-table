import { TableRow } from './table'
import { OnCardRowClickType } from './misc'

export type CardListProps = {
  cards: TableRow[],
  onCardClick?: OnCardRowClickType
}
