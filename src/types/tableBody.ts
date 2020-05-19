import { MouseEvent } from 'react'
import { TableRow } from './table'

export type TableBodyProps = {
  rows: TableRow[],
  onRowClick?: (rowData: object, evt: MouseEvent<HTMLTableRowElement, globalThis.MouseEvent>) => void
}
