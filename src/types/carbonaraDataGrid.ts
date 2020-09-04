import {
  CarbonaraGroupedData,
  CarbonaraGroupedDataDefinition,
  CarbonaraAction,
  CarbonaraSortBy
} from './misc'

export type CarbonaraDataGridProps = {
  columns: CarbonaraGroupedDataDefinition[],
  rows: CarbonaraGroupedData[],
  onRowClick?: CarbonaraAction,
  sortBy?: CarbonaraSortBy,
  onSortSelect?: (sortBy?: CarbonaraSortBy) => void,
  loading?: boolean
}
