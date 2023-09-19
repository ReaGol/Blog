'use client'

function Comment(postId:any) {

const handleSubmit = (data: any) => {
    console.log(data);
    
}
  return (
    <div className='post-card'>
      {" "}
      <form className="flex-col" action='' onSubmit={handleSubmit}>
        <input type='text' />
        <button onClick={handleSubmit}>Submit comment</button>
      </form>
    </div>
  );
}

export default Comment