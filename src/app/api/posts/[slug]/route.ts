import { getAuthSession } from "@/auth/auth";
import prisma from "@/db/connect";
import { NextResponse } from "next/server";

interface ExtendedPostUpdateInput {
  views: {
    increment: number;
  };
}

// Fetch single post
export const GET = async (
  req: Request,
  { params }: { params: { slug: string } },
) => {
  const { slug } = params;
  try {
    const post = await prisma.post.update({
      where: { slug },
      data: {
        views: {
          increment: 1,
        },
      } as ExtendedPostUpdateInput,
    });

    return new NextResponse(JSON.stringify(post));
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

// Delete a post by slug
export const DELETE = async (
  req: Request,
  { params }: { params: { slug: string } },
) => {
  const { slug } = params;
  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(JSON.stringify({ message: "Not Authenticated!" }));
  }

  try {
    // Delete the post by slug
    const deleteResult = await prisma.post.delete({
      where: {
        slug,
      },
    });

    // Check if the post was successfully deleted
    if (!deleteResult) {
      return new NextResponse("Post not found", { status: 404 });
    }

    return new NextResponse(
      JSON.stringify({ message: "Post deleted successfully" }),
    );
  } catch (error) {
    console.error("Error deleting post:", error);

    // Log the complete error object
    console.error("Complete error object:", error);

    // Return a more detailed error response
    return new NextResponse(
      JSON.stringify({ error: "Database Error", details: error }),
      { status: 500 },
    );
  }
};
