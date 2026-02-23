import './page-scaffold.css'

type PageScaffoldProps = {
  title: string
  isNotFound?: boolean
}

export const PageScaffold = ({ title, isNotFound = false }: PageScaffoldProps) => {
  return (
    <div className="page-scaffold">
      <div className="page-scaffold__inner">
        <h1 className="page-scaffold__title">{title}</h1>
        <p className="page-scaffold__subtitle">
          {isNotFound
            ? 'The page you are looking for does not exist.'
            : 'This section will be built in the next step.'}
        </p>
      </div>
    </div>
  )
}

