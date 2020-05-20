import { TableRow } from './table'
import { OnCardRowClickType } from './misc'

export type CardProps = {
  card: TableRow,
  onCardClick?: OnCardRowClickType
}
