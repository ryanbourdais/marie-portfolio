import React from 'react'
import { Text, View, StyleSheet } from '@react-pdf/renderer'
import { siteConfig } from '@/data/content'
import { PageWrapper } from './PageWrapper'
import { pdfTheme, sharedStyles } from './styles'

const styles = StyleSheet.create({
  header: {
    marginBottom: pdfTheme.spacing.xxl,
  },
  title: {
    ...sharedStyles.pageTitle,
    fontSize: 32,  // Larger for cover page
    marginBottom: pdfTheme.spacing.md,
  },
  subtitle: {
    fontSize: 18,
    color: pdfTheme.colors.text.secondary,
    marginBottom: pdfTheme.spacing.xl,
  },
  contact: {
    marginTop: 'auto',
    borderTop: `1 solid ${pdfTheme.colors.divider}`,
    paddingTop: pdfTheme.spacing.lg,
  },
  contactItem: {
    ...sharedStyles.text.regular,
    marginBottom: pdfTheme.spacing.sm,
  }
})

interface CoverPageProps {
  pageNumber: number
  totalPages: number
}

export function CoverPage({ pageNumber, totalPages }: CoverPageProps) {
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