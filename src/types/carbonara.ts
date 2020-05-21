import {
  CarbonaraAction,
  CarbonaraGroupedDataDefinition,
  CarbonaraGroupedData
} from './misc'

// ? Main CarbonaraComponent props
export type CarbonaraComponentProps = {
  columns: CarbonaraGroupedDataDefinition[]
  data: object[]
  className?: string
  onRowClick?: CarbonaraAction
  loading?: boolean
  page?: number
  handleSetPage?: (page: number) => void
  firstPage?: number
  lastPage?: number
  showCards?: boolean
  maxShowCardsWidth: number,
  datagrid?: boolean
}

// ? Main CarbonaraComponent state
export type CarbonaraComponentState = {
  tableRows: CarbonaraGroupedData[]
  oldData: object[]
  tableDimensions: { width: number, height: number }
}
