import React from 'react'
import { Page, Text, View, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: '#ffffff',
    fontFamily: 'Helvetica',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 10,
    color: '#666666',
  },
  header: {
    position: 'absolute',
    top: 30,
    right: 40,
    fontSize: 10,
    color: '#666666',
  },
  content: {
    marginTop: 20,
    marginBottom: 40,
  }
})

interface PageWrapperProps {
  children: React.ReactNode
  pageNumber: number
  totalPages: number
}

export function PageWrapper({ children, pageNumber, totalPages }: PageWrapperProps) {
  return (
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text>Marie French Portfolio</Text>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        {children}
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text>© {new Date().getFullYear()} Marie French</Text>
        <Text>
          Page {pageNumber} of {totalPages}
        </Text>
      </View>
    </Page>
  )
} 