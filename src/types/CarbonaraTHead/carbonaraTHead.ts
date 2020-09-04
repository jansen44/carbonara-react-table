import { CarbonaraGroupedDataDefinition, CarbonaraSortBy } from '../misc'

export type CarbonaraTHeadProps = {
  columns: CarbonaraGroupedDataDefinition[],
  className?: string,
  sortBy?: CarbonaraSortBy,
  onSortSelect?: (sortBy?: CarbonaraSortBy) => void 
}
