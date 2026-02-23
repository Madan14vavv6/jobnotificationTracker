import type { ReactNode } from 'react'
import './card.css'

type CardProps = {
  children: ReactNode
}

export const Card = ({ children }: CardProps) => {
  return <section className="card">{children}</section>
}

