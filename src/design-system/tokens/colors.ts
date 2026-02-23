export const rawColors = {
  white: '#FFFFFF',
  black: '#020617',

  // Neutrals – calm, slightly cool
  neutral50: '#F9FAFB',
  neutral100: '#F3F4F6',
  neutral200: '#E5E7EB',
  neutral300: '#D1D5DB',
  neutral400: '#9CA3AF',
  neutral500: '#6B7280',
  neutral600: '#4B5563',
  neutral700: '#374151',
  neutral800: '#1F2933',
  neutral900: '#111827',

  // Primary brand – confident but not loud
  primary50: '#EEF4FF',
  primary100: '#E0EAFF',
  primary200: '#C4D4FF',
  primary300: '#A4BCFD',
  primary400: '#8098F9',
  primary500: '#6172F3',
  primary600: '#4E5EE8',
  primary700: '#3D4ACC',
  primary800: '#2F3AA2',
  primary900: '#252F6D',

  // Supporting / semantic
  success50: '#ECFDF3',
  success100: '#DCFCE7',
  success500: '#16A34A',
  success600: '#15803D',

  warning50: '#FFFBEB',
  warning100: '#FEF3C7',
  warning500: '#D97706',
  warning600: '#B45309',

  danger50: '#FEF2F2',
  danger100: '#FEE2E2',
  danger500: '#DC2626',
  danger600: '#B91C1C',
} as const

export const semanticColors = {
  bg: {
    app: rawColors.neutral50,
    surface: rawColors.white,
    elevated: rawColors.white,
    subtle: rawColors.neutral100,
    muted: rawColors.neutral50,
  },
  border: {
    subtle: rawColors.neutral200,
    strong: rawColors.neutral300,
    focus: rawColors.primary400,
    danger: rawColors.danger500,
  },
  text: {
    primary: rawColors.neutral900,
    secondary: rawColors.neutral600,
    muted: rawColors.neutral500,
    onAccent: rawColors.white,
    onMutedAccent: rawColors.primary900,
    danger: rawColors.danger600,
    success: rawColors.success600,
  },
  accent: {
    primary: rawColors.primary600,
    primarySoft: rawColors.primary50,
    primarySubtle: rawColors.primary100,
  },
  status: {
    successBg: rawColors.success50,
    successBorder: rawColors.success100,
    successText: rawColors.success600,
    warningBg: rawColors.warning50,
    warningBorder: rawColors.warning100,
    warningText: rawColors.warning600,
    dangerBg: rawColors.danger50,
    dangerBorder: rawColors.danger100,
    dangerText: rawColors.danger600,
  },
} as const

export type SemanticColors = typeof semanticColors

