export type TablePageProps = {
  page: number
  firstPage?: number
  lastPage?: number
  handleSetPage: (page: number) => void
}
