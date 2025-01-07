import React from 'react'
import { Text, View, StyleSheet } from '@react-pdf/renderer'
import { Project } from '@/data/projects'
import { PageWrapper } from './PageWrapper'
import { SectionDivider } from './SectionDivider'
import { pdfTheme, sharedStyles } from './styles'

const styles = StyleSheet.create({
  header: {
    marginBottom: pdfTheme.spacing.xl,
  },
  metadata: {
    flexDirection: 'row',
    gap: pdfTheme.spacing.md,
    marginBottom: pdfTheme.spacing.lg,
    color: pdfTheme.colors.text.secondary,
  },
  description: {
    ...sharedStyles.text.regular,
    marginBottom: pdfTheme.spacing.xl,
  },
  imageGrid: {
    marginTop: pdfTheme.spacing.lg,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: pdfTheme.spacing.sm,
  },
  imageContainer: {
    width: '48%',
  },
  image: {
    width: '100%',
    height: 200,
    objectFit: 'cover',
    marginBottom: pdfTheme.spacing.xs,
  },
  caption: {
    ...sharedStyles.text.small,
  }
})

interface ProjectPageProps {
  project: Project
  pageNumber: number
  totalPages: number
}

export function ProjectPage({ project, pageNumber, totalPages }: ProjectPageProps) {
  return (
    <PageWrapper pageNumber={pageNumber} totalPages={totalPages}>
      <View style={styles.header}>
        <Text style={sharedStyles.pageTitle}>{project.title}</Text>
        <View style={styles.metadata}>
          <Text>{project.category}</Text>
          <Text>•</Text>
          <Text>{project.location}</Text>
          <Text>•</Text>
          <Text>{project.year}</Text>
        </View>
      </View>

      <Text style={styles.description}>{project.description}</Text>

      <SectionDivider />

      {project.sections?.map((section, index) => (
        <View key={index}>
          <Text style={sharedStyles.sectionTitle}>{section.title}</Text>
          <Text style={styles.description}>{section.content}</Text>
        </View>
      ))}

      <SectionDivider />

      {/* Image Gallery */}
      {/* ... rest of the component ... */}
    </PageWrapper>
  )
} 