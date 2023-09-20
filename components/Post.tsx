import React from "react";
interface PostProps {
  post: {
    title: string;
    content: string;
    a: string;
 
  };
}

const Post: React.FC<PostProps> = ({ post }) => {
  const { title, content, a } = post;

  return (
    <div className='post-card flex-col'>
      <h2 className='text-xl font-semibold'>{title}</h2>
      <p className='text-400'>{content}</p>
      <a className="px-4" href={a}></a>
    </div>
  );
};

export default Post;
