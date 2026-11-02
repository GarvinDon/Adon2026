import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { requirePortfolioAccess } from "@/lib/access";
import ProjectImageViewer from "@/components/ProjectImageViewer";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  await requirePortfolioAccess(`/projects/${encodeURIComponent(id)}`);
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

        {!project.caseStudy && <div className="grid md:grid-cols-2 gap-6 mb-16">
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
        </div>}

        <div className="prose prose-lg prose-blue max-w-none text-gray-600">
            {project.caseStudy ? (
              <div className="space-y-12">
                <section aria-labelledby="case-problem">
                  <p className="mb-3 text-xs font-semibold tracking-widest text-primary">01 / 问题背景</p>
                  <h2 id="case-problem" className="mb-4 text-2xl font-bold text-gray-900">让报错问题在上线前被发现</h2>
                  <p className="leading-8">{project.caseStudy.problem}</p>
                </section>
                <section aria-labelledby="case-contribution" className="rounded-2xl border border-gray-100 bg-gray-50 p-6 sm:p-8">
                  <p className="mb-3 text-xs font-semibold tracking-widest text-primary">02 / 我的工作</p>
                  <h2 id="case-contribution" className="mb-5 text-2xl font-bold text-gray-900">从规则梳理到能力封装</h2>
                  <ul className="list-disc space-y-3 pl-5 leading-7 marker:text-primary">
                    {project.caseStudy.contribution.map(item => <li key={item}>{item}</li>)}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.skills.map(skill => <span key={skill} className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-600">{skill}</span>)}
                  </div>
                </section>
                <section aria-labelledby="case-decisions">
                  <p className="mb-3 text-xs font-semibold tracking-widest text-primary">03 / 关键决策</p>
                  <h2 id="case-decisions" className="mb-6 text-2xl font-bold text-gray-900">为什么这样设计</h2>
                  <div className="space-y-6">
                    {project.caseStudy.decisions.map((decision, index) => (
                      <div key={decision.title} className="flex gap-4">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-semibold text-primary" aria-hidden="true">{index + 1}</span>
                        <div><h3 className="mb-2 font-semibold text-gray-900">{decision.title}</h3><p className="text-sm leading-7">{decision.description}</p></div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            ) : (
              <><h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2><p className="mb-8">{project.description}</p></>
            )}
            
            {project.pdfPath && (
              <div className="my-12">
                {project.caseStudy && <><p className="mb-3 text-xs font-semibold tracking-widest text-primary">04 / 方案总览</p><h2 className="mb-5 text-2xl font-bold text-gray-900">完整方案，一页看清</h2></>}
                  {project.pdfPreview ? (
                    <ProjectImageViewer {...project.pdfPreview} title={project.projectName || project.title} />
                  ) : (
                    <div className="w-full h-[800px] border border-gray-200 rounded-2xl overflow-hidden shadow-sm bg-gray-50">
                    <iframe
                      src={`${project.pdfPath}#toolbar=0&navpanes=0&scrollbar=0`}
                      className="w-full h-full"
                      title={`${project.projectName} Case Study PDF`}
                    />
                    </div>
                  )}
                <p className="text-center text-sm text-gray-400 mt-4">
                    {project.pdfPreview ? (
                      <a href={project.pdfPath} className="underline hover:text-primary">查看 / 下载原版 PDF</a>
                    ) : (
                      <>If the PDF doesn't load, you can <a href={project.pdfPath} className="underline hover:text-primary">download it here</a>.</>
                    )}
                </p>
              </div>
            )}

            {project.caseStudy && (
              <section aria-labelledby="case-results" className="my-12">
                <p className="mb-3 text-xs font-semibold tracking-widest text-primary">05 / 结果与验证</p>
                <h2 id="case-results" className="mb-6 text-2xl font-bold text-gray-900">在真实功能范围内验证效果</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {project.caseStudy.metrics.map(metric => (
                    <div key={metric.label} className="rounded-2xl border border-blue-100 bg-blue-50/50 p-6">
                      <p className="text-4xl font-bold tracking-tight text-primary">{metric.value}</p>
                      <p className="mt-3 text-sm text-gray-600">{metric.label}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 border-l-2 border-gray-200 pl-4 text-sm leading-7">
                  <h3 className="font-semibold text-gray-900">测试范围与统计方式</h3>
                  <p>{project.caseStudy.validation.scope}</p>
                  <p>{project.caseStudy.validation.method}</p>
                </div>
              </section>
            )}

            {!project.pdfPath && (
              <div className="my-12 p-12 bg-gray-50 rounded-2xl flex flex-col items-center justify-center text-center border-2 border-dashed border-gray-200">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mb-4 animate-pulse" />
                  <p className="text-gray-400 font-medium">Project Detail Content & Visuals Placeholder</p>
                  <p className="text-sm text-gray-400 mt-2">Screenshots, wireframes, and process diagrams would go here.</p>
              </div>
            )}
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-gray-100 pt-8">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-primary"><ArrowLeft size={16} />返回全部项目</Link>
          <Link href="/#contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-blue-600">聊聊项目<ArrowUpRight size={16} /></Link>
        </div>
      </main>
    </div>
  );
}
