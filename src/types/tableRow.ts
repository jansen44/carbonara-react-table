import { MouseEvent } from 'react'
import { TableRow } from './table'

export type TableRowProps = {
  row: TableRow,
  onRowClick?: (rowData: object, evt: MouseEvent<HTMLTableRowElement, globalThis.MouseEvent>) => void
}
