import React from 'react'
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Font,
} from '@react-pdf/renderer'
import { siteConfig, heroContent, servicesContent } from '@/data/content'
import { getAllPDFProjects } from '@/data/pdf-projects'

// Helper function to split array into chunks
const chunk = <T,>(arr: T[], size: number): T[][] => {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  )
}

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
  },
  coverpage: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 0,
    margin: 0,
  },
  coversection: {
    margin: 0,
    padding: 0,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    color: '#1a1a1a',
    fontWeight: 'bold',
    paddingLeft: 20,
  },
  covertitle: {
    fontSize: 12,
    marginBottom: 2,
    color: '#1a1a1a',
    fontWeight: 'bold',
    paddingLeft: 20,
  },
  covertext: {
    fontSize: 8,
    marginBottom: 5,
    color: '#666666',
    lineHeight: 1.6,
    paddingLeft: 20,
    textAlign: 'left',
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
    height: '100%',
    padding: 0,
    margin: 0,
  },
  coverHeader: {
    marginBottom: 10,
    marginTop: 10,
    width: '50%',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
  },
  imageContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  singleImage: {
    width: '100%',
    height: 200,
    objectFit: 'cover',
    marginBottom: 5,
  },
  planImage: {
    width: '90vw',
    height: '40vh',
    objectFit: 'contain',
  },
  elevationImage: {
    width: '90vw',
    height: '40vh',
    objectFit: 'contain',
  },
  renderImage: {
    width: '47vw',
    height: '70vh',
    objectFit: 'cover',
  },
  fullPageRenderImage: {
    width: '90vw',
    height: '70vh',
    objectFit: 'cover',
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '98vw',
    padding: '0 2vw',
    gap: '20px',
  },
  verticalDivider: {
    width: '2px',
    height: '70vh',
    backgroundColor: '#e5e5e5',
    alignSelf: 'center',
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
  stackedImageContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    flex: 1,
  },
  groupTitle: {
    fontSize: 14,
    marginBottom: 20,
    marginTop: 20,
    color: '#1a1a1a',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    paddingLeft: 20,
  },
  stackedContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    width: '100%',
  },
  projectOverview: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    padding: '0 2vw',
  },
  projectHeroImage: {
    width: '45vw',
    height: '70vh',
    objectFit: 'cover',
  },
})

// PDF Document Component
const PortfolioPDF: React.FC = () => {
  const allProjects = getAllPDFProjects()

  // Helper function to convert relative URLs to absolute URLs
  const getAbsoluteUrl = (relativeUrl: string) => {
    // Remove the leading slash if it exists
    const cleanUrl = relativeUrl.startsWith('/')
      ? relativeUrl.slice(1)
      : relativeUrl
    return `${window.location.origin}/${cleanUrl}`
  }

  return (
    <Document>
      {/* Cover Page */}
      <Page size="A4" style={styles.coverpage} orientation="landscape">
        <View style={styles.coverSection}>
          <View style={styles.coverHeader}>
            <Text style={styles.covertitle}>{siteConfig.title}</Text>
            <Text style={styles.covertext}>{heroContent.subtitle}</Text>
          </View>
          <Image
            src={getAbsoluteUrl(heroContent.backgroundImage)}
            style={styles.heroImage}
          />
        </View>
      </Page>

      {/* Services Page */}
      {/* <Page size="A4" style={styles.page}>
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
      </Page> */}

      {/* Projects Section */}
      {allProjects.map((project, index) => (
        <React.Fragment key={index}>
          {/* Project Overview Page */}
          <Page size="A4" style={styles.coverpage} orientation="landscape">
            <View style={styles.coversection}>
              <View style={styles.projectOverview}>
                <View style={styles.coverHeader}>
                  <Text style={styles.covertitle}>{project.title}</Text>
                  <Text style={styles.covertext}>
                    {project.category} | {project.location} | {project.year}
                  </Text>
                  <Text style={styles.covertext}>{project.description}</Text>

                  {project.collaborators && project.collaborators.length > 0 && (
                    <>
                      <Text style={styles.covertitle}>Collaborators</Text>
                      {project.collaborators.map((collaborator, cIndex) => (
                        <Text key={cIndex} style={styles.covertext}>
                          • {collaborator.name}{'\n'}
                          {'  '}{collaborator.role}
                        </Text>
                      ))}
                    </>
                  )}

                  {project.sections && (
                    <>
                      {project.sections.map((section, sIndex) => (
                        <View key={sIndex}>
                          <Text style={styles.covertitle}>{section.title}</Text>
                          <Text style={styles.covertext}>{section.content}</Text>
                        </View>
                      ))}
                    </>
                  )}
                </View>
                {project.heroImage && (
                  <Image
                    src={getAbsoluteUrl(project.heroImage.url)}
                    style={styles.projectHeroImage}
                  />
                )}
              </View>
            </View>
          </Page>

          {/* Project Images Pages */}
          {project.imageGroups && project.imageGroups.length > 0 && project.imageGroups.map((group, gIndex) => {
            if (gIndex === 0) {
              // First group (renders) - create separate pages for each pair
              const pairs = chunk(group.images, 2)
              return pairs.map((pair, pIndex) => (
                <Page key={`${gIndex}-${pIndex}`} size="A4" style={styles.coverpage} orientation="landscape">
                  <View style={styles.coversection}>
                    <View style={styles.imageContainer}>
                      <View style={styles.imageRow}>
                        {pair.length === 2 ? (
                          // Two images - side by side
                          pair.map((image, iIndex) => (
                            <View key={iIndex} style={{ flex: 1 }}>
                              <Image
                                src={getAbsoluteUrl(image.url)}
                                style={styles.renderImage}
                              />
                              <Text style={styles.covertext}>
                                {image.caption}
                              </Text>
                            </View>
                          ))
                        ) : (
                          // Single image - centered and larger
                          <View style={{ flex: 1, alignItems: 'center' }}>
                            <Image
                              src={getAbsoluteUrl(pair[0].url)}
                              style={styles.fullPageRenderImage}
                            />
                            <Text style={styles.covertext}>
                              {pair[0].caption}
                            </Text>
                          </View>
                        )}
                      </View>
                    </View>
                  </View>
                </Page>
              ))
            } else {
              // Other groups - vertical stack layout with pagination
              const pairs = chunk(group.images, 2)
              return pairs.map((pair, pIndex) => (
                <Page key={`${gIndex}-${pIndex}`} size="A4" style={styles.coverpage} orientation="landscape">
                  <View style={styles.coversection}>
                    <Text style={styles.groupTitle}>
                      {gIndex === 1 ? "Floor Plans" : "Elevations"}
                    </Text>
                    <View style={styles.stackedContainer}>
                      {pair.map((image, iIndex) => (
                        <View key={iIndex}>
                          <Image
                            src={getAbsoluteUrl(image.url)}
                            style={gIndex === 1 ? styles.planImage : styles.elevationImage}
                          />
                          <Text style={styles.covertext}>
                            {image.caption}
                          </Text>
                        </View>
                      ))}
                    </View>
                  </View>
                </Page>
              ))
            }
          })}

          {/* Technical Drawings Page */}
          {project.technicalDrawings && project.technicalDrawings.length > 0 && (
            <Page size="A4" style={styles.coverpage} orientation="landscape">
              <View style={styles.coversection}>
                <Text style={styles.covertitle}>Technical Drawings</Text>
                {project.technicalDrawings.map((drawing, dIndex) => (
                  <View key={dIndex} style={styles.imageContainer}>
                    <Image
                      src={getAbsoluteUrl(drawing.url)}
                      style={styles.singleImage}
                    />
                    <Text style={styles.covertext}>{drawing.title}</Text>
                    {drawing.measurements && (
                      <Text style={styles.covertext}>
                        {drawing.measurements.scale &&
                          `Scale: ${drawing.measurements.scale}`}
                        {drawing.measurements.width &&
                          ` | Width: ${drawing.measurements.width}`}
                        {drawing.measurements.height &&
                          ` | Height: ${drawing.measurements.height}`}
                      </Text>
                    )}
                  </View>
                ))}
              </View>
            </Page>
          )}
        </React.Fragment>
      ))}
      <Page size="A4" style={styles.coverpage} orientation="landscape">
        <View style={styles.coverSection}>
          <View style={styles.coverHeader}>
            <Text style={styles.covertitle}>Thank you for your interest!</Text>
            <Text style={styles.covertext}>
              You can contact me at {siteConfig.contact.email}
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  )
}

export default PortfolioPDF
