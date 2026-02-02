"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import { PROJECTS, type Project } from "@/data/projects";

export default function PortfolioPage() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

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
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setActiveProject(project)}
            />
          ))}
        </motion.div>

        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      </div>
    </div>
  );
}
