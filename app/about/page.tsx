import Link from "next/link";
function about() {
  return (
    <div className="container mx-auto">
      <h1 className='flex-row text-center text-2xl my-4'>About this blog</h1>
      <h4>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita modi
        animi veniam. Aspernatur adipisci libero laboriosam consequuntur totam
        accusamus delectus excepturi, sed, eaque sit quis officia dolores
        laudantium inventore facere! Sed molestias eligendi voluptatum quo
        necessitatibus error quas nostrum optio cupiditate! Necessitatibus
        tenetur, tempora maxime porro impedit perspiciatis est. Deleniti
        voluptates sequi sed laboriosam numquam consequuntur enim dolorem
        repellat quos! Dolores tempore odio ullam odit corporis? Perferendis
        officia blanditiis, sapiente reiciendis ipsum ut voluptates doloribus
        exercitationem adipisci vitae, dolorem nesciunt quae ipsa aperiam autem
        modi! Magnam ex similique in ad?
      </h4>
      <Link className='text-blue-600' href={"/"}>
        Back
      </Link>
    </div>
  );
}

export default about