export const pdfTheme = {
  colors: {
    accent: '#0070f3',  // Match your website's accent color
    text: {
      primary: '#333333',
      secondary: '#666666',
      light: '#999999'
    },
    background: {
      primary: '#ffffff',
      secondary: '#f7f7f7'
    },
    divider: '#e5e7eb'
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48
  }
}

export const sharedStyles = {
  sectionDivider: {
    height: 1,
    backgroundColor: pdfTheme.colors.divider,
    marginVertical: pdfTheme.spacing.lg,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: pdfTheme.colors.text.primary,
    marginBottom: pdfTheme.spacing.md,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: pdfTheme.colors.text.primary,
    marginBottom: pdfTheme.spacing.sm,
  },
  text: {
    regular: {
      fontSize: 12,
      color: pdfTheme.colors.text.secondary,
    },
    small: {
      fontSize: 10,
      color: pdfTheme.colors.text.light,
    }
  }
} 