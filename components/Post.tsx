import React from "react";
interface PostProps {
  post: {
    title: string;
    content: string;
 
  };
}

const Post: React.FC<PostProps> = ({ post }) => {
  const { title, content } = post;

  return (
    <div className='post-card'>
      <h2 className='text-xl font-semibold'>{title}</h2>
      <p className='text-gray-600'>{content}</p>
    </div>
  );
};

export default Post;
