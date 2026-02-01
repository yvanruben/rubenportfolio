// src/components/WebsiteProjectCard.tsx
"use client";

type WebsiteProject = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  url: string;
  logo?: string;
};

type Props = {
  project: WebsiteProject;
};

export default function WebsiteProjectCard({ project }: Props) {
  return (
    <div className="overflow-hidden rounded-xl bg-[#0b1220] border border-white/10 hover:scale-[1.02] transition">
      {/* Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-5">
        <span className="text-xs text-blue-400">
          {project.category}
        </span>

        <h3 className="text-lg font-semibold text-white mt-1">
          {project.title}
        </h3>

        <p className="text-sm text-gray-400 mt-2 leading-relaxed">
          {project.description}
        </p>

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-sm font-medium text-blue-400 hover:text-blue-300 transition"
        >
          Visit website →
        </a>
      </div>
    </div>
  );
}
