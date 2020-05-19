import React from 'react'
import { TablePageProps } from '../types'

export const TablePage = ({ page, lastPage, firstPage, handleSetPage }: TablePageProps) => {
  if (firstPage === undefined || lastPage === undefined) {
    return (
      <div className='CarbonaraTable-Pages'>
        <button className='CarbonaraTable-SelectedPage'>{page + 1}</button>
      </div>
    )
  }

  if (lastPage - firstPage < 6) {
    return (
      <div className='CarbonaraTable-Pages'>
        {range(firstPage, lastPage).map((_page, index) => (
          <button
            key={`carbonara_table_${_page}${page}${index}${handleSetPage}`}
            onClick={() => { page !== _page && handleSetPage(_page) }}
            className={page === _page ? 'CarbonaraTable-SelectedPage' : ''}
          >
            {_page + 1}
          </button>
        ))}
      </div>
    )
  }

  const totalRange = range(firstPage, lastPage)

  const leftPivot = totalRange.indexOf(page) - 1 < firstPage
    ? firstPage
    : totalRange.indexOf(page) - 1

  const rightPivot = totalRange.indexOf(page) + 1 > lastPage
    ? lastPage
    : totalRange.indexOf(page) + 1

  const currentPageSplit = totalRange.slice(leftPivot, rightPivot + 1)

  if (currentPageSplit.indexOf(firstPage) !== -1) {
    return (
      <div className='CarbonaraTable-Pages'>
        {currentPageSplit.map((_page, index) => (
          <button
            key={`carbonara_table_${_page}${page}${index}${handleSetPage}`}
            onClick={() => { page !== _page && handleSetPage(_page) }}
            className={page === _page ? 'CarbonaraTable-SelectedPage' : ''}
          >
            {_page + 1}
          </button>
        ))}

        <button className='CarbonaraTable-PagesSeparator'>...</button>

        <button onClick={() => handleSetPage(lastPage)}>
          {lastPage + 1}
        </button>
      </div>
    )
  }

  if (currentPageSplit.indexOf(lastPage) !== -1) {
    return (
      <div className='CarbonaraTable-Pages'>
        <button onClick={() => handleSetPage(firstPage)}>
          {firstPage + 1}
        </button>

        <button className='CarbonaraTable-PagesSeparator'>...</button>

        {currentPageSplit.map((_page, index) => (
          <button
            key={`carbonara_table_${_page}${page}${index}${handleSetPage}`}
            onClick={() => { page !== _page && handleSetPage(_page) }}
            className={page === _page ? 'CarbonaraTable-SelectedPage' : ''}
          >
            {_page + 1}
          </button>
        ))}
      </div>
    )
  }


  return (
    <div className='CarbonaraTable-Pages'>
      <button onClick={() => handleSetPage(firstPage)}>
        {firstPage + 1}
      </button>

      <button className='CarbonaraTable-PagesSeparator'>...</button>

      {currentPageSplit.map((_page, index) => (
        <button
          key={`carbonara_table_${_page}${page}${index}${handleSetPage}`}
          onClick={() => { page !== _page && handleSetPage(_page) }}
          className={page === _page ? 'CarbonaraTable-SelectedPage' : ''}
        >
          {_page + 1}
        </button>
      ))}

      <button className='CarbonaraTable-PagesSeparator'>...</button>

      <button onClick={() => handleSetPage(lastPage)}>
        {lastPage + 1}
      </button>
    </div>
  )
}

function range(begin: number, final: number) {
  const _final = final + 1

  if (_final <= begin) { return [] }

  const range = _final - begin;
  let current = begin - 1

  return Array(range).fill(0).map(() => {
    current++
    return current
  })
}