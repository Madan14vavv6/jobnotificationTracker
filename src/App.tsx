import { AppShell } from './layout/AppShell'
import { ContentHeader } from './layout/ContentHeader'
import { PrimaryWorkspace } from './layout/PrimaryWorkspace'
import { SecondaryPanel } from './layout/SecondaryPanel'
import { DesignSystemDemo } from './pages/DesignSystemDemo'

function App() {
  return (
    <div className="app-root">
      <AppShell
        contentHeader={
          <ContentHeader
            title="Job notification design system"
            subtitle="Foundation for a calm, confident B2C SaaS experience. This page previews the system only – no product flows yet."
          />
        }
        primaryWorkspace={
          <PrimaryWorkspace>
            <DesignSystemDemo />
          </PrimaryWorkspace>
        }
        secondaryPanel={
          <SecondaryPanel title="System notes">
            <p>
              This layout mirrors a future workspace where candidates review and triage job
              notifications, with a supporting panel for filters and context.
            </p>
            <p>
              All elements on this page are driven by tokens for color, type, spacing, and
              interaction – no ad-hoc styling.
            </p>
          </SecondaryPanel>
        }
      />
    </div>
  )
}

export default App
