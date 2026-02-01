// src/components/ProjectModal.tsx
"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Project } from "@/data/projects";


type Props = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full mx-4 rounded-2xl bg-[#0b1220] border border-white/10 overflow-hidden"
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-10 text-gray-400 hover:text-white transition"
            >
              <X size={22} />
            </button>

            <div className="grid md:grid-cols-2 min-h-[440px]">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />

              <div className="p-6">
                <span className="text-sm text-blue-400">{project.type}</span>

                <h3 className="text-2xl font-semibold text-white mt-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-4 leading-relaxed">
                  {project.longDescription}
                </p>

                <p className="text-sm text-gray-500 mt-6">{project.stack}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
