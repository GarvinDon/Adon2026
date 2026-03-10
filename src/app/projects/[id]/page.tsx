import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 py-4">
        <div className="container mx-auto px-4">
          <Link href="/#projects" className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
                 <span className="inline-block px-3 py-1 bg-blue-50 text-primary text-xs font-semibold rounded-full">
                    {project.company}
                </span>
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full">
                    {project.period}
                </span>
            </div>
           
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">{project.projectName || project.title}</h1>
            {project.slogan && (
              <p className="text-2xl text-gray-500 font-medium mb-6">{project.slogan}</p>
            )}
            <p className="text-xl text-gray-600 font-light leading-relaxed border-l-4 border-primary pl-4">{project.role}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Key Result</h3>
                <p className="text-lg font-bold text-gray-900">{project.result}</p>
            </div>
             <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Skills Used</h3>
                <div className="flex flex-wrap gap-2">
                    {project.skills.map(skill => (
                        <span key={skill} className="px-2 py-1 bg-gray-50 rounded-md text-xs font-medium text-gray-600 border border-gray-100">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>

        <div className="prose prose-lg prose-blue max-w-none text-gray-600">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
            <p className="mb-8">{project.description}</p>
            
            {project.pdfPath && (
              <div className="my-12">
                <div className="w-full h-[800px] border border-gray-200 rounded-2xl overflow-hidden shadow-sm bg-gray-50">
                  <iframe 
                    src={`${project.pdfPath}#toolbar=0&navpanes=0&scrollbar=0`}
                    className="w-full h-full"
                    title={`${project.projectName} Case Study PDF`}
                  />
                </div>
                <p className="text-center text-sm text-gray-400 mt-4">
                    If the PDF doesn't load, you can <a href={project.pdfPath} className="underline hover:text-primary">download it here</a>.
                </p>
              </div>
            )}

            {!project.pdfPath && (
              <div className="my-12 p-12 bg-gray-50 rounded-2xl flex flex-col items-center justify-center text-center border-2 border-dashed border-gray-200">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mb-4 animate-pulse" />
                  <p className="text-gray-400 font-medium">Project Detail Content & Visuals Placeholder</p>
                  <p className="text-sm text-gray-400 mt-2">Screenshots, wireframes, and process diagrams would go here.</p>
              </div>
            )}
        </div>
      </main>
    </div>
  );
}
