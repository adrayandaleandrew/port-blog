import BlogPost from './BlogPost';
import BlogPagination from './BlogPagination';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  imageUrl?: string;
  readTime: string;
}

interface BlogListProps {
  posts: BlogPost[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const BlogList = ({ posts, currentPage, totalPages, onPageChange }: BlogListProps) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8">Blog Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {posts.map((post) => (
          <BlogPost key={post.id} {...post} />
        ))}
      </div>
      <BlogPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default BlogList;
