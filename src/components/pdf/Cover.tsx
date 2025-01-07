import React from 'react'
import { Text, View, StyleSheet } from '@react-pdf/renderer'
import { siteConfig } from '@/data/content'
import { PageWrapper } from './PageWrapper'
import { pdfTheme, sharedStyles } from './styles'

const styles = StyleSheet.create({
  header: {
    marginBottom: pdfTheme.spacing.xl,
  },
  title: {
    ...sharedStyles.pageTitle,
    fontSize: 32,
    marginBottom: pdfTheme.spacing.md,
  },
  subtitle: {
    ...sharedStyles.textRegular,
    fontSize: 16,
    color: pdfTheme.colors.text.secondary,
  },
  contact: {
    marginTop: 'auto',
    borderTop: `1 solid ${pdfTheme.colors.divider}`,
    paddingTop: pdfTheme.spacing.lg,
  },
  contactItem: {
    ...sharedStyles.textRegular,
    marginBottom: pdfTheme.spacing.sm,
  }
})

interface CoverProps {
  pageNumber: number
  totalPages: number
}

export function Cover({ pageNumber, totalPages }: CoverProps) {
  return (
    <PageWrapper pageNumber={pageNumber} totalPages={totalPages}>
      <View style={styles.header}>
        <Text style={styles.title}>{siteConfig.title}</Text>
        <Text style={styles.subtitle}>{siteConfig.description}</Text>
      </View>

      <View style={styles.contact}>
        <Text style={styles.contactItem}>Email: {siteConfig.contact.email}</Text>
        <Text style={styles.contactItem}>Phone: {siteConfig.contact.phone}</Text>
        <Text style={styles.contactItem}>Location: {siteConfig.contact.location}</Text>
      </View>
    </PageWrapper>
  )
}

export const CoverPage = Cover 