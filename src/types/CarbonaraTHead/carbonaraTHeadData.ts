import { CarbonaraGroupedDataDefinition, CarbonaraSortBy } from '../misc'

export type CarbonaraTHeadDataProps = {
  column: CarbonaraGroupedDataDefinition,
  sortBy?: CarbonaraSortBy,
  onSortSelect?: (sortBy?: CarbonaraSortBy) => void 
}
