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

  if (lastPage - firstPage < 7) {
    return (
      <div className='CarbonaraTable-PaginationPages'>
        {getNumberRange(firstPage, lastPage).map((_page, index) => (
          <button
            key={`carbonarapaginationbutton_table_${_page}${page}${index}${handleSetPage}`}
            onClick={() => { page !== _page && handleSetPage(_page) }}
            className={page === _page ? 'CarbonaraTable-PaginationPage--Selected' : ''}
          >
            {_page + 1}
          </button>
        ))}
      </div>
    )
  }

  const initialRange = getNumberRange(firstPage, firstPage + 3)
  const finalRange = getNumberRange(lastPage - 3, lastPage)

  if (initialRange.indexOf(page) !== -1) {
    return (
      <div className='CarbonaraTable-PaginationPages'>
        {[...initialRange, firstPage + 4].map((_page, index) => (
          <button
            key={`carbonarapaginationbutton_table_${_page}${page}${index}${handleSetPage}`}
            onClick={() => { page !== _page && handleSetPage(_page) }}
            className={page === _page ? 'CarbonaraTable-PaginationPage--Selected' : ''}
          >
            {_page + 1}
          </button>
        ))}

        <button className='CarbonaraTable-PaginationPageSeparator'>...</button>
        <button onClick={() => { handleSetPage(lastPage) }}>
          {lastPage + 1}
        </button>
      </div>
    )
  }

  if (finalRange.indexOf(page) !== -1) {
    return (
      <div className='CarbonaraTable-PaginationPages'>
        <button onClick={() => { handleSetPage(firstPage) }}>
          {firstPage + 1}
        </button>
        <button className='CarbonaraTable-PaginationPageSeparator'>...</button>
        
        {[lastPage - 4, ...finalRange].map((_page, index) => (
          <button
            key={`carbonarapaginationbutton_table_${_page}${page}${index}${handleSetPage}`}
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
      <button onClick={() => { handleSetPage(firstPage) }}>
        {firstPage + 1}
      </button>
      <button className='CarbonaraTable-PaginationPageSeparator'>...</button>

      <button onClick={() => { handleSetPage(page - 1) }}>
        {page}
      </button>
      <button className={'CarbonaraTable-PaginationPage--Selected'}>
        {page + 1}
      </button>
      <button onClick={() => { handleSetPage(page + 1) }}>
        {page + 2}
      </button>

      <button className='CarbonaraTable-PaginationPageSeparator'>...</button>
      <button onClick={() => { handleSetPage(lastPage) }}>
        {lastPage + 1}
      </button>
    </div>
  )
}
