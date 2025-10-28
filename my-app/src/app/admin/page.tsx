"use client";

import { useState } from "react";
import ProjectsTab from "@/components/admin/ProjectsTab";
import ProductsTab from "@/components/admin/ProductsTab";
import BlogsTab from "@/components/admin/BlogsTab";

type TabType = "projects" | "products" | "blogs";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<TabType>("projects");

  const tabs = [
    { id: "projects" as TabType, label: "Projects", icon: "📁" },
    { id: "products" as TabType, label: "Products", icon: "🛍️" },
    { id: "blogs" as TabType, label: "Blogs", icon: "📝" },
  ];

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
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="flex space-x-4 px-6" aria-label="Tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    py-4 px-3 border-b-2 font-medium text-sm transition-colors
                    ${
                      activeTab === tab.id
                        ? "border-gray-900 dark:border-white text-gray-900 dark:text-white"
                        : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
                    }
                  `}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === "projects" && <ProjectsTab />}
            {activeTab === "products" && <ProductsTab />}
            {activeTab === "blogs" && <BlogsTab />}
          </div>
        </div>
      </div>
    </div>
  );
}

