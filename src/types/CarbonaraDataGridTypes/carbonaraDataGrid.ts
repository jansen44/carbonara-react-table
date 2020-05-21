import {
  CarbonaraGroupedData,
  CarbonaraGroupedDataDefinition,
  CarbonaraAction
} from '../misc'

export type CarbonaraDataGridProps = {
  columns: CarbonaraGroupedDataDefinition[]
  rows: CarbonaraGroupedData[]
  onRowClick?: CarbonaraAction
}
