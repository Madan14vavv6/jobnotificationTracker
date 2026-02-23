import type { ReactNode } from 'react'
import './secondary-panel.css'

type SecondaryPanelProps = {
  title?: string
  children: ReactNode
}

export const SecondaryPanel = ({ title, children }: SecondaryPanelProps) => {
  return (
    <section className="secondary-panel">
      {title && <div className="secondary-panel__title">{title}</div>}
      <div className="secondary-panel__body">{children}</div>
    </section>
  )
}

