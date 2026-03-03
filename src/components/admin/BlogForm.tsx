"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { Save, Loader2, Globe, FileText, ImageIcon, Eye } from "lucide-react";

// Dynamically import Quill with no SSR
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import "react-quill-new/dist/quill.snow.css";

interface BlogFormProps {
    post?: any;
    isEdit?: boolean;
}

export default function BlogForm({ post, isEdit }: BlogFormProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        title: post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
        excerpt: post?.excerpt || "",
        featuredImage: post?.featuredImage || "",
        published: post?.published ?? false,
        metaTitle: post?.metaTitle || "",
        metaDescription: post?.metaDescription || "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Auto-generate slug from title
        if (name === "title" && !isEdit) {
            setFormData(prev => ({
                ...prev,
                slug: value.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "")
            }));
        }
    };

    const handleContentChange = (content: string) => {
        setFormData(prev => ({ ...prev, content }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const endpoint = isEdit ? `/api/blog/${post.id}` : "/api/blog";
            const method = isEdit ? "PUT" : "POST";

            const res = await fetch(endpoint, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                router.push("/admin/dashboard");
                router.refresh();
            } else {
                alert("Failed to save post");
            }
        } catch (error) {
            alert("Error saving post");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-8 pb-16 animate-in fade-in duration-500">
            <header className="flex items-center justify-between border-b pb-6 sticky top-0 bg-gray-50/90 backdrop-blur-md z-10 pt-2">
                <div className="space-y-1">
                    <h1 className="text-3xl font-black text-gray-900">
                        {isEdit ? "Edit Content" : "Create New Insight"}
                    </h1>
                    <p className="text-sm font-medium text-gray-400 uppercase tracking-widest">
                        {isEdit ? `Editing ID: ${post.id}` : "Crafting your next masterpiece"}
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <button
                        type="button"
                        onClick={() => router.back()}
                        className="px-6 py-3 font-bold text-gray-500 hover:text-gray-700 transition-all border border-gray-100 rounded-xl bg-white"
                    >
                        Discard
                    </button>
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-orange-600 px-8 py-3 rounded-xl font-bold text-white shadow-lg shadow-orange-100 hover:bg-orange-700 transition-all flex items-center gap-2"
                    >
                        {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
                        {isEdit ? "Update Post" : "Publish Insight"}
                    </button>
                    {isEdit && (
                        <button
                            type="button"
                            onClick={async () => {
                                if (confirm("Are you sure you want to delete this post?")) {
                                    setLoading(true);
                                    const res = await fetch(`/api/blog/${post.id}`, { method: "DELETE" });
                                    if (res.ok) router.push("/admin/dashboard");
                                    else alert("Delete failed");
                                    setLoading(false);
                                }
                            }}
                            className="bg-red-50 text-red-600 px-6 py-3 rounded-xl font-bold hover:bg-red-600 hover:text-white transition-all border border-red-100"
                        >
                            Delete
                        </button>
                    )}
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Editor Section */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
                        <div>
                            <label className="block text-xs font-black uppercase text-gray-400 mb-3 tracking-widest">Article Title</label>
                            <input
                                name="title"
                                type="text"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="Enter a catchy title..."
                                className="w-full text-2xl font-bold bg-gray-50 px-6 py-4 rounded-2xl outline-none focus:ring-4 focus:ring-orange-50 border-none transition-all"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-black uppercase text-gray-400 mb-3 tracking-widest">URL Slug</label>
                            <input
                                name="slug"
                                type="text"
                                value={formData.slug}
                                onChange={handleChange}
                                placeholder="article-slug-goes-here"
                                className="w-full bg-gray-50 px-6 py-3 rounded-2xl outline-none border-none text-gray-600 font-mono text-sm"
                                required
                            />
                        </div>

                        <div className="prose-editor min-h-[500px]">
                            <label className="block text-xs font-black uppercase text-gray-400 mb-3 tracking-widest">Content Body</label>
                            <ReactQuill
                                theme="snow"
                                value={formData.content}
                                onChange={handleContentChange}
                                className="h-[400px] mb-12"
                                modules={{
                                    toolbar: [
                                        [{ 'header': [1, 2, 3, false] }],
                                        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                                        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                                        ['link', 'image', 'code-block'],
                                        ['clean']
                                    ],
                                }}
                            />
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
                        <div className="flex items-center gap-2 mb-2">
                            <Eye className="w-5 h-5 text-indigo-600" />
                            <h3 className="font-bold text-gray-900 uppercase text-xs tracking-widest">SEO Preview & Meta</h3>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-gray-400 mb-2">Meta Title (Google Snippet)</label>
                                <input
                                    name="metaTitle"
                                    type="text"
                                    value={formData.metaTitle}
                                    onChange={handleChange}
                                    className="w-full border border-gray-100 px-4 py-2 rounded-xl text-sm"
                                    placeholder="Optional: Custom SEO title..."
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-400 mb-2">Meta Description</label>
                                <textarea
                                    name="metaDescription"
                                    rows={3}
                                    value={formData.metaDescription}
                                    onChange={handleChange}
                                    className="w-full border border-gray-100 px-4 py-2 rounded-xl text-sm outline-none"
                                    placeholder="How this summary appears in search engines..."
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar Controls Section */}
                <div className="space-y-6 sticky top-28 h-fit">
                    <div className="bg-white p-6 rounded-3xl border border-orange-100 shadow-sm border-2">
                        <div className="flex items-center gap-2 mb-4 border-b pb-4">
                            <Globe className="w-5 h-5 text-orange-600" />
                            <h3 className="font-black text-gray-900 uppercase text-xs tracking-widest leading-none">Visibility</h3>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-bold text-gray-600">Publish Instantly</span>
                            <button
                                type="button"
                                onClick={() => setFormData(p => ({ ...p, published: !p.published }))}
                                className={`w-14 h-8 rounded-full transition-all relative ${formData.published ? "bg-emerald-500" : "bg-gray-200"}`}
                            >
                                <div className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-all ${formData.published ? "left-7" : "left-1"}`} />
                            </button>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-4">
                        <div className="flex items-center gap-2 mb-2">
                            <ImageIcon className="w-5 h-5 text-orange-600" />
                            <h3 className="font-black text-gray-900 uppercase text-xs tracking-widest leading-none">Featured Image</h3>
                        </div>
                        <input
                            name="featuredImage"
                            type="text"
                            value={formData.featuredImage}
                            onChange={handleChange}
                            placeholder="Image URL (Unsplash or Cloudinary)"
                            className="w-full border border-gray-100 px-4 py-3 rounded-xl text-xs font-mono"
                        />
                        {formData.featuredImage && (
                            <img src={formData.featuredImage} className="w-full h-32 object-cover rounded-2xl border" alt="preview" />
                        )}
                    </div>

                    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-4">
                        <div className="flex items-center gap-2 mb-2">
                            <FileText className="w-5 h-5 text-orange-600" />
                            <h3 className="font-black text-gray-900 uppercase text-xs tracking-widest leading-none">Excerpt</h3>
                        </div>
                        <textarea
                            name="excerpt"
                            rows={4}
                            value={formData.excerpt}
                            onChange={handleChange}
                            className="w-full bg-gray-50 px-4 py-3 rounded-2xl outline-none text-sm font-medium text-gray-600 border-none italic"
                            placeholder="Short summary for the blog list..."
                        />
                    </div>
                </div>
            </div>

            <style jsx global>{`
                .prose-editor .ql-container {
                    border: none !important;
                    font-size: 1.1rem;
                    color: #333;
                }
                .prose-editor .ql-editor {
                  min-height: 400px;
                }
                .prose-editor .ql-toolbar {
                  border: none !important;
                  border-bottom: 2px solid #f9fafb !important;
                  padding-bottom: 12px;
                  margin-bottom: 12px;
                }
            `}</style>
        </form>
    );
}
