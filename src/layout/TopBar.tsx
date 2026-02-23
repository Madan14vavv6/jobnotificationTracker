import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './top-bar.css'

const links = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/saved', label: 'Saved' },
  { to: '/digest', label: 'Digest' },
  { to: '/settings', label: 'Settings' },
  { to: '/proof', label: 'Proof' },
] as const

export const TopBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="top-bar">
      <div className="top-bar__section top-bar__section--left">
        <span className="top-bar__brand-name">Job Signals</span>
      </div>

      <nav className="top-bar__nav" aria-label="Primary">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              [
                'top-bar__link',
                isActive ? 'top-bar__link--active' : '',
              ]
                .filter(Boolean)
                .join(' ')
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <button
        type="button"
        className="top-bar__menu-button"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="top-bar__menu-icon" />
      </button>

      {menuOpen && (
        <div className="top-bar__menu-panel">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                [
                  'top-bar__menu-link',
                  isActive ? 'top-bar__menu-link--active' : '',
                ]
                  .filter(Boolean)
                  .join(' ')
              }
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  )
}

