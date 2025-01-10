import { CheckCircle2 } from 'lucide-react'

interface SkillCategoryProps {
  title: string
  skills: {
    name: string
    proficiency?: number
  }[]
  isLastColumn?: boolean
  showCheckmarks?: boolean
  isCentered?: boolean
}

const SkillCategory = ({ title, skills, isLastColumn, showCheckmarks, isCentered }: SkillCategoryProps) => (
  <div className={`space-y-4 ${isLastColumn ? 'lg:text-right text-center' : 'text-center lg:text-left'}`}>
    <h3 className={`text-xl font-bold text-gray-800 ${isCentered ? 'text-center' : ''}`}>{title}</h3>
    <div className="space-y-3">
      {skills.map((skill, index) => (
        <div key={index} className={`relative flex ${isCentered ? 'justify-center' : isLastColumn ? 'lg:justify-end justify-center' : 'lg:justify-start justify-center'}`}>
          {isLastColumn ? (
            // Right column layout
            <div className="flex items-center gap-6 lg:flex-row flex-row-reverse">
              <span className="text-gray-600 lg:text-right text-left w-56 whitespace-nowrap lg:pr-2 pl-2">{skill.name}</span>
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
            </div>
          ) : isCentered ? (
            // Center column layout
            <div className="flex items-center gap-4">
              <span className="text-gray-600 w-32 whitespace-nowrap">{skill.name}</span>
              {skill.proficiency && (
                <div className="w-32 h-2 bg-gray-200 rounded-full">
                  <div 
                    className="h-full bg-accent rounded-full"
                    style={{ width: `${(skill.proficiency / 10) * 100}%` }}
                  />
                </div>
              )}
            </div>
          ) : (
            // Left column layout
            <div className="flex items-center gap-6">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-gray-600 w-56 whitespace-nowrap pl-2">{skill.name}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
)

export default function Skills() {
  const skillCategories = [
    {
      title: "Technical Skills",
      skills: [
        { name: "V-Ray Rendering" },
        { name: "Enscape Visualization" },
        { name: "Revit Rendering" },
        { name: "Custom Millwork Design" },
        { name: "3D Printing" },
        { name: "CNC Work" }
      ]
    },
    {
      title: "Software Proficiency",
      skills: [
        { name: "Revit", proficiency: 9 },
        { name: "Rhino", proficiency: 8 },
        { name: "Adobe Suite", proficiency: 8 },
        { name: "AutoCAD", proficiency: 5 }
      ]
    },
    {
      title: "Professional Skills",
      skills: [
        { name: "Project Management" },
        { name: "Construction Documentation" },
        { name: "Client Coordination" },
        { name: "Technical Writing" },
        { name: "Presentation Development" },
        { name: "Permitting Documentation" }
      ]
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Combining technical proficiency with practical experience to deliver exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              skills={category.skills}
              isLastColumn={index === skillCategories.length - 1}
              showCheckmarks={index !== 1}
              isCentered={index === 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
} 