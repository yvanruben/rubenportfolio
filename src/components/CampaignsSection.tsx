"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import { PROJECTS, type Project } from "@/data/projects";

export default function CampaignsSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const campaignProjects = useMemo(
    () => PROJECTS.filter((p) => p.type === "Campaign"),
    []
  );

  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeProject]);

  return (
    <section className="mt-30">
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-bold text-white mb-5">Campaigns</h2>
        <p className="max-w-3xl mx-auto text-gray-400">
          Digital campaigns focused on audience engagement, lead generation, and
          sales growth.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {campaignProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setActiveProject(project)}
            />
          ))}
        </div>
      </motion.div>

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
