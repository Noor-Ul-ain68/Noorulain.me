import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";

export async function GET() {
    try {
        const posts = await prisma.post.findMany({
            orderBy: { createdAt: "desc" },
        });
        return NextResponse.json(posts);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
    }
}

export async function POST(request: Request) {
    const session = await auth();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    try {
        const body = await request.json();
        const post = await prisma.post.create({
            data: {
                title: body.title,
                slug: body.slug,
                content: body.content,
                excerpt: body.excerpt,
                featuredImage: body.featuredImage,
                published: body.published || false,
                metaTitle: body.metaTitle,
                metaDescription: body.metaDescription,
            },
        });
        return NextResponse.json(post);
    } catch (error) {
        return NextResponse.json({ error: "Failed to create post" }, { status: 500 });
    }
}
