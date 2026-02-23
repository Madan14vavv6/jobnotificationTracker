import type { ReactNode } from 'react'
import './data-table.css'

type DataTableProps = {
  columns: string[]
  rows: Array<Array<ReactNode>>
  emptyState?: ReactNode
}

export const DataTable = ({ columns, rows, emptyState }: DataTableProps) => {
  const isEmpty = rows.length === 0

  return (
    <div className="data-table">
      <div className="data-table__header">
        {columns.map((column) => (
          <div key={column} className="data-table__header-cell">
            {column}
          </div>
        ))}
      </div>
      <div className="data-table__body">
        {isEmpty && emptyState}
        {!isEmpty &&
          rows.map((row, index) => (
            <div key={index} className="data-table__row">
              {row.map((cell, idx) => (
                <div key={idx} className="data-table__cell">
                  {cell}
                </div>
              ))}
            </div>
          ))}
      </div>
    </div>
  )
}

