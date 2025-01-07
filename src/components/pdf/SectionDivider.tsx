import React from 'react'
import { View, StyleSheet } from '@react-pdf/renderer'
import { pdfTheme } from './styles'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: pdfTheme.spacing.lg,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: pdfTheme.colors.divider,
  },
  accent: {
    width: 50,
    height: 2,
    backgroundColor: pdfTheme.colors.accent,
    marginHorizontal: pdfTheme.spacing.md,
  }
})

export function SectionDivider() {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <View style={styles.accent} />
      <View style={styles.line} />
    </View>
  )
} 