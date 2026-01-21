import { CASE_STUDIES } from "@/data/caseStudies";
import ProjectCard from "@/components/ProjectCard";

export const metadata = {
  title: "Portfolio | Case Studies",
};

export default function PortfolioPage() {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-white mb-8">Portfolio</h1>
      <p className="text-gray-400 mb-12">
        A curated selection of recent work and case studies.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {CASE_STUDIES.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
