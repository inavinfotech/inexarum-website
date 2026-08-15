import { useNavigate, Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { BLOGS } from "../../data/blogs";
import BlogCard from "../../components/cards/BlogCard";

const BlogsSection = () => {
  const navigate = useNavigate();

  const handleReadMore = (blog) => {
    navigate(`/blogs/${blog.id}`);
  };

  return (
    <section id="blogs" className="py-12 bg-[#FCFDFE] border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
              Featured Insights
            </h2>
          </div>

          <Link
            to="/blogs"
            className="inline-flex items-center text-xs md:text-sm font-semibold text-[#2a498c] hover:underline"
          >
            View all articles
            <ChevronRight size={14} className="ml-0.5" />
          </Link>
        </div>

        {/* 3-Column Standard Grid (Classy Standard UI) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOGS.slice(0, 3).map((blog) => (
            <div key={blog.id} className="w-full flex justify-center">
              {/* Force card to fill container width on grid */}
              <div className="w-full select-none">
                <BlogCard blog={blog} onReadMore={handleReadMore} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
