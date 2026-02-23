import { Button } from '../components/Button'
import { Card } from '../components/structural/Card'
import { EmptyState } from '../components/EmptyState'
import { TextField } from '../components/forms/TextField'
import { DataTable } from '../components/DataTable'
import './design-system-demo.css'

export const DesignSystemDemo = () => {
  return (
    <div className="ds-demo">
      <section className="ds-demo__section">
        <h2 className="ds-demo__section-title">Primary actions</h2>
        <div className="ds-demo__row">
          <Button variant="primary">Save preference</Button>
          <Button variant="secondary">Preview sample notification</Button>
          <Button variant="ghost">Reset filters</Button>
          <Button variant="destructive">Clear all rules</Button>
        </div>
      </section>

      <section className="ds-demo__section">
        <h2 className="ds-demo__section-title">Form surface</h2>
        <Card>
          <div className="ds-demo__form-grid">
            <TextField
              label="Role focus"
              placeholder="e.g. Frontend Engineer, Data Analyst"
            />
            <TextField
              label="Location preference"
              placeholder="e.g. Bengaluru, Remote within India"
            />
            <TextField
              label="Minimum signal threshold"
              placeholder="e.g. Only strong matches"
              hint="No logic wired yet – this is a visual placeholder."
            />
          </div>
        </Card>
      </section>

      <section className="ds-demo__section">
        <h2 className="ds-demo__section-title">Workspace table shell</h2>
        <Card>
          <DataTable
            columns={['Job title', 'Company', 'Signal', 'Received']}
            rows={[]}
            emptyState={
              <EmptyState
                title="No job notifications yet"
                body="When the product is wired, high-quality job signals will land here first. For now, this is a demonstration of empty state styling."
                primaryActionLabel="View design guidelines"
              />
            }
          />
        </Card>
      </section>
    </div>
  )
}

