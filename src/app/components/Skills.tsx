import { CheckCircle2 } from 'lucide-react'

interface SkillCategoryProps {
  title: string
  skills: {
    name: string
    proficiency?: number
  }[]
}

const SkillCategory = ({ title, skills }: SkillCategoryProps) => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-gray-800">{title}</h3>
    <div className="space-y-3">
      {skills.map((skill, index) => (
        <div key={index} className="flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
          <span className="text-gray-600">{skill.name}</span>
          {skill.proficiency && (
            <div className="flex-1 h-2 bg-gray-200 rounded-full ml-2">
              <div 
                className="h-full bg-accent rounded-full"
                style={{ width: `${skill.proficiency}%` }}
              />
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
      title: "Software Proficiency",
      skills: [
        { name: "AutoCAD", proficiency: 95 },
        { name: "Revit", proficiency: 90 },
        { name: "SketchUp", proficiency: 85 },
        { name: "Adobe Creative Suite", proficiency: 80 }
      ]
    },
    {
      title: "Technical Skills",
      skills: [
        { name: "Construction Documentation" },
        { name: "Building Code Analysis" },
        { name: "Site Planning" },
        { name: "3D Modeling" }
      ]
    },
    {
      title: "Professional Expertise",
      skills: [
        { name: "Residential Design" },
        { name: "Commercial Planning" },
        { name: "Permit Documentation" },
        { name: "As-Built Documentation" }
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  )
} 