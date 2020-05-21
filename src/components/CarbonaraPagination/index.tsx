import React from 'react'
import { CarbonaraPaginationProps } from '../../types'

import { CarbonaraIconButton } from '../CarbonaraIconButton'
import { CarbonaraPaginationPage } from './CarbonaraPaginationPage'

export const CarbonaraTablePagination = ({
  handleSetPage,
  isPrevDisabled,
  isNextDisabled,
  page,
  firstPage,
  lastPage,
  className
}: CarbonaraPaginationProps) => (
    <div className={`CarbonaraTable-Pagination ${className ? className : ''}`}>
      <div className='CarbonaraTable-Pagination-IconButtonWrapper'>
        <CarbonaraIconButton
          icon='leftArrow'
          onClick={() => handleSetPage(page - 1)}
          disabled={isPrevDisabled}
        />
      </div>

      <CarbonaraPaginationPage
        handleSetPage={handleSetPage}
        page={page}
        firstPage={firstPage}
        lastPage={lastPage}
      />

      <div className='CarbonaraTable-Pagination-IconButtonWrapper'>
        <CarbonaraIconButton
          icon='rightArrow'
          onClick={() => handleSetPage((page + 1))}
          disabled={isNextDisabled}
        />
      </div>
    </div>
  )
