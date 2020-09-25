import { MouseEvent, FunctionComponent } from 'react'

// ? RowClick, CardClick (ColumnClick on a near future?)
export type CarbonaraAction = (data: any, evt: CarbonaraActionEvent) => void

// ? Action inserted at the final of a table row or at a section a card
export type CarbonaraTableAction = {
  className?: string,
  Child: FunctionComponent<CarbonaraTableActionChildProps>,
  onClick: (row: CarbonaraGroupedData) => void
}

export type CarbonaraTableActionChildProps = {
  data?: any,
  className?: string,
  onClick: (row: CarbonaraGroupedData) => void
}

// ? Possible events for possible elements with a CarbonaraAction attached
export type CarbonaraActionEvent =
  MouseEvent<HTMLTableRowElement, globalThis.MouseEvent>
  | MouseEvent<HTMLDivElement, globalThis.MouseEvent>

// ? Rows and Cards
export type CarbonaraGroupedData = CarbonaraData[]

// ? Props for the custom render component defined on the table column
export interface CarbonaraGroupedDataDefinitionRenderProps {
  value: any,
  rowData: any
}

// ? Columns and maybe more things in a near future
export interface CarbonaraGroupedDataDefinition {
  field: string,
  label: string,
  width?: string,
  align?: 'left' | 'center' | 'right' | 'justify',
  render?: FunctionComponent<CarbonaraGroupedDataDefinitionRenderProps>,
  setTooltipContent?: CarbonaraSetTooltip,
  wordSplitFactor?: number
}

// ? Cells and Card Items
export interface CarbonaraData extends CarbonaraGroupedDataDefinition {
  value: any,
  rowData: any,
  setTooltipContent?: CarbonaraSetTooltip
}

// ? SortBy Object
export interface CarbonaraSortBy {
  field: string,
  order: 'asc' | 'desc'
}

export type CarbonaraSetTooltip = (value: any, rowData: any) => string | string[] | null | undefined