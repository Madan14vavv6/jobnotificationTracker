import type { ReactNode } from 'react'
import { TopBar } from './TopBar'
import { ProofFooter } from './ProofFooter'
import './app-shell.css'

type AppShellProps = {
  topBarSlot?: ReactNode
  contentHeader?: ReactNode
  primaryWorkspace: ReactNode
  secondaryPanel?: ReactNode
}

export const AppShell = ({
  topBarSlot,
  contentHeader,
  primaryWorkspace,
  secondaryPanel,
}: AppShellProps) => {
  return (
    <div className="app-shell">
      <header className="app-shell__top-bar">
        {topBarSlot ?? <TopBar />}
      </header>
      <main className="app-shell__main">
        <div className="app-shell__main-inner">
          <section className="app-shell__content">
            {contentHeader}
            <div className="app-shell__workspace">
              {primaryWorkspace}
            </div>
          </section>
          {secondaryPanel && (
            <aside className="app-shell__secondary">
              {secondaryPanel}
            </aside>
          )}
        </div>
      </main>
      <footer className="app-shell__footer">
        <ProofFooter />
      </footer>
    </div>
  )
}

