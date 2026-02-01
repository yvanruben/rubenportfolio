<<<<<<< HEAD
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
    project: {
        id: number;
        title: string;
        category: string;
        url: string;
        description: string;
        imageSeed: string;
    };
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-800 rounded-xl overflow-hidden hover-card border border-slate-700 flex flex-col h-full group"
        >
            <div className="relative h-48 overflow-hidden">
                <img 
                    src={`https://picsum.photos/seed/${project.imageSeed}/600/400`} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-2 right-2 bg-slate-900/80 text-xs font-bold text-blue-300 px-2 py-1 rounded">
                    {project.category}
                </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 flex-1">{project.description}</p>
                <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium text-sm mt-auto group/link"
                >
                    Visit Website <ArrowRight size={16} className="ml-1 transition-transform group-hover/link:translate-x-1" />
                </a>
            </div>
        </motion.div>
    );
}
=======
"use client";

import { Project } from "@/data/projects";

type Props = {
  project: Project;
  onClick: () => void;
};

export default function ProjectCard({ project, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer overflow-hidden rounded-xl bg-[#0b1220] border border-white/10 hover:scale-[1.02] transition"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <span className="text-xs text-blue-400">{project.type}</span>

        <h3 className="text-lg font-semibold text-white mt-1">
          {project.title}
        </h3>

        <p className="text-sm text-gray-400 mt-2 line-clamp-2">
          {project.description}
        </p>
      </div>
    </div>
  );
}
>>>>>>> ec561a8 (first commit)
