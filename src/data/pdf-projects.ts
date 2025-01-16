interface TechnicalDrawing {
  url: string
  title: string
  measurements?: {
    width?: string
    height?: string
    scale?: string
  }
}

interface ProjectSection {
  title: string
  content: string
}

interface ImageGroup {
  layout: 'stack' | 'row'  // stack = vertical, row = horizontal
  images: {
    url: string
    alt: string
    caption: string
  }[]
}

interface Collaborator {
  name: string
  role: string
  url?: string
}

export interface PDFProject {
  id: string
  title: string
  category: string
  location: string
  year: string
  description: string
  heroImage?: {
    url: string
    alt: string
  }
  sections?: ProjectSection[]
  services: string[]
  collaborators?: Collaborator[]
  imageGroups: ImageGroup[]
  technicalDrawings?: TechnicalDrawing[]
  pdfSpecificContent?: {
    extendedDescription?: string
    additionalSections?: ProjectSection[]
    pdfOnlyImages?: ImageGroup[]
  }
}

// Initially copy from projects.ts, but we can customize for PDF
export const pdfProjects: Record<string, PDFProject> = {
    'joseph-st': {
        id: 'joseph-st',
        title: "Joseph Street",
        category: "Residential",
        location: "New Orleans, LA",
        year: "2024",
        description: "This comprehensive renovation project features an updated living and kitchen area overlooking a new rear deck and pool addition. The interior renovation focuses on creating a seamless flow between spaces, with the master suite offering a luxurious retreat complete with a custom-designed bathroom and walk-in closet. The design includes a front mudroom addition that serves as both a practical entry point and an architectural feature, incorporating built-in storage solutions and durable materials suitable for New Orleans' climate. The updated facade maintains the home's historic character while introducing subtle modern elements that enhance curb appeal. The rear outdoor space has been transformed into an entertainment oasis, featuring a custom-designed deck that transitions elegantly to the pool area, complemented by a spacious storage shed that matches the main structure's architectural style.",
        services: [
          "Complete architectural drawings",
          "Building permit documentation",
          "3D visualization",
          "Construction documentation"
        ],
        imageGroups: [
          {
            layout: 'stack',
            images: [
              {
                url: "/projects/joseph_st/renders/FOYER_EDITED_RENDER.png",
                alt: "Foyer Design",
                caption: "Elegant Foyer with Custom Trim"
              },
              {
                url: "/projects/joseph_st/renders/Kitchen_Rendered_Edited.png",
                alt: "Kitchen Design",
                caption: "Modern Kitchen Design"
              }
            ]
          },
          {
            layout: 'stack',
            images: [
              {
                url: "/projects/joseph_st/floor_plan_2.jpg",
                alt: "First Floor Plan",
                caption: "First Floor Plan"
              },
              {
                url: "/projects/joseph_st/floor_plan.jpg",
                alt: "Second Floor Plan",
                caption: "Second Floor Plan"
              }
            ]
          },
          {
            layout: 'stack',
            images: [
              {
                url: "/projects/joseph_st/elevation_1.jpg",
                alt: "Front Elevation",
                caption: "Front Elevation"
              },
              {
                url: "/projects/joseph_st/elevation_2.jpg",
                alt: "Back Elevation",
                caption: "Back Elevation"
              },
              {
                url: "/projects/joseph_st/elevation_3.jpg",
                alt: "Side Elevation",
                caption: "Side Elevation"
              },
              {
                url: "/projects/joseph_st/elevation_4.jpg",
                alt: "Side Elevation",
                caption: "Side Elevation"
              }
            ]
          }
        ],
      },
      'cuddihy-st': {
        id: 'cuddihy-st',
        title: "Cuddihy Street",
        category: "Residential",
        location: "Metairie, LA",
        year: "2024",
        description: "This project features a stunning glass box addition over an existing roof, creating a master suite with a luxurious bathroom and expansive closet. The design seamlessly integrates a new laundry room and updates the existing spaces to improve the home's overall utility and flow. The glass box serves as a focal point of the renovation, offering breathtaking views of the site's beautiful garden while flooding the interior with natural light. The master bathroom is designed with high-end finishes and custom cabinetry, featuring a spacious double vanity and a freestanding soaking tub. The thoughtful renovation maintains the home's original character while introducing modern amenities and architectural elements that elevate both its functionality and aesthetic appeal.",
        services: [
          "Renovation planning",
          "Interior design",
          "3D visualization",
          "Construction documentation"
        ],
        heroImage: {
          url: "/projects/cuddihy_st/renders/hero.jpg",
          alt: "Outdoor Renovation"
        },
        imageGroups: [
          {
            layout: 'stack',
            images: [
              {
                url: "/projects/cuddihy_st/renders/hero.jpg",
                alt: "Outdoor Renovation",
                caption: "Outdoor render"
              },
              {
                url: "/projects/cuddihy_st/renders/2024.35_315_Cuddihy_Metairie_LA._Home_Renovation__02_.png",
                alt: "Bathroom Renovation",
                caption: "Master Bathroom Design"
              },
              {
                url: "/projects/cuddihy_st/renders/Sink_Area_.png",
                alt: "Sink Area",
                caption: "Custom Sink Area Design"
              }
            ]
          },
          {
            layout: 'stack',
            images: [
              {
                url: "/projects/cuddihy_st/floor_plan_new.jpg",
                alt: "First Floor Plan",
                caption: "First Floor Layout"
              },
              {
                url: "/projects/cuddihy_st/floor_plan_new_2.jpg",
                alt: "Second Floor Plan",
                caption: "Second Floor Layout"
              }
            ]
          },
          {
            layout: 'stack',
            images: [
              {
                url: "/projects/cuddihy_st/elevation_1.jpg",
                alt: "Front and Rear Elevations",
                caption: "Front and Rear Elevations"
              },
              {
                url: "/projects/cuddihy_st/elevation_2.jpg",
                alt: "Side Elevation",
                caption: "Side Elevation"
              },
              {
                url: "/projects/cuddihy_st/elevation_3.jpg",
                alt: "Side Elevation",
                caption: "Side Elevation"
              }
            ]
          }
        ],
        collaborators: [
          {
            name: "Marie French",
            role: "Architectural Intern"
          },
          {
            name: "Charles Neyrey",
            role: "Architect"
          },
          {
            name: "Michael Delgiudice",
            role: "Architect"
          }
        ]
      },
      'calhoun-st': {
        id: 'calhoun-st',
        title: "Calhoun Street",
        category: "High-Density Residential",
        location: "New Orleans, LA",
        year: "2024",
        description: "This elegant renovation transformed a double home into a spacious single residence with 8 bedrooms, ideal for student living near Yulman Stadium. The project's centerpiece is a modern kitchen featuring Spanish design elements, including custom tilework and a large island that serves as both a cooking and gathering space. The renovation includes four luxurious bathrooms with high-end fixtures and finishes, complemented by a cozy common room that opens directly to a welcoming front porch through restored historic doors. A thoughtful 5-foot rear addition enhances the living space, providing a seamless transition between the original structure and new construction while maximizing natural light. The project successfully balances the needs of modern student living with the preservation of historic architectural elements, creating comfortable private spaces while fostering a sense of community in shared areas.",
        services: [
          "Architectural design",
          "Space planning",
          "3D visualization",
          "Construction documentation"
        ],
        imageGroups: [
          {
            layout: 'stack',
            images: [
              {
                url: "/projects/calhoun_st/renders/EDITED_RENDERS/LIVING_ROOM_RENDER .jpg",
                alt: "Living Room",
                caption: "Spacious Living Area"
              },
              {
                url: "/projects/calhoun_st/renders/EDITED_RENDERS/KITCHEN_RENDER.jpg",
                alt: "Kitchen Design",
                caption: "Contemporary Kitchen"
              }
            ]
          },
          {
            layout: 'stack',
            images: [
              {
                url: "/projects/calhoun_st/floor_plan_new.jpg",
                alt: "First Floor Plan",
                caption: "First Floor Layout"
              },
              {
                url: "/projects/calhoun_st/floor_plan_new_2.jpg",
                alt: "Second Floor Plan",
                caption: "Second Floor Layout"
              }
            ]
          },
          {
            layout: 'stack',
            images: [
              {
                url: "/projects/calhoun_st/elevation_3.jpg",
                alt: "Front and Rear Elevations",
                caption: "Front and Rear Elevations"
              },
              {
                url: "/projects/calhoun_st/elevation_1.jpg",
                alt: "Side Elevation",
                caption: "Side Elevation"
              },
              {
                url: "/projects/calhoun_st/elevation_2.jpg",
                alt: "Side Elevation",
                caption: "Side Elevation"
              }
            ]
          }
        ]
      },
      'hillary-st': {
        id: 'hillary-st',
        title: "Hillary Street",
        category: "Residential",
        location: "New Orleans, LA",
        year: "2024",
        description: "This project transformed a duplex into a spacious single-family home, featuring thoughtful space planning that maximizes both functionality and comfort. The first floor renovation includes a large master bedroom and guest room, complemented by an open-concept living area that was enhanced through a strategic small addition. The modern kitchen serves as the heart of the home, featuring custom cabinetry and a large island that creates a natural flow between cooking and entertaining spaces. The second floor was reimagined to include a private office space, a luxurious master bedroom with a walk-in closet, and two additional large bedrooms connected by an elegantly designed Jack and Jill bathroom. The renovation successfully preserves the home's historic charm while introducing contemporary elements that create a perfect balance of private retreats and communal gathering spaces.",
        services: [
          "Architectural design",
          "Interior planning",
          "3D visualization",
          "Construction documentation"
        ],
        imageGroups: [
          {
            layout: 'stack',
            images: [
              {
                url: "/projects/hillary_st/renders/renders_one_kitchen.jpeg",
                alt: "Kitchen Design",
                caption: "Modern Kitchen Design"
              }
            ]
          },
          {
            layout: 'stack',
            images: [
              {
                url: "/projects/hillary_st/floor_plan_new.jpg",
                alt: "First Floor Plan",
                caption: "First Floor Layout"
              },
              {
                url: "/projects/hillary_st/floor_plan_new_2.jpg",
                alt: "Second Floor Plan",
                caption: "Second Floor Layout"
              }
            ]
          },
          {
            layout: 'stack',
            images: [
              {
                url: "/projects/hillary_st/elevation_3.jpg",
                alt: "Front and Rear Elevations",
                caption: "Front and Rear Elevations"
              },
              {
                url: "/projects/hillary_st/elevation_1.jpg",
                alt: "Side Elevation",
                caption: "Side Elevation"
              },
              {
                url: "/projects/hillary_st/elevation_2.jpg",
                alt: "Side Elevation",
                caption: "Side Elevation"
              }
            ]
          }
        ]
      },
      'burdette-st': {
        id: 'burdette-st',
        title: "Burdette Street",
        category: "Commercial",
        location: "New Orleans, LA",
        year: "2024",
        description: "This innovative community center utilizes prefabricated structures thoughtfully tailored to city standards, creating an efficient and welcoming space for neighborhood engagement. The site's design centers around vibrant community gardens that provide both aesthetic beauty and functional growing spaces for local residents. A spacious circulation deck, adorned with three majestic trees, serves as the heart of the project, offering a versatile outdoor gathering space that connects different areas of the site. The prefabricated structures are strategically positioned to create intimate spaces for various activities while maintaining visual connections throughout the site. The project successfully balances cost-effective construction methods with design excellence, resulting in a sustainable and accessible hub that strengthens community bonds through shared spaces and activities.",
        services: [
          "Architectural design",
          "Interior planning",
          "Construction documentation",
          "Permit documentation"
        ],
        imageGroups: [
          {
            layout: 'stack',
            images: [
              {
                url: "/projects/burdette_st/renders/render_one_.jpeg",
                alt: "Exterior Render",
                caption: "Modern Exterior Design"
              },
              {
                url: "/projects/burdette_st/renders/render_two_burdette.jpeg",
                alt: "Exterior Render",
                caption: "Modern Exterior Design"
              }
            ]
          },
          {
            layout: 'stack',
            images: [
              {
                url: "/projects/burdette_st/floor_plan_new.jpg",
                alt: "Floor Plan",
                caption: "Detailed Floor Plan"
              },
              {
                url: "/projects/burdette_st/site_plan.jpg",
                alt: "Site Plan",
                caption: "Site Plan"
              }
            ]
          },
          {
            layout: 'stack',
            images: [
              {
                url: "/projects/burdette_st/elevation_1.jpg",
                alt: "Front Elevations",
                caption: "Front Elevations"
              },
              {
                url: "/projects/burdette_st/elevation_2.jpg",
                alt: "Front Elevations",
                caption: "Front Elevations"
              },
              {
                url: "/projects/burdette_st/elevation_3.jpg",
                alt: "Front Elevations",
                caption: "Front Elevations"
              },
              {
                url: "/projects/burdette_st/elevation_4.jpg",
                alt: "Street Elevation",
                caption: "Street Elevation"
              },
              {
                url: "/projects/burdette_st/elevation_5.jpg",
                alt: "Street Elevation",
                caption: "Street Elevation"
              }
            ]
          }
        ],
      },
      // 'school-projects': {
      //   id: 'school-projects',
      //   title: "School Projects",
      //   category: "Student Work",
      //   location: "Baton Rouge, LA",
      //   year: "2018 - 2023",
      //   description: `
      //     A collection of LSU architectural projects showcasing skills learned in the classroom.
      //   `,
      //   sections: [
      //     {
      //       title: "Project Goals",
      //       content: "To demonstrate proficiency in architectural drafting and design principles..."
      //     },
      //     {
      //       title: "Learning Outcomes",
      //       content: "Successfully implemented various drafting techniques and software tools..."
      //     }
      //   ],
      //   services: [
      //     "Complete architectural drawings",
      //     "Building permit documentation",
      //     "3D visualization",
      //     "Construction documentation"
      //   ],
      //   imageGroups: [
      //     {
      //       layout: 'stack',
      //       images: [
      //         {
      //           url: "/images/school-projects/facade.jpg",
      //           alt: "Modern Family Home Exterior",
      //           caption: "Front elevation showing modern architectural elements"
      //         }
      //       ]
      //     },
      //     {
      //       layout: 'stack',
      //       images: [
      //         {
      //           url: "/images/school-projects/1.jpg",
      //           alt: "Living Room Design",
      //           caption: "Open concept living space"
      //         },
      //         {
      //           url: "/images/school-projects/2.jpg",
      //           alt: "Kitchen Layout",
      //           caption: "Modern kitchen design"
      //         },
      //         {
      //           url: "/images/school-projects/3.jpg",
      //           alt: "Dining Area",
      //           caption: "Connected dining space"
      //         }
      //       ]
      //     }
      //   ],
      //   technicalDrawings: [
      //     {
      //       url: "/images/school-projects/birdy-bitch.jpg",
      //       title: "Foundation Plan"
      //     }
      //   ]
      // },
      'aspen-st': {
        id: 'aspen-st',
        title: "Aspen Street",
        category: "Residential",
        location: "New Orleans, LA",
        year: "2025",
        description: "This comprehensive residential renovation project artfully balances modern design elements with the home's classic New Orleans character through thoughtful architectural interventions. The open-concept living space features restored original millwork alongside contemporary fixtures, creating a seamless blend of old and new. The kitchen renovation serves as a centerpiece of the design, featuring custom cabinetry, high-end appliances, and a large island that creates an inviting space for both cooking and entertaining. The project includes careful restoration of historic windows and doors, while strategic modifications to the floor plan improve flow and functionality throughout the home. The renovation successfully preserves and enhances the property's architectural heritage while introducing modern amenities that elevate the daily living experience.",
        collaborators: [
          {
            name: "Marie French",
            role: "Architectural Intern"
          },
          {
            name: "John Grey",
            role: "Project Manager and Architect"
          },
          {
            name: "Charles Neyrey",
            role: "Architect"
          }
        ],
        services: [
          "Complete architectural drawings",
          "Building permit documentation",
          "3D visualization",
          "Construction documentation"
        ],
        imageGroups: [
          {
            layout: 'stack',
            images: [
              {
                url: "/projects/aspen_st/renders/living_room.jpg",
                alt: "Living Room Design",
                caption: "Open Concept Living Space"
              },
              {
                url: "/projects/aspen_st/renders/kitchen.jpg",
                alt: "Kitchen Design",
                caption: "Modern Kitchen Design"
              }
            ]
          },
          {
            layout: 'stack',
            images: [
              {
                url: "/projects/aspen_st/floor_plan_new.jpg",
                alt: "First Floor Plan",
                caption: "First Floor Layout"
              },
              {
                url: "/projects/aspen_st/floor_plan_new_2.jpg",
                alt: "Second Floor Plan",
                caption: "Second Floor Layout"
              }
            ]
          },
          {
            layout: 'stack',
            images: [
              {
                url: "/projects/aspen_st/elevation_3.jpg",
                alt: "Front Elevation",
                caption: "Front Elevation"
              },
              {
                url: "/projects/aspen_st/elevation_4.jpg",
                alt: "Rear Elevation",
                caption: "Rear Elevation"
              },
              {
                url: "/projects/aspen_st/elevation_1.jpg",
                alt: "Side Elevation",
                caption: "Side Elevation"
              },
              {
                url: "/projects/aspen_st/elevation_2.jpg",
                alt: "Side Elevation",
                caption: "Side Elevation"
              }
            ]
          }
        ],
      },
      'burgundy-st': {
        id: 'burgundy-st',
        title: "Burgundy Street",
        category: "Residential",
        location: "New Orleans, LA",
        year: "2024",
        description: "This unique property showcases a compact new construction home thoughtfully designed to maximize a small urban lot in historic New Orleans. The design embraces the traditional shotgun concept with a modern interpretation, featuring an open-plan living and kitchen area that creates a spacious feel within the efficient footprint. A distinctive front and rear decking system extends the living space outdoors, providing versatile areas for relaxation and entertainment while maintaining privacy. The two-bedroom layout incorporates clever storage solutions and multi-functional spaces, ensuring every square foot serves a purpose without feeling cramped. The project successfully merges traditional New Orleans architectural elements with contemporary amenities, creating a home that respects its historic context while meeting modern living needs.",
        services: [
          "Complete architectural drawings",
          "Building permit documentation",
          "3D visualization",
          "Construction documentation"
        ],
        imageGroups: [
          {
            layout: 'stack',
            images: [
              {
                url: "/projects/burgundy_st/renders/RENDER_EXTERIOR.jpeg",
                alt: "Exterior Render",
                caption: "Modern Exterior Design"
              }
            ]
          },
          {
            layout: 'stack',
            images: [
              {
                url: "/projects/burgundy_st/floor_plan_new.jpg",
                alt: "Floor Plan",
                caption: "Detailed Floor Plan"
              }
            ]
          },
          {
            layout: 'stack',
            images: [
              {
                url: "/projects/burgundy_st/elevation_1.jpg",
                alt: "Front and Rear Elevations",
                caption: "Front and Rear Elevations"
              },
              {
                url: "/projects/burgundy_st/elevation_2.jpg",
                alt: "Side Elevation",
                caption: "Side Elevation"
              },
              {
                url: "/projects/burgundy_st/elevation_3.jpg",
                alt: "Side Elevation",
                caption: "Side Elevation"
              }
            ]
          }
        ],
        collaborators: [
          {
            name: "Marie French",
            role: "Architectural Intern"
          },
          {
            name: "Mandita Malhotra",
            role: "Architectural Intern"
          },
          {
            name: "James Vo",
            role: "Architectural Intern"
          },
          {
            name: "Charles Neyrey",
            role: "Architect"
          }
        ]
      }
    }

export const getAllPDFProjects = () => {
  return Object.values(pdfProjects)
}

export const getPDFProject = (id: string) => {
  return pdfProjects[id]
} 