import React from 'react'
import { Text, View, StyleSheet, Image } from '@react-pdf/renderer'
import { Project } from '@/data/projects'
import { PageWrapper } from './PageWrapper'
import { SectionDivider } from './SectionDivider'
import { pdfTheme, sharedStyles } from './styles'

const styles = StyleSheet.create({
  header: {
    marginBottom: pdfTheme.spacing.xl,
  },
  metadata: {
    display: 'flex',
    flexDirection: 'row',
    gap: pdfTheme.spacing.md,
    marginBottom: pdfTheme.spacing.lg,
  },
  category: {
    ...sharedStyles.textSmall,
    color: pdfTheme.colors.text.secondary,
    marginBottom: pdfTheme.spacing.sm,
  },
  title: {
    ...sharedStyles.pageTitle,
    marginBottom: pdfTheme.spacing.md,
  },
  description: {
    ...sharedStyles.textRegular,
    marginBottom: pdfTheme.spacing.xl,
  },
  imageGrid: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: pdfTheme.spacing.md,
  },
  imageContainer: {
    width: '48%',
  },
  image: {
    width: '100%',
    height: 200,
    objectFit: 'cover',
    marginBottom: pdfTheme.spacing.sm,
  },
  caption: {
    ...sharedStyles.textSmall,
    color: pdfTheme.colors.text.secondary,
  },
  details: {
    marginTop: pdfTheme.spacing.xl,
  },
  detailsTitle: {
    ...sharedStyles.sectionTitle,
    marginBottom: pdfTheme.spacing.md,
  },
  detailsGrid: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: pdfTheme.spacing.md,
  },
  detailItem: {
    width: '48%',
    marginBottom: pdfTheme.spacing.md,
  },
  detailLabel: {
    ...sharedStyles.textSmall,
    color: pdfTheme.colors.text.secondary,
    marginBottom: pdfTheme.spacing.xs,
  },
  detailValue: {
    ...sharedStyles.textRegular,
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
        <Text style={styles.title}>{project.title}</Text>
        <View style={styles.metadata}>
          <Text style={styles.category}>{project.category}</Text>
          <Text style={sharedStyles.textSmall}>•</Text>
          <Text style={sharedStyles.textSmall}>{project.location}</Text>
          <Text style={sharedStyles.textSmall}>•</Text>
          <Text style={sharedStyles.textSmall}>{project.year}</Text>
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
      <View style={styles.imageGrid}>
        {project.imageGroups.map((group, groupIndex) => (
          group.images.map((image, imageIndex) => (
            <View key={`${groupIndex}-${imageIndex}`} style={styles.imageContainer}>
              <Image src={image.url} style={styles.image} />
              <Text style={styles.caption}>{image.caption}</Text>
            </View>
          ))
        ))}
      </View>
    </PageWrapper>
  )
} 