// src/data/projects.ts

export type Project = {
  id: number;
  title: string;
  type: "Campaign" | "Newsletter" | "Website";
  image: string;
  description: string;
  longDescription: string;
  stack: string;
};


export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "The West — Editorial Newsletter",
    type: "Newsletter",
    description:
      "Monthly editorial email highlighting events, culture, and developments across Mauritius’ West Coast.",
    longDescription:
      "An editorial-style newsletter designed to inform and engage audiences through clear content hierarchy, strong imagery, and mobile-first readability.",
    image: "/img/newsletter-thewest.webp",
    stack: "Email Design · Content Strategy · Mailchimp",
  },
  {
    id: 2,
    title: "OXO — Luxury Brand Newsletter",
    type: "Campaign",
    description:
      "Emotion-driven luxury newsletter showcasing hospitality branding and campaign storytelling.",
    longDescription:
      "This campaign focuses on emotional design and luxury storytelling, combining strong visuals with refined typography.",
    image: "/img/newsletter-oxo.webp",
    stack: "Luxury Branding · Storytelling · Email Design",
  },
  {
    id: 3,
    title: "WIN - Free meal for two",
    type: "Campaign",
    description:
      "Social media campaign supported by a custom landing page allowing users to upload purchase receipts for a lucky draw, driving a 20% increase in sales and new email subscriptions.",
    longDescription:
      "Digital campaign run on Instagram and TikTok, supported by a custom landing page where users uploaded purchase receipts (minimum Rs 1000) to enter a lucky draw.The landing page handled receipt uploads, generated a unique entry number,calculate number of entry according to amount and sent email confirmations after successful submission.The campaign resulted in a 20% increase in sales and new email subscriptions.",
    image: "/img/campaign-mdt.webp",
    stack: "Campaign Strategy · Facebook & instagram post · Landing page ",
  },
  {
    id: 4,
    title: "OXO — Luxury Brand Newsletter",
    type: "Newsletter",
    description:
      "Emotion-driven luxury newsletter showcasing hospitality branding and campaign storytelling.",
    longDescription:
      "This campaign focuses on emotional design and luxury storytelling, combining strong visuals with refined typography."
      ,


    image: "/img/newsletter-oxo.webp",
    stack: "Email Design · Content Strategy · Mailchimp",
  },

  {
    id: 5,
    title: "MTPA — Awareness Brand Newsletter",
    type: "Newsletter",
    description:
      "Emotion-driven luxury newsletter showcasing hospitality branding and campaign storytelling.",
    longDescription:
      "This campaign focuses on emotional design and luxury storytelling, combining strong visuals with refined typography."
      ,


    image: "/img/mtpa-newsletter.webp",
    stack: "Email Design · Content Strategy",
  },
];
