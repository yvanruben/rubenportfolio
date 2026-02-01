// src/data/caseStudies.ts
import type { Project } from "@/data/projects";

export const CASE_STUDIES: Project[] = [
  {
    id: 101,
    title: "Constance Group Website",
    type: "Website",
    image: "/img/constance.webp",
    description:
      "Corporate website refresh focused on structure, clarity, and strong brand presentation.",
    longDescription:
      "A corporate website built to clearly present a diversified group, improve content discoverability, and support SEO best practices.",
    stack: "WordPress · HTML/CSS · JavaScript",
  },
  {
    id: 102,
    title: "IBL Group Corporate Site",
    type: "Website",
    image: "/img/ibl.webp",
    description:
      "Large-scale corporate site showcasing multiple business clusters and investor information.",
    longDescription:
      "A multi-section corporate site designed to scale across business clusters, with clean navigation and reusable components.",
    stack: "WordPress · PHP · JavaScript",
  },
  {
    id: 103,
    title: "Maison de Thé Website",
    type: "Website",
    image: "/img/maison-de-the.webp",
    description:
      "Brand-led website highlighting storytelling, products, and customer experience.",
    longDescription:
      "A brand-focused web experience featuring product discovery and editorial storytelling with responsive design.",
    stack: "WordPress · HTML/CSS · JavaScript",
  },
];
