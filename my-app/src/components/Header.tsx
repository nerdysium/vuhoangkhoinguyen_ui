"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const toggleTheme = () => {
  document.documentElement.classList.toggle("dark");
};

export default function Header() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed md:max-w-[560px] w-[calc(100%-16px)] md:w-full top-4 left-1/2 -translate-x-1/2 z-50">
      <nav
        className="flex items-center justify-between px-3 md:px-4 py-2 md:py-2.5 rounded-xl border border-gray-200 dark:border-[#2b2b2b] bg-white dark:bg-[#212121] 
      shadow-[0_1.2px_1.2px_rgba(10,10,10,0.06),0_5px_10px_rgba(10,10,10,0.04)]"
      >
        {/* Left Navigation */}
        <div className="flex items-center gap-0 -ml-1 md:ml-0">
          <Link
            href="/"
            className={`relative p-2 md:p-3 rounded-full transition-all ${
              isActive("/")
                ? "bg-gray-100 dark:bg-[#2c2c2c]"
                : "hover:bg-gray-50 dark:hover:bg-[#2c2c2c]/50"
            }`}
            aria-label="Home"
          >
            <svg
              className={`size-6 md:size-7 relative z-10 transition-opacity ${
                isActive("/")
                  ? "text-gray-900 dark:text-white opacity-100"
                  : "text-gray-900 dark:text-white opacity-50"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </Link>
          <Link
            href="/about"
            className={`group relative p-2 md:p-3 rounded-full transition-all ${
              isActive("/about")
                ? "bg-gray-100 dark:bg-[#2c2c2c]"
                : "hover:bg-gray-50 dark:hover:bg-[#2c2c2c]/50"
            }`}
            aria-label="About"
          >
            <svg
              className={`size-6 md:size-7 relative z-10 transition-opacity ${
                isActive("/about")
                  ? "text-gray-900 dark:text-white opacity-100"
                  : "text-gray-900 dark:text-white opacity-50"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </Link>
          <Link
            href="/projects"
            className={`group relative p-2 md:p-3 rounded-full transition-all ${
              isActive("/projects")
                ? "bg-gray-100 dark:bg-[#2c2c2c]"
                : "hover:bg-gray-50 dark:hover:bg-[#2c2c2c]/50"
            }`}
            aria-label="Projects"
          >
            <svg
              className={`size-6 md:size-7 relative z-10 transition-opacity ${
                isActive("/projects")
                  ? "text-gray-900 dark:text-white opacity-100"
                  : "text-gray-900 dark:text-white opacity-50"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </Link>
          <Link
            href="/products"
            className={`group relative p-2 md:p-3 rounded-full transition-all ${
              isActive("/products")
                ? "bg-gray-100 dark:bg-[#2c2c2c]"
                : "hover:bg-gray-50 dark:hover:bg-[#2c2c2c]/50"
            }`}
            aria-label="Products"
          >
            <svg
              className={`size-6 md:size-7 relative z-10 transition-opacity ${
                isActive("/products")
                  ? "text-gray-900 dark:text-white opacity-100"
                  : "text-gray-900 dark:text-white opacity-50"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </Link>
          <Link
            href="/blog"
            className={`group relative p-2 md:p-3 rounded-full transition-all ${
              isActive("/blog") || pathname?.startsWith("/blog/")
                ? "bg-gray-100 dark:bg-[#2c2c2c]"
                : "hover:bg-gray-50 dark:hover:bg-[#2c2c2c]/50"
            }`}
            aria-label="Blog"
          >
            <svg
              className={`size-6 md:size-7 relative z-10 transition-opacity ${
                isActive("/blog") || pathname?.startsWith("/blog/")
                  ? "text-gray-900 dark:text-white opacity-100"
                  : "text-gray-900 dark:text-white opacity-50"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-1 md:gap-2 -mr-1 md:mr-0">
          <button
            onClick={toggleTheme}
            className="group relative p-2 md:p-3 rounded-full hover:bg-gray-50 dark:hover:bg-[#2c2c2c]/50 transition-all"
            aria-label="Toggle theme"
          >
            <svg
              className="size-6 md:size-7 hidden dark:block text-gray-900 dark:text-white opacity-80"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <svg
              className="size-6 md:size-7 block dark:hidden text-gray-900 dark:text-white opacity-80"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </button>
          <Link
            href="/contact"
            className="px-3 py-2 bg-gray-900 dark:bg-[#383838] hover:bg-black dark:hover:bg-[#424242] text-white text-xs md:text-sm font-semibold rounded-md transition-all shadow-sm flex items-center gap-1.5 md:gap-2"
          >
            <div className="size-1.5 md:size-2 bg-green-500 rounded-full" />
            <span className="whitespace-nowrap">Let's Talk</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
