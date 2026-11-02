"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/projects/${project.id}`} className="group block h-full rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
                <div className="h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 flex flex-col">
                  <div className="aspect-video bg-[#071228] relative overflow-hidden">
                     {project.image ? (
                        <img 
                          src={project.image} 
                          alt={project.projectName || project.title} 
                          className="w-full h-full object-contain"
                          loading="lazy"
                          decoding="async"
                        />
                     ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-100 group-hover:bg-gray-200 transition-colors">
                           Project Preview
                        </div>
                     )}
                     <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full p-2 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity z-10">
                        <ArrowUpRight className="w-5 h-5 text-primary" />
                     </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-medium px-2 py-1 bg-blue-50 text-blue-600 rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                      {project.projectName || project.title}
                    </h3>
                    
                    <p className="text-sm leading-6 text-gray-500 mb-6">
                      {project.summary}
                    </p>

                    <div className="mt-auto pt-4 border-t border-gray-100">
                        <p className="mb-2 text-xs text-gray-400">核心成果</p>
                        <p className="text-sm font-semibold leading-6 text-primary">
                            {project.cardResult}
                        </p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
