import './top-bar.css'

export const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="top-bar__section top-bar__section--left">
        <div className="top-bar__brand-mark" />
        <span className="top-bar__brand-name">Signalboard</span>
      </div>
      <div className="top-bar__section top-bar__section--center">
        <span className="top-bar__page-label">Design System</span>
      </div>
      <div className="top-bar__section top-bar__section--right">
        <button className="top-bar__quiet-action" type="button">
          Support
        </button>
        <div className="top-bar__avatar" aria-hidden="true" />
      </div>
    </div>
  )
}

