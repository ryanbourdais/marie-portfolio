export interface Project {
  id: string
  title: string
  category: string
  location: string
  year: string
  description: string
  challenge: string
  solution: string
  services: string[]
  images: {
    url: string
    alt: string
    caption?: string
  }[]
  technicalDrawings?: {
    url: string
    title: string
  }[]
}

export const projects: Record<string, Project> = {
  'modern-family-home': {
    id: 'modern-family-home',
    title: "Modern Family Home",
    category: "Residential",
    location: "Toronto, ON",
    year: "2023",
    description: `
      A custom home design featuring sustainable elements and innovative space utilization for a growing family. 
      This project showcases modern architectural drafting techniques while maintaining practical living spaces.
    `,
    challenge: `
      The main challenge was to maximize living space on a compact urban lot while ensuring 
      natural light and maintaining privacy from neighboring properties.
    `,
    solution: `
      By implementing strategic window placement and an open-concept design, we created bright, 
      flowing spaces that feel larger than their actual square footage. The final drawings 
      included detailed specifications for energy-efficient materials and smart home integration.
    `,
    services: [
      "Complete architectural drawings",
      "Building permit documentation",
      "3D visualization",
      "Construction documentation"
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        alt: "Modern Family Home Exterior",
        caption: "Front elevation showing modern architectural elements"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
        alt: "Living Room Design",
        caption: "Open concept living space with natural light"
      },
      {
        url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
        alt: "Kitchen Layout",
        caption: "Modern kitchen with efficient workflow design"
      }
    ],
    technicalDrawings: [
      {
        url: "https://images.unsplash.com/photo-1574359411659-15573a27fd0c",
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
    challenge: "Creating an efficient flow pattern while maximizing display space in a narrow storefront.",
    solution: "Innovative layout design with modular display units and strategic lighting placement to create distinct zones.",
    services: [
      "Space planning",
      "Interior elevations",
      "Lighting design",
      "Permit drawings"
    ],
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
  },
  'heritage-renovation': {
    id: 'heritage-renovation',
    title: "Heritage Home Renovation",
    category: "Residential",
    location: "Montreal, QC",
    year: "2023",
    description: "Careful renovation of a 1920s heritage home, preserving historical elements while adding modern amenities.",
    challenge: "Integrating modern systems while preserving historical architectural details.",
    solution: "Detailed documentation of heritage elements and creative solutions for modern integration.",
    services: [
      "As-built documentation",
      "Heritage conservation plans",
      "Renovation drawings",
      "Building permit applications"
    ],
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
  },
  'office-renovation': {
    id: 'office-renovation',
    title: "Corporate Office Renovation",
    category: "Commercial",
    location: "Calgary, AB",
    year: "2023",
    description: "Modern office space redesign focusing on collaboration and flexibility.",
    challenge: "Converting traditional office layout to a hybrid-friendly workspace.",
    solution: "Flexible floor plan with modular furniture systems and tech-enabled meeting spaces.",
    services: [
      "Space planning",
      "Construction documents",
      "Furniture layouts",
      "Technical specifications"
    ],
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
  },
  'technical-documentation': {
    id: 'technical-documentation',
    title: "Industrial Facility Documentation",
    category: "Technical Documentation",
    location: "Edmonton, AB",
    year: "2023",
    description: "Comprehensive as-built documentation for an existing manufacturing facility.",
    challenge: "Accurate measurement and documentation of complex industrial systems.",
    solution: "Detailed technical drawings with comprehensive annotations and specifications.",
    services: [
      "As-built documentation",
      "System diagrams",
      "Technical specifications",
      "Code compliance review"
    ],
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
  },
  'sustainable-home': {
    id: 'sustainable-home',
    title: "Net-Zero Home Design",
    category: "Residential",
    location: "Victoria, BC",
    year: "2024",
    description: "Energy-efficient home design incorporating sustainable materials and passive solar principles.",
    challenge: "Balancing energy efficiency with aesthetic appeal and budget constraints.",
    solution: "Innovative use of sustainable materials and smart home technology integration.",
    services: [
      "Sustainable design documentation",
      "Energy modeling coordination",
      "Construction documents",
      "Green building certification"
    ],
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
  return Object.values(projects)
} 