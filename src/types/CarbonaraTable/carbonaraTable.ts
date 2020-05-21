import {
  CarbonaraGroupedData,
  CarbonaraGroupedDataDefinition,
  CarbonaraAction
} from '../misc'

export type CarbonaraTableProps = {
  columns: CarbonaraGroupedDataDefinition[]
  rows: CarbonaraGroupedData[]
  onRowClick?: CarbonaraAction
}
