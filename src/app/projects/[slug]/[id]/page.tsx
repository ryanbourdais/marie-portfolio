import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import ProjectHero from '@/app/components/ProjectHero';
import ProjectContent from '@/app/components/ProjectContent';
import ProjectGallery from '@/app/components/ProjectGallery';
import dynamic from 'next/dynamic';

// Dynamically import PDFViewer with no SSR since it uses browser APIs
const PDFViewer = dynamic(() => import('@/app/components/pdf/PDFViewer'), {
  ssr: false,
});

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

// Generate static paths for all projects
export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
    id: slug, // since we're using the same value for both params
  }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects[params.slug];

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <ProjectHero project={project} />
      
      <div className="container mx-auto px-4 py-12">
        <ProjectContent project={project} />
        
        {project.pdf?.url && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Project Documentation</h2>
            <PDFViewer 
              url={project.pdf.url} 
              height="800px"
              className="w-full max-w-6xl mx-auto"
            />
          </div>
        )}

        <ProjectGallery project={project} />
      </div>
    </div>
  );
} 