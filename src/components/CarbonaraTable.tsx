import React, { Component } from 'react'
import { CarbonaraTableProps, CarbonaraGroupedDataDefinition } from '../types'
import { CarbonaraTBody } from './CarbonaraTBody'
import { CarbonaraTHead } from './CarbonaraTHead'
import { CarbonaraTBodyLoading } from './CarbonaraTBodyLoading'

export class CarbonaraDataTable extends Component<CarbonaraTableProps> {
  private dataGridHeaderRef: any = null

  handleTableScroll = (evt: any) => {
    this.dataGridHeaderRef.style.left = `${evt.target.scrollLeft * -1}px`
  }

  columnsWithActions = (): CarbonaraGroupedDataDefinition[] => {
    const { actions, actionsTitle, columns, actionsWidth } = this.props
    if (!actions || actions.length === 0) {
      return columns
    }
    const actionColumn: CarbonaraGroupedDataDefinition = {
      label: actionsTitle || 'Actions',
      field: 'CARBONARA_ACTIONS'
    }
    if (!!actionsWidth) {
      actionColumn['width'] = actionsWidth
    }
    return [...columns, actionColumn]
  }

  render() {
    const {
      rows,
      onRowClick,
      sortBy,
      onSortSelect,
      loading,
      rowHeight,
      shimmerLoadingRowsTotal,
      actions,
      actionsWidth
    } = this.props

    const _columnsWithActions = this.columnsWithActions()
    return (
      <div className='CarbonaraTable-TableContainer'>
        <div ref={el => this.dataGridHeaderRef = el} className='CarbonaraTable-TableHeaderWrapper'>
          <table>
            <CarbonaraTHead
              columns={_columnsWithActions}
              sortBy={sortBy}
              onSortSelect={onSortSelect}
              loading={loading}
            />
          </table>
        </div>

        <div
          onScroll={this.handleTableScroll}
          className={`CarbonaraTable-TableBodyWrapper ${loading ? 'isLoading' : ''}`}
        >
          <table>
            {
              loading
                ? <CarbonaraTBodyLoading
                  shimmerLoadingRowsTotal={shimmerLoadingRowsTotal}
                  columns={_columnsWithActions}
                  rowHeight={rowHeight}
                />
                : <CarbonaraTBody
                  rows={rows}
                  onRowClick={onRowClick}
                  rowHeight={rowHeight}
                  actions={actions}
                  actionsWidth={actionsWidth}
                />
            }
          </table>
        </div>
      </div>
    )
  }
}
