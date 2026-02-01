"use client";

import { useState, type FormEvent } from "react";
<<<<<<< HEAD
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Replace with your actual form handler (email service / API route)
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <div className="pt-28 pb-20 max-w-3xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <h2 className="text-4xl font-bold text-white mb-4">
          Let&apos;s Work Together
        </h2>
        <p className="text-gray-400">
          Have a project in mind? I&apos;d love to hear from you.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-xl"
      >
        {status === "success" ? (
          <div className="text-center py-10 bg-green-900/20 rounded-xl border border-green-700">
            <h3 className="text-green-400 text-xl font-bold mb-2">Message Sent!</h3>
            <p className="text-gray-400">I&apos;ll get back to you as soon as possible.</p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-4 text-blue-400 underline"
            >
              Send another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Name
              </label>
              <input
                type="text"
                required
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Email
              </label>
              <input
                type="email"
                required
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Message
              </label>
              <textarea
                rows={4}
                required
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-500 hover:to-teal-500 text-white font-bold py-3 rounded-lg transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </motion.div>

      <div className="mt-12 flex justify-center space-x-8">
        <a
          href="#"
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="GitHub"
        >
          <Github />
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin />
        </a>
      </div>
=======

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to send message");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  return (


     

      
  
    <div className="pt-28 pb-20 max-w-3xl mx-auto px-4">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-white mb-5">Contact</h1>
        
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Name
          </label>
          <input
            name="name"
            type="text"
            required
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Email
          </label>
          <input
            name="email"
            type="email"
            required
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Message
          </label>
          <textarea
            name="message"
            rows={4}
            required
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white"
            placeholder="Tell me about your project..."
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white font-bold py-3 rounded-lg disabled:opacity-50"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {/* Success or error message */}
        {status === "success" && (
          <p className="mt-4 text-green-500 font-medium">Message sent successfully! 🎉</p>
        )}
        {status === "error" && (
          <p className="mt-4 text-red-500 font-medium">{errorMessage}</p>
        )}
      </form>
>>>>>>> ec561a8 (first commit)
    </div>
  );
}
