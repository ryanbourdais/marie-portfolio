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

export interface Project {
  id: string
  title: string
  category: string
  location: string
  year: string
  description: string
  sections?: ProjectSection[]
  services: string[]
  collaborators?: Collaborator[]
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
    title: "Joseph Street",
    category: "Residential",
    location: "New Orleans, LA",
    year: "2024",
    description: "This project features a master suite conversion on the first floor, complemented by a new rear deck and pool. The design includes a front mudroom addition, an updated facade, and a spacious storage shed at the rear, all crafted to enhance both style and functionality.",
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
          }
        ]
      },
      {
        layout: 'stack',
        images: [
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
    pdf: {
      url: "/projects/joseph_st/joseph_st.pdf",
      title: "Joseph Street Project Documentation"
    }
  },
  'cuddihy-st': {
    id: 'cuddihy-st',
    title: "Cuddihy Street",
    category: "Residential",
    location: "Metairie, LA",
    year: "2024",
    description: "This project features a stunning glass box addition over an existing roof, creating a master suite with a luxurious bathroom and expansive closet. The design includes a new laundry room, seamlessly integrated to improve the home's overall utility. The glass box serves as a focal point, offering breathtaking views of the site's beautiful garden.",
    services: [
      "Renovation planning",
      "Interior design",
      "3D visualization",
      "Construction documentation"
    ],
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
          }
        ]
      },
      {
        layout: 'stack',
        images: [
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
    pdf: {
      url: "/projects/cuddihy_st/cuddihy_st.pdf",
      title: "Cuddihy Street Renovation Documentation"
    },
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
    description: "This elegant renovation transformed a double home into a spacious single residence with 8 bedrooms, ideal for student living near Yulman Stadium. The project features a modern kitchen with Spanish design elements, luxurious bathrooms, and a cozy common room with porch access. A thoughtful 5-foot rear addition enhances the living space, providing ample room for comfort and style.",
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
          }
        ]
      },
      {
        layout: 'stack',
        images: [
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
    ],
    pdf: {
      url: "/projects/calhoun_st/calhoun_st.pdf",
      title: "Calhoun Street Project Documentation"
    }
  },
  'hillary-st': {
    id: 'hillary-st',
    title: "Hillary Street",
    category: "Residential",
    location: "New Orleans, LA",
    year: "2024",
    description: "This project transformed a duplex into a spacious single-family home, featuring a large master bedroom and guest room on the first floor, with an open-concept living area enhanced by a small addition. The second floor includes a new office space, a master bedroom with a walk-in closet, and two large bedrooms connected by a Jack and Jill bathroom.",
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
          }
        ]
      },
      {
        layout: 'stack',
        images: [
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
    ],
    pdf: {
      url: "/projects/hillary_st/Hillary_st.pdf",
      title: "Hillary Street Project Documentation"
    }
  },
  'burdette-st': {
    id: 'burdette-st',
    title: "Burdette Street",
    category: "Commercial",
    location: "New Orleans, LA",
    year: "2024",
    description: "This innovative community center utilizes prefabricated structures tailored to city standards, fostering neighborhood engagement. The site features vibrant community gardens and a spacious circulation deck adorned with three majestic trees. Designed for versatility, it serves as a hub for local activities and gatherings.",
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
          }
        ]
      },
      {
        layout: 'stack',
        images: [
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
    pdf: {
      url: "/projects/burdette_st/burdette_st.pdf",
      title: "Burdette Street Project Documentation"
    }
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
    description: "A comprehensive residential renovation project featuring modern design elements while maintaining the home's classic character.",
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
          }
        ]
      },
      {
        layout: 'stack',
        images: [
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
    pdf: {
      url: "/projects/aspen_st/aspen_st.pdf",
      title: "Aspen Street Project Documentation"
    }
  },
  'burgundy-st': {
    id: 'burgundy-st',
    title: "Burgundy Street",
    category: "Residential",
    location: "New Orleans, LA",
    year: "2024",
    description: "This unique property features a compact new construction home on a small lot, designed with an open shotgun concept for the living and kitchen areas. It includes two bedrooms and boasts a distinctive front and rear decking system. The renovation blends traditional New Orleans architecture with modern amenities.",
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
          }
        ]
      },
      {
        layout: 'stack',
        images: [
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
    pdf: {
      url: "/projects/burgundy_st/burgundy_st.pdf",
      title: "Burgundy Street Project Documentation"
    },
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

export const getProject = (slug: string): Project | undefined => {
  return projects[slug]
}

export const getAllProjects = (): Project[] => {
  return Object.values(projects);
} 
 