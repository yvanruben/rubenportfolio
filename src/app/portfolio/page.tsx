"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import { PROJECTS, type Project } from "@/data/projects";

export default function PortfolioPage() {
  const searchParams = useSearchParams();
  const query = (searchParams.get("q") ?? "").trim().toLowerCase();

  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (!query) return PROJECTS;

    return PROJECTS.filter(
      (p) =>
        p.title.toLowerCase().includes(query) ||
        p.type.toLowerCase().includes(query)
    );
  }, [query]);

  useEffect(() => {
    document.body.style.overflow = activeProject ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeProject]);

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 text-center"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Portfolio</h1>

          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of websites, campaigns, and newsletters.
          </p>

          {query && (
            <p className="text-blue-400 mt-4">
              Search results for &quot;{query}&quot;
            </p>
          )}
        </motion.div>

        {filteredProjects.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setActiveProject(project)}
              />
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-20 bg-slate-800/50 rounded-2xl border border-slate-700">
            <p className="text-gray-400 text-lg">
              No projects found matching &quot;{query}&quot;.
            </p>
          </div>
        )}

        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      </div>
    </div>
  );
}
