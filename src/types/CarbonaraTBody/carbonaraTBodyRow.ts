import { CarbonaraAction, CarbonaraGroupedData, CarbonaraTableAction } from '../misc'

export type CarbonaraTBodyRowProps = {
  row: CarbonaraGroupedData,
  rowHeight?: number,
  onRowClick?: CarbonaraAction,
  actions?: CarbonaraTableAction[],
  actionsWidth?: string
}
