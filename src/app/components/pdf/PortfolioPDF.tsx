import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer';
import { siteConfig, heroContent, servicesContent } from '@/data/content';
import { getAllProjects } from '@/data/projects';

// Register fonts if needed
// Font.register({
//   family: 'Inter',
//   src: '/fonts/Inter-Regular.ttf'
// });

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    color: '#1a1a1a',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
    color: '#4a4a4a',
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
    color: '#666666',
    lineHeight: 1.4,
  },
  list: {
    marginLeft: 10,
    marginTop: 5,
  },
  listItem: {
    fontSize: 12,
    marginBottom: 3,
    color: '#666666',
  },
  sectionTitle: {
    fontSize: 16,
    marginTop: 15,
    marginBottom: 8,
    color: '#2a2a2a',
    fontWeight: 'bold',
  },
  coverSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80%',
    textAlign: 'center',
  },
  imageContainer: {
    marginTop: 15,
    marginBottom: 15,
  },
  singleImage: {
    width: '100%',
    height: 200,
    objectFit: 'cover',
    marginBottom: 5,
  },
  imageRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
  },
  imageCaption: {
    fontSize: 10,
    color: '#666666',
    marginTop: 3,
    fontStyle: 'italic',
  },
  divider: {
    borderBottom: 1,
    borderBottomColor: '#e5e5e5',
    marginVertical: 15,
  },
  contactInfo: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
  },
});

// PDF Document Component
const PortfolioPDF: React.FC = () => {
  const allProjects = getAllProjects();

  return (
    <Document>
      {/* Cover Page */}
      <Page size="A4" style={styles.page}>
        <View style={styles.coverSection}>
          <Text style={styles.title}>{siteConfig.title}</Text>
          <Text style={styles.subtitle}>Portfolio</Text>
          <Text style={styles.text}>{heroContent.subtitle}</Text>
          <View style={styles.contactInfo}>
            <Text style={styles.text}>Contact: {siteConfig.contact.email}</Text>
            <Text style={styles.text}>Location: {siteConfig.contact.location}</Text>
            <Text style={styles.text}>Phone: {siteConfig.contact.phone}</Text>
          </View>
        </View>
      </Page>

      {/* Services Page */}
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>Services</Text>
          <Text style={styles.text}>{servicesContent.subtitle}</Text>
          <View style={styles.divider} />
          {servicesContent.services.map((service, index) => (
            <View key={index} style={styles.list}>
              <Text style={styles.listItem}>• {service.title}</Text>
              <Text style={styles.text}>{service.description}</Text>
            </View>
          ))}
        </View>
      </Page>

      {/* Projects Section */}
      {allProjects.map((project, index) => (
        <React.Fragment key={index}>
          {/* Project Overview Page */}
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text style={styles.title}>{project.title}</Text>
              <Text style={styles.subtitle}>{project.category} | {project.location} | {project.year}</Text>
              <View style={styles.divider} />
              <Text style={styles.text}>{project.description}</Text>

              {project.sections && (
                <>
                  {project.sections.map((section, sIndex) => (
                    <View key={sIndex}>
                      <Text style={styles.sectionTitle}>{section.title}</Text>
                      <Text style={styles.text}>{section.content}</Text>
                    </View>
                  ))}
                </>
              )}

              <Text style={styles.sectionTitle}>Services Provided</Text>
              {project.services.map((service, sIndex) => (
                <Text key={sIndex} style={styles.listItem}>• {service}</Text>
              ))}
            </View>
          </Page>

          {/* Project Images Page */}
          {project.imageGroups && project.imageGroups.length > 0 && (
            <Page size="A4" style={styles.page}>
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Project Gallery</Text>
                <View style={styles.divider} />
                {project.imageGroups.map((group, gIndex) => (
                  <View key={gIndex} style={styles.imageContainer}>
                    {group.layout === 'stack' ? (
                      // Stack layout
                      group.images.map((image, iIndex) => (
                        <View key={iIndex}>
                          <Image src={image.url} style={styles.singleImage} />
                          <Text style={styles.imageCaption}>{image.caption}</Text>
                        </View>
                      ))
                    ) : (
                      // Row layout
                      <View style={styles.imageRow}>
                        {group.images.map((image, iIndex) => (
                          <View key={iIndex} style={{ flex: 1 }}>
                            <Image src={image.url} style={styles.singleImage} />
                            <Text style={styles.imageCaption}>{image.caption}</Text>
                          </View>
                        ))}
                      </View>
                    )}
                  </View>
                ))}
              </View>
            </Page>
          )}

          {/* Technical Drawings Page */}
          {project.technicalDrawings && project.technicalDrawings.length > 0 && (
            <Page size="A4" style={styles.page}>
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Technical Drawings</Text>
                <View style={styles.divider} />
                {project.technicalDrawings.map((drawing, dIndex) => (
                  <View key={dIndex} style={styles.imageContainer}>
                    <Image src={drawing.url} style={styles.singleImage} />
                    <Text style={styles.imageCaption}>{drawing.title}</Text>
                    {drawing.measurements && (
                      <Text style={styles.text}>
                        {drawing.measurements.scale && `Scale: ${drawing.measurements.scale}`}
                        {drawing.measurements.width && ` | Width: ${drawing.measurements.width}`}
                        {drawing.measurements.height && ` | Height: ${drawing.measurements.height}`}
                      </Text>
                    )}
                  </View>
                ))}
              </View>
            </Page>
          )}
        </React.Fragment>
      ))}
    </Document>
  );
};

export default PortfolioPDF; 