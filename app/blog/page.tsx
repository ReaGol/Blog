import Link from "next/link";
import Post from "../../components/Post";

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
    <div>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Post post={post} />{" "}
            {/* Render each post using the Post component */}
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>

      <Link className='text-blue-600' href={"/"}>
        Back
      </Link>
    </div>
  );
}

export default BlogPost;
