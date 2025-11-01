"use client";

import BlogsTab from "@/components/admin/BlogsTab";

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#1a1a1a] rounded-xl">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your portfolio content
          </p>
        </div>

        {/* Tabs */}
        <div className="bg-white dark:bg-[#252525] rounded-2xl shadow-sm">
          {/* Tab Content */}
          <div className="p-6">
            <BlogsTab />
          </div>
        </div>
      </div>
    </div>
  );
}
