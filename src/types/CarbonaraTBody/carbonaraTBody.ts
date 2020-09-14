import { CarbonaraAction, CarbonaraGroupedData } from '../misc'

export type CarbonaraTBodyProps = {
  rows: CarbonaraGroupedData[],
  onRowClick?: CarbonaraAction,
  className?: string,
  rowHeight?: number
}
