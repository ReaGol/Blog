'use client'

function Comment(postId:any) {

const handleSubmit = (data: any) => {
    console.log(data);
    
}
  return (
    <form action="" onSubmit={handleSubmit}>
        <input type="text" />
        <button onClick={handleSubmit}>Submit comment</button>
    </form>
  )
}

export default Comment