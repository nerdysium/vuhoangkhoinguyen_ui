"use client";

import { useState, useEffect, useRef } from "react";
import { IProject } from "@/models/Project";
import "quill/dist/quill.snow.css";

interface ProjectFormProps {
  project: IProject | null;
  onClose: () => void;
  onSuccess: () => void;
}

export default function ProjectForm({
  project,
  onClose,
  onSuccess,
}: ProjectFormProps) {
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState<Partial<IProject>>({
    slug: "",
    title: "",
    description: "",
    logo: "",
    background: "",
    projectType: "",
    client: "",
    company: "",
    year: new Date().getFullYear().toString(),
    fullDescription: "",
    websiteUrl: "",
    detailHtml: "",
    detailCss: "",
    screenshots: [],
    published: true,
  });

  const quillRef = useRef<HTMLDivElement>(null);
  const quillInstance = useRef<any>(null);
  const isQuillInitialized = useRef(false);

  useEffect(() => {
    if (project) {
      setFormData(project);
    }
  }, [project]);

  // Auto-generate slug from title
  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  // Initialize Quill editor
  useEffect(() => {
    const initQuill = async () => {
      if (quillRef.current && !isQuillInitialized.current) {
        isQuillInitialized.current = true;
        const Quill = (await import("quill")).default;

        quillInstance.current = new Quill(quillRef.current, {
          theme: "snow",
          modules: {
            toolbar: [
              [{ header: [1, 2, 3, false] }],
              ["bold", "italic", "underline", "strike"],
              [{ list: "ordered" }, { list: "bullet" }],
              [{ color: [] }, { background: [] }],
              ["link", "image"],
              ["clean"],
            ],
          },
          placeholder: "Write project details here...",
        });

        // Set initial content
        if (formData.detailHtml) {
          quillInstance.current.root.innerHTML = formData.detailHtml;
        }

        // Listen for text changes
        quillInstance.current.on("text-change", () => {
          if (quillInstance.current) {
            const html = quillInstance.current.root.innerHTML;
            setFormData((prev) => ({ ...prev, detailHtml: html }));
          }
        });
      }
    };

    initQuill();

    // Cleanup
    return () => {
      if (quillInstance.current) {
        quillInstance.current.off("text-change");
      }
    };
  }, []);

  // Update Quill content when project changes
  useEffect(() => {
    if (quillInstance.current && project?.detailHtml) {
      const currentContent = quillInstance.current.root.innerHTML;
      if (currentContent !== project.detailHtml) {
        quillInstance.current.root.innerHTML = project.detailHtml;
      }
    }
  }, [project]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    // Auto-generate slug from title
    if (name === "title" && !project) {
      const newSlug = generateSlug(value);
      setFormData({
        ...formData,
        title: value,
        slug: newSlug,
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  const handleImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "logo" | "background"
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formDataUpload = new FormData();
    formDataUpload.append("file", file);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formDataUpload,
      });

      if (response.ok) {
        const data = await response.json();
        setFormData({ ...formData, [field]: data.url });
        setMessage("Image uploaded successfully!");
      }
    } catch (error) {
      setMessage("Error uploading image");
    } finally {
      setUploading(false);
      setTimeout(() => setMessage(""), 3000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const url = project ? `/api/projects/${project._id}` : "/api/projects";
      const method = project ? "PUT" : "POST";

      // Use detailHtml as fullDescription for backwards compatibility
      const submitData = {
        ...formData,
        fullDescription: formData.description,
      };

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      });

      if (response.ok) {
        setMessage("Project saved successfully!");
        setTimeout(() => onSuccess(), 1000);
      } else {
        const error = await response.json();
        setMessage(`Error: ${error.error}`);
      }
    } catch (error) {
      setMessage("Error saving project");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          {project ? "Edit Project" : "Add New Project"}
        </h2>
        <button
          onClick={onClose}
          className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
        >
          ← Back
        </button>
      </div>

      {message && (
        <div
          className={`p-4 rounded-lg ${
            message.includes("Error")
              ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
              : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
          }`}
        >
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Title *
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-white"
          />
          {formData.slug && (
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Slug: {formData.slug}
            </p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Description *
          </label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-white"
          />
        </div>

        {/* Logo Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Logo *
          </label>
          <div className="flex items-center gap-4">
            {formData.logo && (
              <img
                src={formData.logo}
                alt="Logo"
                className="w-16 h-16 object-cover rounded"
              />
            )}
            <label className="cursor-pointer px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:opacity-90">
              {uploading ? "Uploading..." : "Upload Logo"}
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, "logo")}
                className="hidden"
                disabled={uploading}
              />
            </label>
          </div>
        </div>

        {/* Background Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Background Image
          </label>
          <div className="flex items-center gap-4">
            {formData.background && (
              <img
                src={formData.background}
                alt="Background"
                className="w-32 h-20 object-cover rounded"
              />
            )}
            <label className="cursor-pointer px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:opacity-90">
              {uploading ? "Uploading..." : "Upload Background"}
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, "background")}
                className="hidden"
                disabled={uploading}
              />
            </label>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Project Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Project Type *
            </label>
            <input
              type="text"
              name="projectType"
              value={formData.projectType}
              onChange={handleInputChange}
              required
              placeholder="Visual design, Branding"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-white"
            />
          </div>

          {/* Client */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Client *
            </label>
            <input
              type="text"
              name="client"
              value={formData.client}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-white"
            />
          </div>

          {/* Company */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Company *
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-white"
            />
          </div>

          {/* Year */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Year *
            </label>
            <input
              type="text"
              name="year"
              value={formData.year}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-white"
            />
          </div>
        </div>

        {/* Website URL */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Website URL
          </label>
          <input
            type="url"
            name="websiteUrl"
            value={formData.websiteUrl}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-white"
          />
        </div>

        {/* Project Details */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Project Details
          </label>
          <div
            ref={quillRef}
            className="bg-white dark:bg-[#1a1a1a] rounded-lg border border-gray-300 dark:border-gray-600 min-h-[300px]"
          />
        </div>

        {/* Published */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="published"
            checked={formData.published}
            onChange={handleInputChange}
            className="w-4 h-4"
          />
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Published
          </label>
        </div>

        {/* Submit Buttons */}
        <div className="flex gap-3">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {loading
              ? "Saving..."
              : project
              ? "Update Project"
              : "Create Project"}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
