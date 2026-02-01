"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bckgrd-animation min-h-[calc(100vh-30px)] flex items-center justify-center">
        <div className="pt-32 pb-20 sm:pt-40 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:text-6xl text-4xl font-extrabold tracking-tight text-white mb-6"
          >
            Web Developer <br />
            <span className="text-blue-500">
              building modern websites, <br />
              campaigns and web applications
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 md:text-xl text-l text-gray-400 max-w-2xl mx-auto mb-10"
          >
            Web Developer | Wordpress | React & Next.js | Frontend-focused with PHP
            & MySQL experience
          </motion.p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-center">
            <a
              href="/contact"
              className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all text-center"
            >
              Get In Touch
            </a>

            <a
              href="#projects"
              className="px-8 py-3 rounded-full border border-slate-600 text-gray-300 inline-flex items-center justify-center text-center"
            >
              View Work
              <ArrowRight className="ml-2" size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Projects Heading */}
      <div
        id="projects"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center pt-26"
      >
        <h2 className="md:text-5xl text-3xl font-bold text-center">
          Websites, Campaigns{" "}
          <span className="text-blue-500">
            &<br />
            Newsletters
          </span>
        </h2>
      </div>

      {/* Websites Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
        id="web"
        className="py-15 pb-0"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <video
                autoPlay
                muted
                playsInline
                className="rounded-xl w-full h-auto object-cover"
              >
                <source src="/video/web-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="text-gray-300 md:px-8">
              <h2 className="md:text-4xl text-[1.55rem] mb-5 font-semibold">
                Websites & Landing Pages
              </h2>
              <p className="pb-8">
                Modern, Responsive Websites Built for Performance & SEO
                <br />
                <br />
                I design and develop modern websites using WordPress and frontend
                technologies like React and Next.js.
              </p>
              <a
                href="/website"
                className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold"
              >
                View Website Projects
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Campaign Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
        id="campaign"
        className="py-20 pb-0"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Image - First on Mobile */}
            <div className="order-1 md:order-2">
              <Image
                src="/img/campaign.webp"
                alt="Campaign preview"
                width={1200}
                height={800}
                className="rounded-xl w-full h-auto object-cover"
              />
            </div>

            {/* Text - Second on Mobile */}
            <div className="text-gray-300 order-2 md:order-1">
              <h2 className="md:text-4xl text-[1.55rem] mb-4 font-semibold">
                Campaign Development
              </h2>

              <p className="pb-8">
                Digital campaigns combining landing pages, social media, and email
                flows. From concept to launch, I focus on clear messaging, strong
                visuals, and conversion-driven layouts — including campaigns that
                increased sales by 20%.
              </p>

              <a
                href="/campaign"
                className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold"
              >
                View Campaign Projects
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Newsletter Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
        id="newsletter"
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="/img/newsletter.png"
                alt="Newsletter preview"
                width={1200}
                height={800}
                className="rounded-xl w-full h-auto object-cover"
              />
            </div>

            <div className="text-gray-300 md:px-8 md:py-6">
              <h2 className="md:text-4xl text-[1.55rem] mb-4 font-semibold">
                Email Newsletters
              </h2>
              <p className="pb-8">
                Email newsletters crafted to inform, engage, and support long-term
                customer growth.
              </p>

              <a
                href="/newsletter"
                className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold"
              >
                View Newsletters
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
