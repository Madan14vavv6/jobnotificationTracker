import './skeleton.css'

type SkeletonProps = {
  width?: string | number
  height?: string | number
}

export const SkeletonBlock = ({ width = '100%', height = 12 }: SkeletonProps) => {
  const style: React.CSSProperties = {
    width,
    height,
  }

  return <div className="skeleton" style={style} />
}

export const SkeletonText = () => {
  return <div className="skeleton skeleton--text" />
}

