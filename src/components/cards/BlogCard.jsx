import { ArrowRight } from "lucide-react";

const BlogCard = ({ blog, onReadMore }) => {
  return (
    <div className="shrink-0 w-72 md:w-80 group">
      <div className="relative overflow-hidden rounded-xl bg-gray-100 mb-4 h-48">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      <h3 className="font-semibold text-lg mb-3 line-clamp-2">{blog.title}</h3>

      <button
        onClick={() => onReadMore(blog)}
        className="flex items-center gap-2 text-sm font-bold text-[#2a498c]"
      >
        Read More
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default BlogCard;
