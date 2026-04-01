import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import SectionHeader from "../../components/SectionHeader";

import { BLOGS } from "../../constants/blogs";
import BlogCard from "../../components/cards/BlogCard";
import HireSection from "../../components/HireSection";

const BlogsSection = () => {
  const navigate = useNavigate();

  const handleReadMore = (blog) => {
    navigate(`/blogs/${blog.id}`);
  };

  return (
    <div id="blogs" className="min-auto bg-white py-10 md:py-16">
      {/* Reusable Section Header */}
      <SectionHeader subtitle="Featured" title="Blogs" />

      {/* Blogs Slider */}
      <div className="flex overflow-x-auto gap-8 px-4 md:px-12 pb-8 snap-x no-scrollbar">
        {BLOGS.map((blog) => (
          <div key={blog.id} className="snap-start">
            <BlogCard blog={blog} onReadMore={handleReadMore} />
          </div>
        ))}
      </div>

      {/* Footer Link */}
      <div className="flex justify-end mt-8 max-w-7xl mx-auto px-4 sm:px-8">
        <Link
          to="/blogs"
          className="flex items-center text-[#8c97e7] font-bold text-lg hover:underline"
        >
          Read all blogs <ChevronRight className="ml-2" />
        </Link>
      </div>

      {/* Hire Section */}
      {/* <HireSection /> */}
    </div>
  );
};

export default BlogsSection;
