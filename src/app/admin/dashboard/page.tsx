import { prisma } from "@/lib/prisma";
import { FileText, CheckCircle, Eye, MoreVertical } from "lucide-react";
import Link from "next/link";

export default async function DashboardPage() {
    const totalPosts = await prisma.post.count();
    const publishedPosts = await prisma.post.count({ where: { published: true } });
    const latestPosts = await prisma.post.findMany({
        orderBy: { createdAt: "desc" },
        take: 5,
    });

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <header className="flex flex-col gap-2">
                <h1 className="text-3xl font-extrabold text-gray-900 flex items-center gap-3">
                    Welcome back, Noor <span className="text-2xl">👋</span>
                </h1>
                <p className="text-gray-500 font-medium">Manage your blog and insights from here.</p>
            </header>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between hover:scale-[1.02] transition-transform">
                    <div className="space-y-1">
                        <p className="text-sm text-gray-400 font-medium uppercase tracking-wider">Total Posts</p>
                        <h3 className="text-3xl font-black text-gray-900">{totalPosts}</h3>
                    </div>
                    <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm shadow-indigo-50">
                        <FileText className="w-7 h-7" />
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between hover:scale-[1.02] transition-transform">
                    <div className="space-y-1">
                        <p className="text-sm text-gray-400 font-medium uppercase tracking-wider">Published</p>
                        <h3 className="text-3xl font-black text-emerald-600">{publishedPosts}</h3>
                    </div>
                    <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 shadow-sm shadow-emerald-50">
                        <CheckCircle className="w-7 h-7" />
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between hover:scale-[1.02] transition-transform">
                    <div className="space-y-1">
                        <p className="text-sm text-gray-400 font-medium uppercase tracking-wider">Live View</p>
                        <h3 className="text-3xl font-black text-orange-600">Open</h3>
                    </div>
                    <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 shadow-sm shadow-orange-50">
                        <Eye className="w-7 h-7" />
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <section className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-8">
                    <div className="space-y-1">
                        <h3 className="text-xl font-bold text-gray-900">Recent Articles</h3>
                        <p className="text-sm text-gray-400">Your most recently updated blog posts.</p>
                    </div>
                    <a
                        href="/admin/blog"
                        className="text-orange-600 font-bold hover:underline transition-all text-sm flex items-center gap-1 group"
                    >
                        View All Posts <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                </div>

                {latestPosts.length === 0 ? (
                    <div className="text-center py-16 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                        <p className="text-gray-400 font-medium">No blog posts found yet.</p>
                        <a
                            href="/admin/blog/new"
                            className="mt-4 bg-orange-600 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-orange-700 transition-all inline-block shadow-lg shadow-orange-100"
                        >
                            Create Your First Post
                        </a>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="text-gray-400 text-xs font-bold uppercase tracking-widest border-b border-gray-50">
                                    <th className="pb-4">Title</th>
                                    <th className="pb-4">Status</th>
                                    <th className="pb-4">Date</th>
                                    <th className="pb-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {latestPosts.map((post: any) => (
                                    <tr key={post.id} className="group hover:bg-gray-50/50 transition-all cursor-pointer">
                                        <td className="py-5 font-bold text-gray-900">
                                            {post.title}
                                            <span className="block text-xs text-gray-400 font-medium truncate max-w-xs mt-1">/{post.slug}</span>
                                        </td>
                                        <td className="py-5">
                                            <span className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border ${post.published
                                                ? "bg-emerald-50 text-emerald-600 border-emerald-100"
                                                : "bg-amber-50 text-amber-600 border-amber-100"
                                                }`}>
                                                {post.published ? "Live" : "Draft"}
                                            </span>
                                        </td>
                                        <td className="py-5 text-sm text-gray-500 font-medium italic">
                                            {new Date(post.createdAt).toLocaleDateString()}
                                        </td>
                                        <td className="py-5 text-right">
                                            <a
                                                href={`/admin/blog/edit/${post.id}`}
                                                className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg font-bold hover:bg-orange-600 hover:text-white transition-all text-xs"
                                            >
                                                Edit
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </section>
        </div>
    );
}
