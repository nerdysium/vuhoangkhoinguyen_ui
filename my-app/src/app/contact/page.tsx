"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <section className="pt-5 bg-white dark:bg-[#252525] rounded-3xl px-6 mb-6">
        {/* Main Section */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full"></span>
            <h2 className="text-lg font-semibold text-gray-600 dark:text-gray-300">
              Hire Me
            </h2>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-3 md:py-1.5 bg-green-500/10 text-green-600 dark:text-green-400 text-sm font-semibold rounded-full">
            <span className="size-1.5 bg-green-500 dark:bg-green-400 rounded-full"></span>
            <span className="hidden md:block">AVAILABLE FOR WORK</span>
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Design Inquiry
        </h1>

        <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-6 md:mb-8">
          Got an idea and need design help? Reach out now
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="px-4 py-3 bg-gray-50 dark:bg-[#1f1f1f] border border-gray-200 dark:border-[#2b2b2b] rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white/20 transition-all"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="px-4 py-3 bg-gray-50 dark:bg-[#1f1f1f] border border-gray-200 dark:border-[#2b2b2b] rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white/20 transition-all"
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="w-full px-4 py-3 bg-gray-50 dark:bg-[#1f1f1f] border border-gray-200 dark:border-[#2b2b2b] rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white/20 transition-all resize-none"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full px-6 py-4 bg-gray-900 dark:bg-white hover:bg-black dark:hover:bg-gray-100 text-white dark:text-gray-900 text-base font-semibold rounded-xl transition-colors"
          >
            Submit
          </button>
        </form>
      </section>
    </>
  );
}
