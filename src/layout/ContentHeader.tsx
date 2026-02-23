import type { ReactNode } from 'react'
import './content-header.css'

type ContentHeaderProps = {
  title: string
  subtitle?: string
  meta?: ReactNode
  primaryAction?: ReactNode
  secondaryAction?: ReactNode
}

export const ContentHeader = ({
  title,
  subtitle,
  meta,
  primaryAction,
  secondaryAction,
}: ContentHeaderProps) => {
  return (
    <header className="content-header">
      <div className="content-header__main">
        <div>
          <h1 className="content-header__title">{title}</h1>
          {subtitle && <p className="content-header__subtitle">{subtitle}</p>}
        </div>
        {meta && <div className="content-header__meta">{meta}</div>}
      </div>
      {(primaryAction || secondaryAction) && (
        <div className="content-header__actions">
          {secondaryAction}
          {primaryAction}
        </div>
      )}
    </header>
  )
}

