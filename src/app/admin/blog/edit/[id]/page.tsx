import { prisma } from "@/lib/prisma";
import BlogForm from "@/components/admin/BlogForm";
import { notFound } from "next/navigation";
export const dynamic = 'force-dynamic';

export default async function EditBlogPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const post = await prisma.post.findUnique({
        where: { id },
    });

    if (!post) {
        notFound();
    }

    return <BlogForm post={post} isEdit />;
}
