import { CarbonaraTableAction, CarbonaraGroupedData } from '../misc'

export type CarbonaraTBodyRowActionProps = {
  row: CarbonaraGroupedData,
  actions: CarbonaraTableAction[],
  actionWidth?: string,
  rowHeight?: number,
}
