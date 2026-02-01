// src/app/website/page.tsx
"use client";
import WebsiteProjectCard from "@/components/WebsiteProjectCard";
import { motion } from "framer-motion";


const websiteProjects = [
  {
    id: 1,
    title: "Constance Group",
    category: "Website",
    url: "http://constancegroup.com/",
    description:
      "Corporate website for a diversified group, focused on clear structure, strong branding, and content clarity.",
    image: "/img/constance.webp",
    logo: "/img/logos/constance-logo.png",
  },
  {
    id: 2,
    title: "IBL Group",
    category: "Website",
    url: "https://iblgroup.com/",
    description:
      "Large-scale corporate website designed to showcase business clusters, brand credibility, and investor information.",
    image: "/img/ibl.webp",
    logo: "/img/logos/ibl-logo.webp",
  },
  {
    id: 3,
    title: "Maison de Thé",
    category: "Website",
    url: "https://maisondethe.mu",
    description:
      "Brand-focused website highlighting products, storytelling, and customer experience for a premium tea in Mauritius.",
    image: "/img/maison-de-the.webp",
    logo: "/img/logos/maisondethe-logo.svg",
  },
  {
    id: 4,
    title: "Maurema",
    category: "Website",
    url: "https://maurema.mu",
    description:
      "Informational website built to present services clearly and support brand visibility online.",
    image: "/img/maurema.webp",
    logo: "/img/logos/maurema-logo.png",
  },
  {
    id: 5,
    title: "Bijou Residence",
    category: "Website",
    url: "https://bijoumauritius.com/",
    description:
      "Real estate website designed to showcase property offerings with a clean layout and intuitive navigation.",
    image: "/img/bijou-residence.webp",
    logo: "/img/logos/bijou-logo.webp",
  },
  {
    id: 6,
    title: "Oxo Hospitality",
    category: "Website",
    url: "https://oxo-hospitality.com/",
    description:
      "Brand landing page created to support product discovery and promotional campaigns.",
    image: "/img/oxohospitality.webp",
    logo: "/img/logos/oxo-logo.webp",
  },
  {
    id: 7,
    title: "St Aubin",
    category: "Website",
    url: "https://groupe-saintaubin.com/",
    description:
      "Corporate and lifestyle website presenting multiple activities, heritage content, and visitor information.",
    image: "/img/staubin.webp",
    logo: "/img/logos/st-aubin-logo.webp",
  },
  {
    id: 8,
    title: "High Tea",
    category: "Landing Page",
    url: "https://maisondethe.mu/hightea/",
    description:
      "Campaign landing page designed to promote a high tea experience and drive reservations.",
    image: "/img/high-tea.webp",
    logo: "/img/logos/maisondethe-logo.svg",
  },
  {
    id: 9,
    title: "Yves Rocher",
    category: "Landing Page",
    url: "https://yves-rocher.mu/",
    description:
      "Brand landing page created to support product discovery and promotional campaigns.",
    image: "/img/yves.jpg",
    logo: "/img/logos/yves-logo.webp",
  },
];



export default function WebsitePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-30 pb-20">
      <h1 className="text-4xl font-bold text-white text-center">
        Websites & Landing Pages
      </h1>

      <p className="text-slate-300 mt-4 pb-16 text-center max-w-2xl mx-auto text-gray-400">
        A selection of recent corporate websites and high-conversion landing
        pages built using WordPress, React and Next.js.
      </p>
  <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {websiteProjects.map((project) => (
          <WebsiteProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>

      </motion.div>
    </div>
  );
}
