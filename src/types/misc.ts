import { MouseEvent, FunctionComponent } from 'react'

// ? RowClick, CardClick (ColumnClick on a near future?)
export type CarbonaraAction = (data: object, evt: CarbonaraActionEvent) => void

// ? Possible events for possible elements with a CarbonaraAction attached
export type CarbonaraActionEvent =
  MouseEvent<HTMLTableRowElement, globalThis.MouseEvent>
  | MouseEvent<HTMLDivElement, globalThis.MouseEvent>

// ? Rows and Cards
export type CarbonaraGroupedData = CarbonaraData[]

// ? Props for the custom render component defined on the table column
export interface CarbonaraGroupedDataDefinitionRenderProps {
  value: string | number,
  rowData: object
}

// ? Columns and maybe more things in a near future
export interface CarbonaraGroupedDataDefinition {
  field: string,
  label: string,
  width?: string,
  align?: 'left' | 'center' | 'right' | 'justify',
  render?: FunctionComponent<CarbonaraGroupedDataDefinitionRenderProps>
}

// ? Cells and Card Items
export interface CarbonaraData extends CarbonaraGroupedDataDefinition {
  value: string | number,
  rowData: object
}
