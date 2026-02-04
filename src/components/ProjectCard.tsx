"use client";

import Image from "next/image";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
  onClick: () => void;
};

export default function ProjectCard({ project, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-left cursor-pointer overflow-hidden rounded-xl bg-[#0b1220] border border-white/10 hover:scale-[1.02] transition sm:pb-2"
    >
      <div className="relative w-full h-48">
        <Image
          src={project.image}         // ✅ no prefix
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className="p-4">
        <span className="text-xs text-blue-400">{project.type}</span>
        <h3 className="text-lg font-semibold text-white mt-1">{project.title}</h3>
        <p className="text-sm text-gray-400 mt-2 line-clamp-2">
          {project.description}
        </p>
      </div>
    </button>
  );
}
