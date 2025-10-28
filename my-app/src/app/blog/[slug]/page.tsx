'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

interface Blog {
  _id: string;
  title: string;
  backgroundImage: string;
  summary: string;
  detail: string;
  slug: string;
  createdAt: string;
}

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchBlog();
  }, [slug]);

  const fetchBlog = async () => {
    try {
      const response = await fetch('/api/blogs');
      const data = await response.json();
      if (data.success) {
        const foundBlog = data.data.find((b: Blog) => b.slug === slug);
        if (foundBlog) {
          setBlog(foundBlog);
        } else {
          setError('Blog not found');
        }
      } else {
        setError('Failed to fetch blog');
      }
    } catch (err) {
      console.error('Error fetching blog:', err);
      setError('Error fetching blog');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="pt-5 bg-white dark:bg-[#252525] rounded-3xl mb-6">
        <div className="px-6 py-20 text-center">
          <div className="text-xl text-gray-600 dark:text-gray-400">Loading...</div>
        </div>
      </section>
    );
  }

  if (error || !blog) {
    return (
      <section className="pt-5 bg-white dark:bg-[#252525] rounded-3xl mb-6">
        <div className="px-6 py-20 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Blog Not Found</h1>
          <Link href="/blog" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors">
            ← Back to Blog
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-6">
      {/* Hero Image */}
      <div className="bg-white dark:bg-[#252525] rounded-xl overflow-hidden">
        <div className="relative h-64 md:h-96 w-full">
          <Image
            src={blog.backgroundImage}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
        </div>
      </div>

      {/* Content */}
      <div className="bg-white dark:bg-[#252525] rounded-3xl p-2 md:p-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors mb-6"
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Blog
        </Link>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full"></span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {new Date(blog.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {blog.title}
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              {blog.summary}
            </p>
        </div>

        <div className="border-t border-gray-200 dark:border-[#404040] pt-6">
            <div 
              className="prose prose-gray dark:prose-invert max-w-none text-gray-600 dark:text-gray-400"
              dangerouslySetInnerHTML={{ 
                __html: blog.detail.includes('&lt;') 
                  ? blog.detail.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&')
                  : blog.detail
              }}
            />
          </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            View All Posts
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
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

