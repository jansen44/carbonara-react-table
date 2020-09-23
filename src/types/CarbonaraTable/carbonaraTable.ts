import {
  CarbonaraGroupedData,
  CarbonaraGroupedDataDefinition,
  CarbonaraAction,
  CarbonaraSortBy,
  CarbonaraTableAction
} from '../misc'

export type CarbonaraTableProps = {
  columns: CarbonaraGroupedDataDefinition[]
  rows: CarbonaraGroupedData[]
  onRowClick?: CarbonaraAction,
  sortBy?: CarbonaraSortBy,
  onSortSelect?: (sortBy?: CarbonaraSortBy) => void,
  rowHeight?: number,
  loading?: boolean,
  shimmerLoadingRowsTotal: number,
  actions?: CarbonaraTableAction[],
  actionsTitle?: string,
  actionsWidth?: string
}
