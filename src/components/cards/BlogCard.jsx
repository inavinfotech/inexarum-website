import { ArrowRight } from "lucide-react";

const BlogCard = ({ blog, onReadMore }) => {
  return (
    <div 
      className="w-full group cursor-pointer transition-all duration-300 hover:-translate-y-1" 
      onClick={() => onReadMore(blog)}
    >
      <div className="relative overflow-hidden rounded-lg bg-slate-100 mb-3 h-48 border border-slate-100 shadow-xs group-hover:shadow-md transition-shadow duration-300">
        <img
          src={blog.image}
          alt={blog.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <h3 className="font-bold text-slate-800 text-sm md:text-base mb-1.5 group-hover:text-[#2a498c] transition-colors line-clamp-2">
        {blog.title}
      </h3>

      <div className="flex items-center gap-1 text-[11px] font-semibold text-[#2a498c]">
        <span>Read Article</span>
        <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
      </div>
    </div>
  );
};

export default BlogCard;
