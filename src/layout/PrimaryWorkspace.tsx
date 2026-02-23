import type { ReactNode } from 'react'
import './primary-workspace.css'

type PrimaryWorkspaceProps = {
  children: ReactNode
}

export const PrimaryWorkspace = ({ children }: PrimaryWorkspaceProps) => {
  return <section className="primary-workspace">{children}</section>
}

