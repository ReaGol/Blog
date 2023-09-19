

import React from 'react';
import Post from '../../../components/Post'; 

interface BlogPost {
  id: number;
  title: string;
  content: string;

}

const BlogPage = ({ posts }: { posts: BlogPost[] }) => {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="post-card">
          <Post post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
