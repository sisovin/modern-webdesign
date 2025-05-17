import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fetchPostById } from '../../lib/api';

const BlogPostDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (id) {
      const getPost = async () => {
        try {
          const data = await fetchPostById(id as string);
          setPost(data);
        } catch (error) {
          console.error(`Error fetching post with id ${id}:`, error);
        }
      };

      getPost();
    }
  }, [id]);

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-4">By {post.author.username}</p>
      <div className="prose">
        {post.content}
      </div>
    </div>
  );
};

export default BlogPostDetail;
