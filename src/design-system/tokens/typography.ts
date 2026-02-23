export const typography = {
  fontFamilySans:
    "-apple-system, BlinkMacSystemFont, 'Inter', 'SF Pro Text', system-ui, -system-ui, sans-serif",
  fontFamilyMono:
    "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",

  // Type scale (px)
  display: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: 600,
    letterSpacing: -0.02,
  },
  h1: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 600,
    letterSpacing: -0.01,
  },
  h2: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: 600,
    letterSpacing: -0.01,
  },
  h3: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: 500,
    letterSpacing: 0,
  },
  h4: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 500,
    letterSpacing: 0,
  },
  body: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 400,
  },
  bodySmall: {
    fontSize: 13,
    lineHeight: 20,
    fontWeight: 400,
  },
  label: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: 500,
    letterSpacing: 0.04,
  },
  code: {
    fontSize: 13,
    lineHeight: 20,
    fontWeight: 400,
  },
} as const

export type TypographyScale = typeof typography

