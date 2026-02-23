import type { InputHTMLAttributes, ReactNode } from 'react'
import './text-field.css'

type TextFieldProps = {
  label: string
  hint?: string
  error?: string
  startAdornment?: ReactNode
  endAdornment?: ReactNode
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>

export const TextField = ({
  label,
  hint,
  error,
  id,
  startAdornment,
  endAdornment,
  ...rest
}: TextFieldProps) => {
  const fieldId = id ?? rest.name ?? `field-${label.replace(/\s+/g, '-').toLowerCase()}`
  const describedBy = [
    hint ? `${fieldId}-hint` : '',
    error ? `${fieldId}-error` : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className="field">
      <label className="field__label" htmlFor={fieldId}>
        {label}
      </label>
      <div
        className={[
          'field__control',
          startAdornment ? 'field__control--with-start' : '',
          endAdornment ? 'field__control--with-end' : '',
          error ? 'field__control--error' : '',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {startAdornment && <div className="field__adornment field__adornment--start">{startAdornment}</div>}
        <input
          id={fieldId}
          className="field__input"
          aria-invalid={!!error}
          aria-describedby={describedBy || undefined}
          {...rest}
        />
        {endAdornment && <div className="field__adornment field__adornment--end">{endAdornment}</div>}
      </div>
      {hint && !error && (
        <p id={`${fieldId}-hint`} className="field__hint">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${fieldId}-error`} className="field__error">
          {error}
        </p>
      )}
    </div>
  )
}

