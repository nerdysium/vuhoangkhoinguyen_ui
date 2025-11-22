import { Metadata } from "next";
import connectDB from "@/lib/mongodb";
import Blog from "@/models/Blog";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { slug } = await params;
    await connectDB();
    const blog = await Blog.findOne({ slug });

    if (!blog) {
      return {
        title: "Blog Not Found",
        description: "The blog post you are looking for does not exist.",
      };
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    return {
      title: `${blog.title} | Vu Hoang Khoi Nguyen`,
      description: blog.summary || blog.title,
      openGraph: {
        title: blog.title,
        description: blog.summary || blog.title,
        images: [
          {
            url: blog.backgroundImage,
            width: 1200,
            height: 630,
            alt: blog.title,
          },
        ],
        type: "article",
        publishedTime: blog.createdAt?.toString(),
        authors: ["Vu Hoang Khoi Nguyen"],
      },
      twitter: {
        card: "summary_large_image",
        title: blog.title,
        description: blog.summary || blog.title,
        images: [blog.backgroundImage],
      },
      alternates: {
        canonical: `${baseUrl}/blog/${slug}`,
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Blog | Vu Hoang Khoi Nguyen",
      description: "Blog post by Vu Hoang Khoi Nguyen",
    };
  }
}

export default function BlogDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
