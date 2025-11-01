"use client";

import { useState } from "react";
import Link from "next/link";

const icons = [
  {
    href: "https://x.com/nerdysium",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z", // X icon
  },
  {
    href: "https://www.threads.com/@nerdysium",
    path: "M17.7 11.1c-.2-.1-.4-.2-.6-.3-.1-2.9-1.4-4.3-4.4-4.3-1.7 0-3 .7-3.8 2l1.5 1.1c.6-.8 1.4-1.1 2.3-1.1 1.8 0 2.8.9 3 2.6-2.3-.3-6.3-.1-6.1 3.3.1 1.8 1.5 2.9 3.6 2.9 1.6 0 2.9-.6 3.7-1.8.6-.8 1-1.9 1.1-3.3.9.5 1.5 1.2 1.8 1.9.5 1.2.5 3-1 4.4-1.3 1.3-2.9 1.8-5.6 1.8-2.6 0-4.4-.7-5.6-2.2-1.2-1.5-1.8-3.6-1.8-6.1s.6-4.6 1.8-6.1c1.2-1.5 3-2.2 5.6-2.2 2.5 0 4.3.8 5.6 2.3.7.8 1.2 1.8 1.5 2.9l1.8-.5c-.4-1.3-1-2.4-1.8-3.4-1.7-2-4-3-7.1-3-3.2 0-5.4.9-7 2.9-1.6 1.9-2.4 4.4-2.4 7.3s.8 5.4 2.4 7.3c1.6 2 3.8 2.9 7 2.9 2.8 0 4.9-.8 6.4-2.3 2-2 2-4.9 1.3-6.6-.7-1.7-2.1-2.8-3.7-3.5zm-5.6 4.8c-1.1.1-2.2-.5-2.2-1.7 0-1.4 1.2-2 3.8-1.8-.2 2-1.2 3.3-1.6 3.5z",
  },
  {
    href: "https://www.linkedin.com/in/vuhoangkhoinguyen/",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
];

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("nvu.work@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="w-full flex flex-col items-center justify-center gap-2">
      {/* Section 1 */}
      <section className="w-full bg-white dark:bg-[#252525] rounded-3xl px-2 py-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Let's work together.
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Creating user experience and visual appealing design
        </p>

        <div className="flex items-center justify-center gap-3">
          <Link
            href="/contact"
            className="px-6 py-3 bg-gray-900 dark:bg-[#323232] hover:bg-black dark:hover:bg-[#3a3a3a] text-white dark:text-gray-200 text-sm font-medium rounded-xl transition-colors flex items-center gap-2"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Let's Talk
          </Link>
          <button
            onClick={copyEmail}
            className="px-6 py-3 bg-gray-100 dark:bg-[#323232] hover:bg-gray-200 dark:hover:bg-[#3a3a3a] text-gray-900 dark:text-gray-200 text-sm font-medium rounded-xl transition-colors flex items-center gap-2"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            {copied ? "Copied!" : "Copy Email"}
          </button>
        </div>
      </section>

      {/* Section 2 */}
      <section
        className="w-full flex items-center justify-between
       bg-[#F7F7F7] dark:bg-[#323232] rounded-xl p-4 md:p-6"
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full"></span>
          <h2 className="text-lg font-semibold text-gray-600 dark:text-gray-300">
            Follow Me
          </h2>
        </div>

        <div className="flex items-center gap-2">
          {icons.map(({ href, path }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-[#252525] hover:bg-gray-200 dark:hover:bg-[#3a3a3a] rounded-full transition-colors"
            >
              <svg
                className="w-5 h-5 text-gray-600 dark:text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d={path} />
              </svg>
            </a>
          ))}
        </div>
      </section>

      {/* Section 3 */}
      <section
        className="w-full text-center px-6 py-8 md:py-12 text-black dark:text-gray-300 text-sm
      bg-[#F7F7F7] dark:bg-[#323232] rounded-xl"
      >
        <p>© 2025 vuhoangkhoinguyen – Saigon Science</p>
        <p className="mt-1">
          by{" "}
          <a href="#" className="underline ">
            Andy Koi
          </a>{" "}
          //{" "}
          <a href="#" className="underline">
            Saigon Science
          </a>{" "}
          //{" "}
          <a href="#" className="underline">
            Figma
          </a>
        </p>
      </section>
    </footer>
  );
};
export default Footer;
