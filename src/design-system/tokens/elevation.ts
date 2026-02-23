export const elevation = {
  // Use primarily borders and very soft shadows to keep things calm.
  none: 'none',
  subtle: '0 1px 0 rgba(15, 23, 42, 0.04)',
  raised: '0 8px 16px rgba(15, 23, 42, 0.06)',
} as const

export type ElevationScale = typeof elevation

