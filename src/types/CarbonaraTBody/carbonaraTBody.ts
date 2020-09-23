import { CarbonaraAction, CarbonaraGroupedData, CarbonaraTableAction } from '../misc'

export type CarbonaraTBodyProps = {
  rows: CarbonaraGroupedData[],
  onRowClick?: CarbonaraAction,
  className?: string,
  rowHeight?: number,
  actions?: CarbonaraTableAction[],
  actionsWidth?: string
}
