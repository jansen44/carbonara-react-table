import React from 'react'
import { CarbonaraPaginationPageProps } from '../../types'
import { getNumberRange } from '../../util'

export const CarbonaraPaginationPage = ({ page, lastPage, firstPage, handleSetPage }: CarbonaraPaginationPageProps) => {
  if (firstPage === undefined || lastPage === undefined) {
    return (
      <div className='CarbonaraTable-PaginationPages'>
        <button className='CarbonaraTable-PaginationPage--Selected'>{page + 1}</button>
      </div>
    )
  }

  if (lastPage - firstPage < 6) {
    return (
      <div className='CarbonaraTable-PaginationPages'>
        {getNumberRange(firstPage, lastPage).map((_page, index) => (
          <button
            key={`carbonara_table_${_page}${page}${index}${handleSetPage}`}
            onClick={() => { page !== _page && handleSetPage(_page) }}
            className={page === _page ? 'CarbonaraTable-PaginationPage--Selected' : ''}
          >
            {_page + 1}
          </button>
        ))}
      </div>
    )
  }

  const totalRange = getNumberRange(firstPage, lastPage)

  const leftPivot = totalRange.indexOf(page) - 1 < firstPage
    ? firstPage
    : totalRange.indexOf(page) - 1

  const rightPivot = totalRange.indexOf(page) + 1 > lastPage
    ? lastPage
    : totalRange.indexOf(page) + 1

  const currentPageSplit = totalRange.slice(leftPivot, rightPivot + 1)

  if (currentPageSplit.indexOf(firstPage) !== -1) {
    return (
      <div className='CarbonaraTable-PaginationPages'>
        {currentPageSplit.map((_page, index) => (
          <button
            key={`carbonara_table_${_page}${page}${index}${handleSetPage}`}
            onClick={() => { page !== _page && handleSetPage(_page) }}
            className={page === _page ? 'CarbonaraTable-PaginationPage--Selected' : ''}
          >
            {_page + 1}
          </button>
        ))}

        <button className='CarbonaraTable-PaginationPageSeparator'>...</button>

        <button onClick={() => handleSetPage(lastPage)}>
          {lastPage + 1}
        </button>
      </div>
    )
  }

  if (currentPageSplit.indexOf(lastPage) !== -1) {
    return (
      <div className='CarbonaraTable-PaginationPages'>
        <button onClick={() => handleSetPage(firstPage)}>
          {firstPage + 1}
        </button>

        <button className='CarbonaraTable-PaginationPageSeparator'>...</button>

        {currentPageSplit.map((_page, index) => (
          <button
            key={`carbonara_table_${_page}${page}${index}${handleSetPage}`}
            onClick={() => { page !== _page && handleSetPage(_page) }}
            className={page === _page ? 'CarbonaraTable-PaginationPage--Selected' : ''}
          >
            {_page + 1}
          </button>
        ))}
      </div>
    )
  }


  return (
    <div className='CarbonaraTable-PaginationPages'>
      <button onClick={() => handleSetPage(firstPage)}>
        {firstPage + 1}
      </button>

      <button className='CarbonaraTable-PaginationPageSeparator'>...</button>

      {currentPageSplit.map((_page, index) => (
        <button
          key={`carbonara_table_${_page}${page}${index}${handleSetPage}`}
          onClick={() => { page !== _page && handleSetPage(_page) }}
          className={page === _page ? 'CarbonaraTable-PaginationPage--Selected' : ''}
        >
          {_page + 1}
        </button>
      ))}

      <button className='CarbonaraTable-PaginationPageSeparator'>...</button>

      <button onClick={() => handleSetPage(lastPage)}>
        {lastPage + 1}
      </button>
    </div>
  )
}
