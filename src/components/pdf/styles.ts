import { StyleSheet } from '@react-pdf/renderer'

export const pdfTheme = {
  colors: {
    text: {
      primary: '#000000',
      secondary: '#666666',
    },
    background: {
      primary: '#FFFFFF',
      secondary: '#F5F5F5',
    },
    divider: '#E5E7EB',
    accent: '#0070f3',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
  },
}

export const sharedStyles = StyleSheet.create({
  textRegular: {
    fontSize: 12,
    fontWeight: 'normal' as const,
  },
  textSmall: {
    fontSize: 10,
    fontWeight: 'normal' as const,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold' as const,
    color: pdfTheme.colors.text.primary,
    marginBottom: pdfTheme.spacing.lg,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold' as const,
    color: pdfTheme.colors.text.primary,
    marginBottom: pdfTheme.spacing.sm,
  },
}) 