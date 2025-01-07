import React from 'react'
import { Text, View, StyleSheet } from '@react-pdf/renderer'
import { PageWrapper } from './PageWrapper'
import { getAllProjects } from '@/data/projects'

const styles = StyleSheet.create({
  content: {
    marginTop: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  itemText: {
    fontSize: 12,
    color: '#666666',
  },
  pageNumber: {
    fontSize: 12,
    color: '#666666',
  },
  dots: {
    borderBottom: '1 dotted #cccccc',
    flex: 1,
    marginHorizontal: 8,
  }
})

interface TableOfContentsProps {
  pageNumber: number
  totalPages: number
}

export function TableOfContents({ pageNumber, totalPages }: TableOfContentsProps) {
  const projects = getAllProjects()

  return (
    <PageWrapper pageNumber={pageNumber} totalPages={totalPages}>
      <Text style={styles.sectionTitle}>Table of Contents</Text>
      
      <View style={styles.content}>
        {/* Cover */}
        <View style={styles.item}>
          <Text style={styles.itemText}>Cover</Text>
          <View style={styles.dots} />
          <Text style={styles.pageNumber}>1</Text>
        </View>

        {/* Table of Contents */}
        <View style={styles.item}>
          <Text style={styles.itemText}>Table of Contents</Text>
          <View style={styles.dots} />
          <Text style={styles.pageNumber}>2</Text>
        </View>

        {/* Skills & Expertise */}
        <View style={styles.item}>
          <Text style={styles.itemText}>Skills & Expertise</Text>
          <View style={styles.dots} />
          <Text style={styles.pageNumber}>3</Text>
        </View>

        {/* Projects Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Projects</Text>
          {projects.map((project, index) => (
            <View key={project.id} style={styles.item}>
              <Text style={styles.itemText}>{project.title}</Text>
              <View style={styles.dots} />
              <Text style={styles.pageNumber}>{index + 4}</Text>
            </View>
          ))}
        </View>

        {/* Contact */}
        <View style={styles.item}>
          <Text style={styles.itemText}>Contact Information</Text>
          <View style={styles.dots} />
          <Text style={styles.pageNumber}>{totalPages}</Text>
        </View>
      </View>
    </PageWrapper>
  )
} 