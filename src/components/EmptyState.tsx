import { Button } from './Button'
import './empty-state.css'

type EmptyStateProps = {
  title: string
  body: string
  primaryActionLabel?: string
}

export const EmptyState = ({ title, body, primaryActionLabel }: EmptyStateProps) => {
  return (
    <div className="empty-state">
      <div className="empty-state__body">
        <h3 className="empty-state__title">{title}</h3>
        <p className="empty-state__text">{body}</p>
      </div>
      {primaryActionLabel && (
        <div className="empty-state__actions">
          <Button variant="secondary" size="sm">
            {primaryActionLabel}
          </Button>
        </div>
      )}
    </div>
  )
}

