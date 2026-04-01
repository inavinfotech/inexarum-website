import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft, Loader2 } from "lucide-react";
import { BLOGS } from "../constants/blogs";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app this might be an API call
    const foundBlog = BLOGS.find((b) => b.id === id);
    setBlog(foundBlog);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-dvh flex items-center justify-center">
        <Loader2 className="animate-spin text-[#2a498c] w-8 h-8" />
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-dvh flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Blog not found</h2>
        <Link to="/" className="text-[#2a498c] hover:underline">
          Return to home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-dvh bg-white py-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center text-sm text-gray-500 hover:text-[#2a498c] mb-8 transition-colors"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to all blogs
        </Link>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
          {blog.title}
        </h1>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full lg:w-1/2 h-auto max-h-[500px] object-cover rounded-3xl mb-8 lg:mb-12 shadow-md"
          />

          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-6">
              This is where the detailed content for the blog would go. You can
              expand this page to include rich text formatting, additional
              images, author information, publish dates, and more detailed
              analysis.
            </p>
            <p className="mb-6">
              For now, this serves as a placeholder template that demonstrates
              the new routing structure. We successfully navigated from the main
              landing page to this specific blog content page using React
              Router.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
