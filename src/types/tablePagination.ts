export type TablePaginationProps = {
  handleSetPage: (page: number) => void
  isPrevDisabled?: boolean
  isNextDisabled?: boolean
  page: number
  firstPage?: number
  lastPage?: number,
  className: string
}
