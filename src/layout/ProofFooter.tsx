import './proof-footer.css'

export const ProofFooter = () => {
  return (
    <div className="proof-footer">
      <div className="proof-footer__content">
        <span className="proof-footer__label">Proof of value</span>
        <span className="proof-footer__text">
          Structured to support high-signal job notifications. This is a design system preview – no live data yet.
        </span>
      </div>
      <div className="proof-footer__meta">
        <span className="proof-footer__meta-chip">Calm</span>
        <span className="proof-footer__meta-chip">Intentional</span>
        <span className="proof-footer__meta-chip">Consistent</span>
      </div>
    </div>
  )
}

