import type { ButtonHTMLAttributes, ReactNode } from 'react'
import './button.css'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'destructive'
type ButtonSize = 'sm' | 'md' | 'lg'

export type ButtonProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  leadingIcon?: ReactNode
  trailingIcon?: ReactNode
  loading?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({
  variant = 'primary',
  size = 'md',
  leadingIcon,
  trailingIcon,
  loading = false,
  children,
  disabled,
  className,
  ...rest
}: ButtonProps) => {
  const isDisabled = disabled || loading
  const classes = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    loading ? 'btn--loading' : '',
    isDisabled ? 'btn--disabled' : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button className={classes} disabled={isDisabled} {...rest}>
      {leadingIcon && <span className="btn__icon btn__icon--leading">{leadingIcon}</span>}
      <span className="btn__label">
        {loading ? 'Working…' : children}
      </span>
      {trailingIcon && <span className="btn__icon btn__icon--trailing">{trailingIcon}</span>}
    </button>
  )
}

