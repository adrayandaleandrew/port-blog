interface BlogPostProps {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  imageUrl?: string;
  readTime: string;
}

const BlogPost = ({ title, excerpt, date, author, category, imageUrl, readTime }: BlogPostProps) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden">
      {imageUrl && (
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      )}
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
          <span>{date}</span>
          <span>•</span>
          <span>{readTime} read</span>
        </div>
        <h2 className="text-xl font-bold mb-2 hover:text-blue-600">{title}</h2>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">By {author}</span>
          <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600">
            {category}
          </span>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
