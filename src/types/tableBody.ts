import { TableRow } from './table'
import { OnCardRowClickType } from './misc'

export type TableBodyProps = {
  rows: TableRow[],
  onRowClick?: OnCardRowClickType
}
