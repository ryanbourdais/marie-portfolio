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
    ]
  }
}

export const getProject = (slug: string): Project | undefined => {
  return projects[slug]
}

export const getAllProjects = (): Project[] => {
  return Object.values(projects)
} 