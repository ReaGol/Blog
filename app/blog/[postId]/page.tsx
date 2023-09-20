

import CommentForm from '@/components/CommentForm';
import React from 'react';
import Post from '../../../components/Post'; 

interface BlogPost {
  id: number;
  title: string;
  content: string;
  a: string

}

const BlogPage = ({ posts }: { posts: BlogPost[] }) => {
  return (
    <div className='content-center justify-center'>
      {posts.map((post) => (
        <div key={post.id} className="post-card">
          <Post post={post} />
          
        </div>
      ))}
    
    </div>
  );
};

export default BlogPage;
