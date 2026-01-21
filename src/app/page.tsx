"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { CASE_STUDIES } from "@/data/caseStudies";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const searchParams = useSearchParams();
  const query = (searchParams.get("q") ?? "").trim();

  const filteredProjects = useMemo(() => {
    if (!query) return CASE_STUDIES;
    const q = query.toLowerCase();
    return CASE_STUDIES.filter(
      (p) =>
        p.title.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 sm:pt-40 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6"
        >
          Building Digital <span className="text-blue-500">Masterpieces</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto mb-10"
        >
          A modern Web Developer specializing in high-performance React and Next.js applications.
          Transforming complex problems into elegant user experiences.
        </motion.p>
        <div className="flex justify-center gap-4">
          <a
            href="/contact"
            className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all shadow-lg hover:shadow-blue-500/25"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-3 rounded-full border border-slate-600 hover:border-slate-400 text-gray-300 hover:text-white font-semibold transition-all inline-flex items-center"
          >
            View Work <ArrowRight className="ml-2" size={18} />
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-white">Featured Case Studies</h2>
              {query && (
                <p className="text-blue-400 mt-2">Search results for &quot;{query}&quot;</p>
              )}
            </div>
            <span className="text-gray-500 text-sm hidden sm:block">
              Showing {filteredProjects.length} projects
            </span>
          </div>

          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-slate-800/50 rounded-2xl border border-slate-700">
              <p className="text-gray-400 text-lg">
                No case studies found matching &quot;{query}&quot;.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
