import { FunctionComponent } from 'react'
import { OnCardRowClickType } from './misc'

export type TableComponentProps = {
  columns: TableColumn[]
  data: object[]
  className?: string
  onRowClick?: OnCardRowClickType
  loading?: boolean
  page?: number
  handleSetPage?: (page: number) => void
  firstPage?: number
  lastPage?: number
  showCards?: boolean
  maxShowCardsWidth: number
}

export type TableComponentState = {
  tableRows: TableRow[]
  oldData: object[]
  tableDimensions: { width: number, height: number }
}

export interface TableColumn {
  field: string,
  label: string,
  width?: string,
  align?: 'left' | 'center' | 'right' | 'justify',
  render?: FunctionComponent<TableColumnRenderProps>
}

export interface TableColumnRenderProps {
  value: string | number,
  rowData: object
}

export interface TableData extends TableColumn {
  value: string | number,
  rowData: object
}

export type TableRow = TableData[]
