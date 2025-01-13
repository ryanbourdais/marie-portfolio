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
  imageGroups: ImageGroup[]  // Replace images with imageGroups
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
        content: "Complete architectural documentation including floor plans, elevations, and detailed drawings for a residential renovation in New Orleans."
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
            url: "/projects/joseph_st/Joseph_St_PDF_page_1.jpg",
            alt: "Project Cover",
            caption: "Project Overview"
          },
          {
            url: "/projects/joseph_st/Joseph_St_PDF_page_2.jpg",
            alt: "Floor Plans",
            caption: "Detailed Floor Plans"
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
        layout: 'row',
        images: [
          {
            url: "/projects/hillary_st/01 renders/UPDATED KITCHEN EDIT.jpeg",
            alt: "Updated Kitchen",
            caption: "Modern Kitchen Design"
          },
          {
            url: "/projects/hillary_st/01 renders/Foyer with trim work.jpeg",
            alt: "Foyer Design",
            caption: "Elegant Foyer with Custom Trim"
          },
          {
            url: "/projects/hillary_st/01 renders/Back yard over view 02 edited.jpeg",
            alt: "Backyard Overview",
            caption: "Landscaped Backyard Design"
          }
        ]
      }
    ],
    pdf: {
      url: "/projects/hillary_st/Hillary_st.pdf",
      title: "Hillary Street Project Documentation"
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
            url: "/projects/calhoun_st/01 renders/UPDATED KITCHEN EDIT.jpeg",
            alt: "Kitchen Design",
            caption: "Updated Kitchen Layout"
          },
          {
            url: "/projects/calhoun_st/01 renders/Foyer with trim work.jpeg",
            alt: "Foyer Design",
            caption: "Classic Foyer with Modern Touch"
          }
        ]
      }
    ],
    pdf: {
      url: "/projects/calhoun_st/calhoun_stf.pdf",
      title: "Calhoun Street Project Documentation"
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
  },
  'boutique-retail': {
    id: 'boutique-retail',
    title: "Boutique Retail Space",
    category: "Commercial",
    location: "Vancouver, BC",
    year: "2023",
    description: "A modern retail space design that maximizes product display while maintaining an inviting atmosphere.",
    sections: [
      {
        title: "Challenge",
        content: "Creating an efficient flow pattern while maximizing display space in a narrow storefront."
      },
      {
        title: "Solution",
        content: "Innovative layout design with modular display units and strategic lighting placement to create distinct zones."
      }
    ],
    services: [
      "Space planning",
      "Interior elevations",
      "Lighting design",
      "Permit drawings"
    ],
    imageGroups: [
      {
        layout: 'row',
        images: [
          {
            url: "https://images.unsplash.com/photo-1604014237800-1c9102c219da",
            alt: "Retail Space Interior",
            caption: "Modern retail interior with optimal flow"
          },
          {
            url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
            alt: "Display Area",
            caption: "Custom display solutions"
          }
        ]
      }
    ]
  },
  'heritage-renovation': {
    id: 'heritage-renovation',
    title: "Heritage Home Renovation",
    category: "Residential",
    location: "Montreal, QC",
    year: "2023",
    description: "Careful renovation of a 1920s heritage home, preserving historical elements while adding modern amenities.",
    sections: [
      {
        title: "Challenge",
        content: "Integrating modern systems while preserving historical architectural details."
      },
      {
        title: "Solution",
        content: "Detailed documentation of heritage elements and creative solutions for modern integration."
      }
    ],
    services: [
      "As-built documentation",
      "Heritage conservation plans",
      "Renovation drawings",
      "Building permit applications"
    ],
    imageGroups: [
      {
        layout: 'row',
        images: [
          {
            url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
            alt: "Heritage Home Exterior",
            caption: "Preserved historical facade"
          },
          {
            url: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc",
            alt: "Interior Details",
            caption: "Original moldings and modern updates"
          }
        ]
      }
    ]
  },
  'office-renovation': {
    id: 'office-renovation',
    title: "Corporate Office Renovation",
    category: "Commercial",
    location: "Calgary, AB",
    year: "2023",
    description: "Modern office space redesign focusing on collaboration and flexibility.",
    sections: [
      {
        title: "Challenge",
        content: "Converting traditional office layout to a hybrid-friendly workspace."
      },
      {
        title: "Solution",
        content: "Flexible floor plan with modular furniture systems and tech-enabled meeting spaces."
      }
    ],
    services: [
      "Space planning",
      "Construction documents",
      "Furniture layouts",
      "Technical specifications"
    ],
    imageGroups: [
      {
        layout: 'row',
        images: [
          {
            url: "https://images.unsplash.com/photo-1497366216548-37526070297c",
            alt: "Office Interior",
            caption: "Modern collaborative workspace"
          },
          {
            url: "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
            alt: "Meeting Area",
            caption: "Tech-enabled meeting space"
          }
        ]
      }
    ]
  },
  'technical-documentation': {
    id: 'technical-documentation',
    title: "Industrial Facility Documentation",
    category: "Technical Documentation",
    location: "Edmonton, AB",
    year: "2023",
    description: "Comprehensive as-built documentation for an existing manufacturing facility.",
    sections: [
      {
        title: "Challenge",
        content: "Accurate measurement and documentation of complex industrial systems."
      },
      {
        title: "Solution",
        content: "Detailed technical drawings with comprehensive annotations and specifications."
      }
    ],
    services: [
      "As-built documentation",
      "System diagrams",
      "Technical specifications",
      "Code compliance review"
    ],
    imageGroups: [
      {
        layout: 'row',
        images: [
          {
            url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
            alt: "Technical Drawing",
            caption: "Detailed technical documentation"
          },
          {
            url: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0",
            alt: "Facility Layout",
            caption: "Comprehensive facility documentation"
          }
        ]
      }
    ]
  },
  'sustainable-home': {
    id: 'sustainable-home',
    title: "Net-Zero Home Design",
    category: "Residential",
    location: "Victoria, BC",
    year: "2024",
    description: "Energy-efficient home design incorporating sustainable materials and passive solar principles.",
    sections: [
      {
        title: "Challenge",
        content: "Balancing energy efficiency with aesthetic appeal and budget constraints."
      },
      {
        title: "Solution",
        content: "Innovative use of sustainable materials and smart home technology integration."
      }
    ],
    services: [
      "Sustainable design documentation",
      "Energy modeling coordination",
      "Construction documents",
      "Green building certification"
    ],
    imageGroups: [
      {
        layout: 'row',
        images: [
          {
            url: "https://images.unsplash.com/photo-1523217582562-09d0def993a6",
            alt: "Sustainable Home",
            caption: "Eco-friendly home design"
          },
          {
            url: "https://images.unsplash.com/photo-1600585152915-d208bec867a1",
            alt: "Solar Integration",
            caption: "Integrated solar solutions"
          }
        ]
      }
    ],
    technicalDrawings: [
      {
        url: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8",
        title: "Floor Plan - Ground Level"
      },
      {
        url: "https://images.unsplash.com/photo-1586181567730-7c6613c49217",
        title: "Elevation - Front View"
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