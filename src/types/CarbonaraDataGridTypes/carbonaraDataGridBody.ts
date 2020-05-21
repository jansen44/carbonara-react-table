import { CarbonaraAction, CarbonaraGroupedData } from '../misc'

export type CarbonaraDataGridBodyProps = {
  rows: CarbonaraGroupedData[],
  onRowClick?: CarbonaraAction
}
