"use client";




export async function getPostDetails(postId: any) {
    const post =  await fetch('https://jsonplaceholder.typicode.com/posts'+postId)
    return post.json();
}

export async function PostPage ({ params }: any) {
    const postDetails = await getPostDetails(params.postId);

  return (
    <>
        <h1>{postDetails.title}</h1>
        <pre>{JSON.stringify(postDetails, null, 2)}</pre>
        {/* <Comment id={postDetails.id}/> */}
    </>
  )
}

export default getPostDetails
