import { FunctionComponent } from 'react'
import {
  CarbonaraAction,
  CarbonaraGroupedDataDefinition,
  CarbonaraGroupedData,
  CarbonaraSortBy
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
  onSortSelect?: (sortBy?: CarbonaraSortBy) => void 
}

// ? Main CarbonaraComponent state
export type CarbonaraComponentState = {
  tableRows: CarbonaraGroupedData[]
  oldData: any[]
  tableDimensions: { width: number, height: number }
}
