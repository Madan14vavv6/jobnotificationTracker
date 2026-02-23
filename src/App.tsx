import { Routes, Route, Navigate } from 'react-router-dom'
import { AppShell } from './layout/AppShell'
import { PrimaryWorkspace } from './layout/PrimaryWorkspace'
import { SecondaryPanel } from './layout/SecondaryPanel'
import { DashboardPage } from './pages/DashboardPage'
import { SavedPage } from './pages/SavedPage'
import { DigestPage } from './pages/DigestPage'
import { SettingsPage } from './pages/SettingsPage'
import { ProofPage } from './pages/ProofPage'
import { NotFoundPage } from './pages/NotFoundPage'

function App() {
  return (
    <div className="app-root">
      <AppShell
        primaryWorkspace={
          <PrimaryWorkspace>
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/saved" element={<SavedPage />} />
              <Route path="/digest" element={<DigestPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/proof" element={<ProofPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </PrimaryWorkspace>
        }
        secondaryPanel={
          <SecondaryPanel title="Navigation shell only">
            <p>
              This step implements the route skeleton and shared navigation for the job notification
              app. Each page is a placeholder only; no product features or data are wired yet.
            </p>
            <p>
              The layout keeps a calm, off-white background, deep red accent for active navigation,
              and a high-whitespace 720px content column.
            </p>
          </SecondaryPanel>
        }
      />
    </div>
  )
}

export default App
