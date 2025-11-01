"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface Blog {
  _id: string;
  title: string;
  backgroundImage: string;
  summary: string;
  slug: string;
  createdAt: string;
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch("/api/blogs");
      const data = await response.json();
      if (data.success) {
        setBlogs(data.data);
      }
    } catch (err) {
      console.error("Error fetching blogs:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="pt-5 bg-white dark:bg-[#252525] rounded-3xl mb-6">
        <div className="px-6 py-20 text-center">
          <div className="text-xl text-gray-600 dark:text-gray-400">
            Loading blogs...
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-5 bg-white dark:bg-[#252525] rounded-3xl mb-6">
      <div className="px-6">
        <div className="flex items-center gap-2 mb-10">
          <span className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full"></span>
          <h2 className="text-lg font-semibold text-gray-600 dark:text-gray-300">
            Blog
          </h2>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Thoughts & Insights
        </h1>

        <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-8">
          Explore my thoughts, experiences, and insights on design, development,
          and beyond.
        </p>
      </div>

      <div className="bg-gray-100 dark:bg-[#323232] rounded-xl p-4">
        {blogs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-gray-500 dark:text-gray-400">
              No blog posts yet. Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {blogs.map((blog) => (
              <Link
                key={blog._id}
                href={`/blog/${blog.slug}`}
                className="group bg-white dark:bg-[#252525] rounded-xl overflow-hidden border border-gray-100 dark:border-[#2b2b2b] hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300"
              >
                <div className="p-5">
                  <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors line-clamp-2">
                    {blog.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {blog.summary}
                  </p>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-500 dark:text-gray-500">
                      {new Date(blog.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400 group-hover:translate-x-1 transition-transform duration-300">
                      Read more →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
