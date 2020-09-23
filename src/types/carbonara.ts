import { FunctionComponent } from 'react'
import {
  CarbonaraAction,
  CarbonaraGroupedDataDefinition,
  CarbonaraGroupedData,
  CarbonaraSortBy,
  CarbonaraTableAction
} from './misc'

// ? Main CarbonaraComponent props
export type CarbonaraComponentProps = {
  columns: CarbonaraGroupedDataDefinition[]
  data: any[]
  className?: string
  onRowClick?: CarbonaraAction
  loading?: boolean
  page?: number
  handleSetPage?: (page: number) => void
  firstPage?: number
  lastPage?: number
  showCards?: boolean
  maxShowCardsWidth: number,
  datagrid?: boolean,
  NoData?: string | FunctionComponent,
  sortBy?: CarbonaraSortBy,
  onSortSelect?: (sortBy?: CarbonaraSortBy) => void,
  rowHeight?: number,
  shimmerLoadingRowsTotal?: number,
  actions?: CarbonaraTableAction[],
  actionsTitle?: string,
  actionsWidth?: string
}

// ? Main CarbonaraComponent state
export type CarbonaraComponentState = {
  tableRows: CarbonaraGroupedData[]
  oldData: any[]
  tableDimensions: { width: number, height: number }
}
