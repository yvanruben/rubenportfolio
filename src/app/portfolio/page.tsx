import { CASE_STUDIES } from "@/data/caseStudies";
import ProjectCard from "@/components/ProjectCard";
<<<<<<< HEAD
=======
import CampaignsSection from "@/components/CampaignsSection";
>>>>>>> ec561a8 (first commit)

export const metadata = {
  title: "Portfolio | Case Studies",
};

export default function PortfolioPage() {
  return (
<<<<<<< HEAD
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
=======
    <main className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
>>>>>>> ec561a8 (first commit)
      <h1 className="text-4xl font-bold text-white mb-8">Portfolio</h1>
      <p className="text-gray-400 mb-12">
        A curated selection of recent work and case studies.
      </p>

<<<<<<< HEAD
=======
      {/* Case studies grid */}
>>>>>>> ec561a8 (first commit)
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {CASE_STUDIES.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
<<<<<<< HEAD
    </div>
=======

      {/* Campaigns & Newsletters */}
      <CampaignsSection />
    </main>
>>>>>>> ec561a8 (first commit)
  );
}
