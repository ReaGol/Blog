import Link from "next/link";
import Post from "../../components/Post";
import Comment from "./[postId]/Comment"

async function getAllPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Failed to fetch posts.");
    }
    
    
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function BlogPost() {
  const posts = await getAllPosts();

  return (
    <div className='mx-4'>
      <Link className='text-blue-600' href={"/"}>
        Back
      </Link>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            
            <Post post={post} /> <Comment />
          </li>
        ))}
      </ul>

    </div>
  );
}

export default BlogPost;
