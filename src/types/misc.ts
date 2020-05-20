import { MouseEvent } from 'react'

export type OnCardRowClickType = (rowData: object, evt: CardRowEvent) => void

export type CardRowEvent =
  MouseEvent<HTMLTableRowElement, globalThis.MouseEvent>
  | MouseEvent<HTMLDivElement, globalThis.MouseEvent>
