import React from 'react'
import { Text, View, StyleSheet } from '@react-pdf/renderer'
import { siteConfig } from '@/data/content'
import { PageWrapper } from './PageWrapper'
import { SectionDivider } from './SectionDivider'
import { pdfTheme, sharedStyles } from './styles'

const styles = StyleSheet.create({
  header: {
    marginBottom: pdfTheme.spacing.xl,
  },
  subtitle: {
    ...sharedStyles.text.regular,
    fontSize: 14,
    marginBottom: pdfTheme.spacing.lg,
  },
  section: {
    marginBottom: pdfTheme.spacing.xl,
  },
  contactGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: pdfTheme.spacing.lg,
  },
  contactItem: {
    width: '45%',
  },
  label: {
    ...sharedStyles.text.small,
    marginBottom: pdfTheme.spacing.xs,
  },
  value: {
    ...sharedStyles.text.regular,
    color: pdfTheme.colors.text.primary,
  },
  social: {
    marginTop: pdfTheme.spacing.lg,
    padding: pdfTheme.spacing.lg,
    backgroundColor: pdfTheme.colors.background.secondary,
    borderRadius: 4,
  },
  availability: {
    ...sharedStyles.text.small,
    marginTop: pdfTheme.spacing.xl,
  }
})

interface ContactPageProps {
  pageNumber: number
  totalPages: number
}

export function ContactPage({ pageNumber, totalPages }: ContactPageProps) {
  const { contact, social } = siteConfig

  return (
    <PageWrapper pageNumber={pageNumber} totalPages={totalPages}>
      <View style={styles.header}>
        <Text style={sharedStyles.pageTitle}>Contact Information</Text>
        <Text style={styles.subtitle}>
          Available for architectural drafting projects and consultations
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={sharedStyles.sectionTitle}>Get in Touch</Text>
        <View style={styles.contactGrid}>
          <View style={styles.contactItem}>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.value}>{contact.email}</Text>
          </View>

          <View style={styles.contactItem}>
            <Text style={styles.label}>Phone</Text>
            <Text style={styles.value}>{contact.phone}</Text>
          </View>

          <View style={styles.contactItem}>
            <Text style={styles.label}>Location</Text>
            <Text style={styles.value}>{contact.location}</Text>
          </View>

          <View style={styles.contactItem}>
            <Text style={styles.label}>Availability</Text>
            <Text style={styles.value}>{contact.availability}</Text>
          </View>
        </View>

        <SectionDivider />

        <View style={styles.social}>
          <Text style={sharedStyles.sectionTitle}>Professional Profiles</Text>
          <Text style={styles.value}>LinkedIn: {social.linkedin}</Text>
          <Text style={styles.value}>Instagram: {social.instagram}</Text>
        </View>
      </View>

      <View style={styles.availability}>
        <Text>* Available for in-person consultations in the greater {contact.location} area</Text>
        <Text>* Remote collaboration available for clients across Canada</Text>
      </View>
    </PageWrapper>
  )
} 