import React from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import BlogCard from "../components/cards/BlogCard";
import { BLOGS } from "../constants/blogs";

const AllBlogs = () => {
  const navigate = useNavigate();

  const handleReadMore = (blog) => {
    navigate(`/blogs/${blog.id}`);
  };

  return (
    <div className="min-h-dvh bg-[#F7F7FA] py-24">
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
