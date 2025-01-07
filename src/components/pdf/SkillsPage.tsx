import React from 'react'
import { Text, View, StyleSheet } from '@react-pdf/renderer'
import { siteConfig } from '@/data/content'
import { PageWrapper } from './PageWrapper'

const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: '#ffffff',
  },
  header: {
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 20,
  },
  skillSection: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333333',
  },
  skillGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
  },
  skillGroup: {
    width: '45%',  // Two columns with gap
  },
  skillGroupTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#444444',
  },
  skillList: {
    gap: 8,
  },
  skillItem: {
    fontSize: 12,
    color: '#666666',
    flexDirection: 'row',
    alignItems: 'center',
  },
  bullet: {
    marginRight: 8,
  }
})

interface SkillsPageProps {
  pageNumber: number
  totalPages: number
}

export function SkillsPage({ pageNumber, totalPages }: SkillsPageProps) {
  const { skills } = siteConfig
  const { software, technical, design } = skills.categories

  return (
    <PageWrapper pageNumber={pageNumber} totalPages={totalPages}>
      <View style={styles.header}>
        <Text style={styles.title}>{skills.title}</Text>
        <Text style={styles.subtitle}>{skills.subtitle}</Text>
      </View>

      <View style={styles.skillSection}>
        <Text style={styles.sectionTitle}>{skills.sections.technical}</Text>
        <View style={styles.skillGrid}>
          <View style={styles.skillGroup}>
            <Text style={styles.skillGroupTitle}>{software.title}</Text>
            <View style={styles.skillList}>
              {software.items.map((skill, index) => (
                <View key={index} style={styles.skillItem}>
                  <Text style={styles.bullet}>•</Text>
                  <Text>{skill}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.skillGroup}>
            <Text style={styles.skillGroupTitle}>{technical.title}</Text>
            <View style={styles.skillList}>
              {technical.items.map((skill, index) => (
                <View key={index} style={styles.skillItem}>
                  <Text style={styles.bullet}>•</Text>
                  <Text>{skill}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </View>

      <View style={styles.skillSection}>
        <Text style={styles.sectionTitle}>{design.title}</Text>
        <View style={styles.skillList}>
          {design.items.map((skill, index) => (
            <View key={index} style={styles.skillItem}>
              <Text style={styles.bullet}>•</Text>
              <Text>{skill}</Text>
            </View>
          ))}
        </View>
      </View>
    </PageWrapper>
  )
} 