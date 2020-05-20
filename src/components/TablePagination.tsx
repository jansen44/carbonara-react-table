import React from 'react'
import { TablePaginationProps } from '../types'

import { IconButton } from './IconButton'
import { TablePage } from './TablePage'

export const TablePagination = ({
  handleSetPage,
  isPrevDisabled,
  isNextDisabled,
  page,
  firstPage,
  lastPage,
  className
}: TablePaginationProps) => (
    <div className={`CarbonaraTable-Pagination ${className ? className : ''}`}>
      <div className='CarbonaraTable-Pagination-IconButtonWrapper'>
        <IconButton
          icon='leftArrow'
          onClick={() => handleSetPage(page - 1)}
          disabled={isPrevDisabled}
        />
      </div>

      <TablePage
        handleSetPage={handleSetPage}
        page={page}
        firstPage={firstPage}
        lastPage={lastPage}
      />

      <div className='CarbonaraTable-Pagination-IconButtonWrapper'>
        <IconButton
          icon='rightArrow'
          onClick={() => handleSetPage((page + 1))}
          disabled={isNextDisabled}
        />
      </div>
    </div>
  )