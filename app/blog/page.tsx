import Link from "next/link";

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
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default BlogPost;
