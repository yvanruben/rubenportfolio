"use client";

import { useState, type FormEvent } from "react";

export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
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

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage((data as any)?.error || "Failed to send message");
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
        <p className="text-gray-400">Send me a message and I’ll reply soon.</p>
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

        {status === "success" && (
          <p className="mt-4 text-green-500 font-medium">
            Message sent successfully! 🎉
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 text-red-500 font-medium">{errorMessage}</p>
        )}
      </form>
    </div>
  );
}
