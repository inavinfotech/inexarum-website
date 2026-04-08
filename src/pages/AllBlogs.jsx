import React from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import BlogCard from "../components/cards/BlogCard";
import { BLOGS } from "../constants/blogs";
import SEOHead from "../components/SEOHead";

const AllBlogs = () => {
  const navigate = useNavigate();

  const handleReadMore = (blog) => {
    navigate(`/blogs/${blog.id}`);
  };

  return (
    <div className="min-h-dvh bg-[#F7F7FA] py-24">
      <SEOHead
        title="Blog"
        description="Read the latest insights on web development, AI technology, system design, and software engineering from the iNexarum team."
        path="/blogs"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://inexarum.in/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://inexarum.in/blogs" }
          ]
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          subtitle="Discover our latest thoughts, ideas, and expertise."
          title="All Blogs"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {BLOGS.map((blog) => (
            <div key={blog.id} className="flex justify-center">
              <BlogCard blog={blog} onReadMore={handleReadMore} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
