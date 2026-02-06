import { useParams, useNavigate } from 'react-router-dom';
import { blogData } from './blog_explorer';
import BlogDisplay from './blog_display';

const BlogSlugPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const blog = blogData.find(b => b.slug === slug);

  if (!blog) {
    return (
      <div className="p-10 text-center text-red-600 text-xl">
        Blog not found.
        <button
          className="ml-4 text-blue-600 underline"
          onClick={() => navigate('/blogs')}
        >
          Back to all blogs
        </button>
      </div>
    );
  }

  return <BlogDisplay blog={blog} onBackClick={() => navigate('/blogs')} />;
};

export default BlogSlugPage;
