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

export interface Project {
  id: string
  title: string
  category: string
  location: string
  year: string
  description: string
  sections?: ProjectSection[]
  services: string[]
  imageGroups: ImageGroup[]
  technicalDrawings?: TechnicalDrawing[]
  pdf?: {
    url: string
    title: string
  }
}

export const projects: Record<string, Project> = {
  'joseph-st': {
    id: 'joseph-st',
    title: "Joseph Street Project",
    category: "Residential",
    location: "New Orleans, LA",
    year: "2024",
    description: "A comprehensive residential project showcasing modern architectural design with traditional New Orleans influences.",
    sections: [
      {
        title: "Project Overview",
        content: "Complete architectural documentation including floor plans, elevations, and detailed drawings for a residential renovation in New Orleans. This project combines modern amenities with traditional architectural elements to create a harmonious living space."
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
            url: "/projects/joseph_st/renders/Kitchen_Rendered_Edited.png",
            alt: "Kitchen Design",
            caption: "Modern Kitchen Design"
          },
          {
            url: "/projects/joseph_st/renders/FOYER_EDITED_RENDER.png",
            alt: "Foyer Design",
            caption: "Elegant Foyer with Custom Trim"
          }
        ]
      },
      {
        layout: 'row',
        images: [
          {
            url: "/projects/joseph_st/Joseph_St_PDF_page_10.jpg",
            alt: "Documentation Page 10",
            caption: "Technical Documentation"
          },
          {
            url: "/projects/joseph_st/Joseph_St_PDF_page_11.jpg",
            alt: "Documentation Page 11",
            caption: "Technical Documentation"
          },
          {
            url: "/projects/joseph_st/Joseph_St_PDF_page_12.jpg",
            alt: "Documentation Page 12",
            caption: "Technical Documentation"
          }
        ]
      },
      {
        layout: 'row',
        images: [
          {
            url: "/projects/joseph_st/elevation_1.jpg",
            alt: "Front Elevation",
            caption: "Front Elevation Design"
          },
          {
            url: "/projects/joseph_st/elevation_2.jpg",
            alt: "Side Elevation",
            caption: "Side Elevation Design"
          }
        ]
      },
      {
        layout: 'row',
        images: [
          {
            url: "/projects/joseph_st/elevation_3.jpg",
            alt: "Rear Elevation",
            caption: "Rear Elevation Design"
          },
          {
            url: "/projects/joseph_st/elevation_4.jpg",
            alt: "Side Elevation",
            caption: "Side Elevation Design"
          }
        ]
      }
    ],
    pdf: {
      url: "/projects/joseph_st/joseph_st.pdf",
      title: "Joseph Street Project Documentation"
    }
  },
  'cuddihy-st': {
    id: 'cuddihy-st',
    title: "Cuddihy Street Renovation",
    category: "Residential",
    location: "Metairie, LA",
    year: "2024",
    description: "Modern home renovation project featuring updated interiors and thoughtful space planning.",
    sections: [
      {
        title: "Project Overview",
        content: "Complete renovation design focusing on modernizing the space while maintaining functionality."
      }
    ],
    services: [
      "Renovation planning",
      "Interior design",
      "3D visualization",
      "Construction documentation"
    ],
    imageGroups: [
      {
        layout: 'row',
        images: [
          {
            url: "/projects/cuddihy_st/renders/2024.35_315_Cuddihy_Metairie_LA._Home_Renovation__02_.png",
            alt: "Kitchen Renovation",
            caption: "Modern Kitchen Design"
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
            url: "/projects/cuddihy_st/CUDDIHY_PDF_page_1.jpg",
            alt: "Project Documentation",
            caption: "Project Overview"
          }
        ]
      }
    ],
    pdf: {
      url: "/projects/cuddihy_st/cuddihy_st.pdf",
      title: "Cuddihy Street Renovation Documentation"
    }
  },
  'calhoun-st': {
    id: 'calhoun-st',
    title: "Calhoun Street Project",
    category: "Residential",
    location: "New Orleans, LA",
    year: "2024",
    description: "Elegant residential renovation combining traditional New Orleans architecture with contemporary living spaces.",
    sections: [
      {
        title: "Design Approach",
        content: "Thoughtful renovation preserving historical elements while introducing modern functionality."
      }
    ],
    services: [
      "Architectural design",
      "Space planning",
      "3D visualization",
      "Construction documentation"
    ],
    imageGroups: [
      {
        layout: 'row',
        images: [
          {
            url: "/projects/calhoun_st/renders/EDITED_RENDERS/FRONT_RENDER.jpg",
            alt: "Front Exterior",
            caption: "Modern Exterior Design"
          },
          {
            url: "/projects/calhoun_st/renders/EDITED_RENDERS/KITCHEN_RENDER.jpg",
            alt: "Kitchen Design",
            caption: "Contemporary Kitchen"
          },
          {
            url: "/projects/calhoun_st/renders/EDITED_RENDERS/COMMON_ROOM.jpg",
            alt: "Common Room",
            caption: "Open Concept Living Space"
          }
        ]
      },
      {
        layout: 'row',
        images: [
          {
            url: "/projects/calhoun_st/renders/EDITED_RENDERS/BATHROOM_RENDER.jpg",
            alt: "Bathroom Design",
            caption: "Modern Bathroom"
          },
          {
            url: "/projects/calhoun_st/renders/EDITED_RENDERS/LIVING_ROOM_RENDER.jpg",
            alt: "Living Room",
            caption: "Spacious Living Area"
          }
        ]
      }
    ],
    pdf: {
      url: "/projects/calhoun_st/calhoun_stf.pdf",
      title: "Calhoun Street Project Documentation"
    }
  },
  'hillary-st': {
    id: 'hillary-st',
    title: "Hillary Street Project",
    category: "Residential",
    location: "New Orleans, LA",
    year: "2024",
    description: "Comprehensive home renovation featuring modern amenities while preserving historical character.",
    sections: [
      {
        title: "Project Scope",
        content: "Full-scale renovation including interior updates, outdoor living spaces, and structural improvements."
      }
    ],
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
            url: "/projects/hillary_st/Hillary_St_PDF_page_1.jpg",
            alt: "Project Overview",
            caption: "Project Documentation"
          },
          {
            url: "/projects/hillary_st/Hillary_St_PDF_page_2.jpg",
            alt: "Floor Plans",
            caption: "Detailed Floor Plans"
          }
        ]
      }
    ],
    pdf: {
      url: "/projects/hillary_st/Hillary_st.pdf",
      title: "Hillary Street Project Documentation"
    }
  },
  'burdette-st': {
    id: 'burdette-st',
    title: "Burdette Street Project",
    category: "Residential",
    location: "New Orleans, LA",
    year: "2024",
    description: "Modern residential renovation focusing on open-concept living and improved functionality.",
    sections: [
      {
        title: "Project Goals",
        content: "Creating a seamless flow between spaces while maximizing natural light and functionality."
      }
    ],
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
            url: "/projects/burdette_st/Burdette_PDF_page_1.jpg",
            alt: "Project Overview",
            caption: "Project Documentation"
          },
          {
            url: "/projects/burdette_st/Burdette_PDF_page_2.jpg",
            alt: "Floor Plans",
            caption: "Detailed Floor Plans"
          }
        ]
      }
    ],
    pdf: {
      url: "/projects/burdette_st/burdette_st.pdf",
      title: "Burdette Street Project Documentation"
    }
  },
  'school-projects': {
    id: 'school-projects',
    title: "School Projects",
    category: "Student Work",
    location: "Baton Rouge, LA",
    year: "2018 - 2023",
    description: `
      A collection of LSU architectural projects showcasing skills learned in the classroom.
    `,
    sections: [
      {
        title: "Project Goals",
        content: "To demonstrate proficiency in architectural drafting and design principles..."
      },
      {
        title: "Learning Outcomes",
        content: "Successfully implemented various drafting techniques and software tools..."
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
            url: "/images/school-projects/facade.jpg",
            alt: "Modern Family Home Exterior",
            caption: "Front elevation showing modern architectural elements"
          }
        ]
      },
      {
        layout: 'row',
        images: [
          {
            url: "/images/school-projects/1.jpg",
            alt: "Living Room Design",
            caption: "Open concept living space"
          },
          {
            url: "/images/school-projects/2.jpg",
            alt: "Kitchen Layout",
            caption: "Modern kitchen design"
          },
          {
            url: "/images/school-projects/3.jpg",
            alt: "Dining Area",
            caption: "Connected dining space"
          }
        ]
      }
    ],
    technicalDrawings: [
      {
        url: "/images/school-projects/birdy-bitch.jpg",
        title: "Foundation Plan"
      }
    ]
  }
}

export const getProject = (slug: string): Project | undefined => {
  return projects[slug]
}

export const getAllProjects = (): Project[] => {
  return Object.values(projects);
} 