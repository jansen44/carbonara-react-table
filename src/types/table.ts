import { FunctionComponent, MouseEvent } from 'react'

export type TableComponentProps = {
  columns: TableColumn[]
  data: object[]
  className?: string
  onRowClick?: (rowData: object, evt: MouseEvent<HTMLTableRowElement, globalThis.MouseEvent>) => void
  loading?: boolean
  page?: number
  handleSetPage?: (page: number) => void
  firstPage?: number
  lastPage?: number
}

export type TableComponentState = {
  tableRows: TableRow[]
  oldData: object[]
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
