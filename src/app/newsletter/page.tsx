"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import { PROJECTS, type Project } from "@/data/projects";

export default function NewsletterPage() {
  const newsletterProjects = useMemo(
    () => PROJECTS.filter((p) => p.type === "Newsletter"),
    []
  );

  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <h1 className="text-4xl font-bold text-white text-center">
          Newsletters
        </h1>

        <p className="text-slate-400 mt-4 text-center max-w-2xl mx-auto">
          A selection of email newsletters designed to increase engagement,
          conversions, and brand loyalty.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:gap-6 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-20">
            {newsletterProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setActiveProject(project)}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </>
  );
}
