"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="pt-28 pb-20 max-w-4xl mx-auto px-4">
<<<<<<< HEAD
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-4xl font-bold text-white mb-8 border-l-4 border-blue-500 pl-4"
      >
        About Me
      </motion.h2>
=======
     

      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-white mb-5">About <span className="text-blue-500">Me</span></h1>
        
      </div>
>>>>>>> ec561a8 (first commit)

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
<<<<<<< HEAD
              Hello! I&apos;m a developer who bridges the gap between design and
              engineering. With a strong focus on the React ecosystem, I build
              scalable web applications that are not only functional but also
              delightful to use.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              My approach is user-centric and performance-oriented. Whether
              it&apos;s a corporate site like IBL Group or a dynamic SaaS platform
              like Opscale, I bring precision and creativity to every line of
              code.
            </p>
=======
Web developer skilled in WordPress, PrestaShop, HubSpot CMS, React, and Next.js, with a background in graphic design and digital marketing. I build user-focused, performance-driven websites and have a basic understanding of backend development (PHP & MySQL).<br></br> Experienced with eCommerce (PrestaShop) and Google Analytics, I deliver digital solutions that drive real business results. I’m also interested in campaign strategy, combining design, tech, and marketing insights to support effective digital growth.            </p>
            
>>>>>>> ec561a8 (first commit)
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {[
<<<<<<< HEAD
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Node.js",
                "GraphQL",
                "Framer Motion",
=======
                "Wordpress",
                "Prestashop",
                "Html",
                "Css(bootstrap/tailwind)",
                "React",
                "Next.js",
                "jQuery",
                "Node.js",
                "Php & MySql",
>>>>>>> ec561a8 (first commit)
                "SEO",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-slate-700 text-blue-200 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
