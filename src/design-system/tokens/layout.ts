export const layout = {
  contentMaxWidth: 1200,
  contentGutter: 24,
  headerHeight: 56,
  topBarHeight: 56,
  proofFooterHeight: 48,
  sidebarWidth: 320,
  sidebarMinWidth: 280,
  sidebarMaxWidth: 360,
} as const

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const

export type LayoutTokens = typeof layout
export type BreakpointTokens = typeof breakpoints

