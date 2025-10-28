'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import 'quill/dist/quill.snow.css';

interface Blog {
  _id: string;
  title: string;
  backgroundImage: string;
  summary: string;
  detail: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
}

export default function BlogsTab() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  
  // Form state
  const [formData, setFormData] = useState({
    title: '',
    backgroundImage: '',
    summary: '',
    detail: '',
    slug: '',
  });

  const quillRef = useRef<HTMLDivElement>(null);
  const quillInstance = useRef<any>(null);
  const isQuillInitialized = useRef(false);

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Initialize Quill editor
  useEffect(() => {
    const initQuill = async () => {
      if (quillRef.current && showForm) {
        const Quill = (await import('quill')).default;

        // Destroy existing instance if it exists
        if (quillInstance.current) {
          quillInstance.current = null;
        }

        // Create new instance
        quillInstance.current = new Quill(quillRef.current, {
          theme: 'snow',
          modules: {
            toolbar: [
              [{ header: [1, 2, 3, false] }],
              ['bold', 'italic', 'underline', 'strike'],
              [{ list: 'ordered' }, { list: 'bullet' }],
              [{ color: [] }, { background: [] }],
              ['link', 'image'],
              ['clean'],
            ],
          },
          placeholder: 'Write blog content here...',
        });

        // Set initial content after a small delay to ensure Quill is fully initialized
        setTimeout(() => {
          if (quillInstance.current && formData.detail) {
            quillInstance.current.root.innerHTML = formData.detail;
          }
        }, 100);

        // Listen for text changes
        quillInstance.current.on('text-change', () => {
          if (quillInstance.current) {
            const html = quillInstance.current.root.innerHTML;
            setFormData((prev) => ({ ...prev, detail: html }));
          }
        });

        isQuillInitialized.current = true;
      }
    };

    initQuill();

    // Cleanup
    return () => {
      if (quillInstance.current) {
        quillInstance.current.off('text-change');
      }
      isQuillInitialized.current = false;
    };
  }, [showForm]);

  const fetchBlogs = async () => {
    try {
      const response = await fetch('/api/blogs');
      const data = await response.json();
      if (data.success) {
        setBlogs(data.data);
      }
    } catch (err) {
      console.error('Error fetching blogs:', err);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Auto-generate slug from title
    if (name === 'title' && !editingId) {
      const newSlug = generateSlug(value);
      setFormData({
        ...formData,
        title: value,
        slug: newSlug,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formDataUpload = new FormData();
    formDataUpload.append('file', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formDataUpload,
      });

      if (response.ok) {
        const data = await response.json();
        setFormData({ ...formData, backgroundImage: data.url });
        setMessage('Image uploaded successfully!');
      }
    } catch (error) {
      setMessage('Error uploading image');
    } finally {
      setUploading(false);
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const url = editingId ? `/api/blogs/${editingId}` : '/api/blogs';
      const method = editingId ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage('Blog saved successfully!');
        setShowForm(false);
        setEditingId(null);
        setFormData({
          title: '',
          backgroundImage: '',
          summary: '',
          detail: '',
          slug: '',
        });
        fetchBlogs();
      } else {
        const error = await response.json();
        setMessage(`Error: ${error.error}`);
      }
    } catch (error) {
      setMessage('Error saving blog');
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const handleEdit = (blog: Blog) => {
    setEditingId(blog._id);
    setFormData({
      title: blog.title,
      backgroundImage: blog.backgroundImage,
      summary: blog.summary,
      detail: blog.detail,
      slug: blog.slug,
    });
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this blog?')) return;

    try {
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchBlogs();
        setMessage('Blog deleted successfully!');
      }
    } catch (error) {
      console.error('Error deleting blog:', error);
      setMessage('Error deleting blog');
    } finally {
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const handleAdd = () => {
    setEditingId(null);
    setFormData({
      title: '',
      backgroundImage: '',
      summary: '',
      detail: '',
      slug: '',
    });
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingId(null);
    setFormData({
      title: '',
      backgroundImage: '',
      summary: '',
      detail: '',
      slug: '',
    });
  };

  if (showForm) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            {editingId ? 'Edit Blog' : 'Add New Blog'}
          </h2>
          <button
            onClick={handleCancel}
            className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            ← Back
          </button>
        </div>

        {message && (
          <div
            className={`p-4 rounded-lg ${
              message.includes('Error')
                ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
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

          {/* Background Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Background Image *
            </label>
            <div className="flex items-center gap-4">
              {formData.backgroundImage && (
                <img
                  src={formData.backgroundImage}
                  alt="Background"
                  className="w-32 h-20 object-cover rounded"
                />
              )}
              <label className="cursor-pointer px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:opacity-90">
                {uploading ? 'Uploading...' : 'Upload Image'}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  disabled={uploading}
                />
              </label>
            </div>
          </div>

          {/* Summary */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Summary *
            </label>
            <textarea
              name="summary"
              value={formData.summary}
              onChange={handleInputChange}
              required
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-white"
            />
          </div>

          {/* Blog Content */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Blog Content
            </label>
            <div
              ref={quillRef}
              className="bg-white dark:bg-[#1a1a1a] rounded-lg border border-gray-300 dark:border-gray-600 min-h-[300px]"
            />
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-3">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {loading
                ? 'Saving...'
                : editingId
                ? 'Update Blog'
                : 'Create Blog'}
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {message && (
        <div
          className={`p-4 rounded-lg ${
            message.includes('Error')
              ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
              : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
          }`}
        >
          {message}
        </div>
      )}

      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Blogs ({blogs.length})
        </h2>
        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:opacity-90 transition-opacity"
        >
          + Add Blog
        </button>
      </div>

      {blogs.length === 0 ? (
        <div className="text-center py-12 text-gray-500 dark:text-gray-400">
          No blogs yet. Click "Add Blog" to create one.
        </div>
      ) : (
        <div className="grid gap-4">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-300 dark:hover:border-gray-600 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4 flex-1">
                  {blog.backgroundImage && (
                    <img
                      src={blog.backgroundImage}
                      alt={blog.title}
                      className="w-32 h-20 object-cover rounded"
                    />
                  )}
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 line-clamp-2">
                      {blog.summary}
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded">
                        {blog.slug}
                      </span>
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded">
                        {new Date(blog.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 ml-4">
                  <button
                    onClick={() => handleEdit(blog)}
                    className="px-3 py-1 text-sm text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(blog._id)}
                    className="px-3 py-1 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

