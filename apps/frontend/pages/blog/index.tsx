import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { fetchPosts } from '../../lib/api';

const BlogIndex: React.FC = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    getPosts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id} className="mb-4">
              <Link href={`/blog/${post.id}`}>
                <a className="text-2xl font-semibold text-blue-500 hover:underline">
                  {post.title}
                </a>
              </Link>
              <p className="text-gray-600">{post.author.username}</p>
              <p className="text-gray-800">{post.content.substring(0, 100)}...</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BlogIndex;
