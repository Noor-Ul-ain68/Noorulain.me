import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { PlusCircle, Edit2, Globe, FileText } from "lucide-react";

export default async function AdminBlogList() {
    const posts = await prisma.post.findMany({
        orderBy: { createdAt: "desc" },
    });

    return (
        <div className="space-y-8 animate-in slide-in-from-bottom duration-500">
            <header className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-black text-gray-900">All Content</h1>
                    <p className="text-gray-500">Manage your published and draft articles.</p>
                </div>
                <a
                    href="/admin/blog/new"
                    className="bg-orange-600 px-6 py-3 rounded-xl font-bold text-white shadow-lg shadow-orange-100 hover:bg-orange-700 transition-all flex items-center gap-2"
                >
                    <PlusCircle className="w-5 h-5" />
                    New Article
                </a>
            </header>

            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50/50">
                        <tr className="text-gray-400 text-xs font-black uppercase tracking-widest border-b border-gray-100">
                            <th className="px-8 py-5">Article</th>
                            <th className="px-8 py-5 text-center">Visibility</th>
                            <th className="px-8 py-5">Created At</th>
                            <th className="px-8 py-5 text-right">Settings</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {posts.map((post: any) => (
                            <tr key={post.id} className="group hover:bg-orange-50/10 transition-all">
                                <td className="px-8 py-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-gray-100 flex-shrink-0 flex items-center justify-center overflow-hidden border border-gray-50 shadow-sm">
                                            {post.featuredImage ? (
                                                <img src={post.featuredImage} alt="" className="w-full h-full object-cover" />
                                            ) : (
                                                <FileText className="w-5 h-5 text-gray-400" />
                                            )}
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors leading-tight mb-1">{post.title}</p>
                                            <p className="text-xs text-gray-400 font-mono tracking-tighter italic truncate max-w-xs opacity-60">/{post.slug}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-8 py-6 text-center">
                                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${post.published
                                        ? "bg-emerald-50 text-emerald-600 border-emerald-100 shadow-sm shadow-emerald-50"
                                        : "bg-amber-50 text-amber-600 border-amber-100 shadow-sm shadow-amber-50"
                                        }`}>
                                        <Globe className="w-3 h-3" />
                                        {post.published ? "Active" : "Draft"}
                                    </span>
                                </td>
                                <td className="px-8 py-6 text-sm text-gray-500 font-bold font-mono">
                                    {new Date(post.createdAt).toLocaleDateString()}
                                </td>
                                <td className="px-8 py-6 text-right">
                                    <a
                                        href={`/admin/blog/edit/${post.id}`}
                                        className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-600 font-bold text-xs uppercase tracking-widest transition-all"
                                    >
                                        Manage
                                        <Edit2 className="w-3.5 h-3.5" />
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
