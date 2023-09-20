import Link from "next/link";

function Home() {
  return (
    <div>
      <h1 className='text-4xl font-semibold text-blue-800'>Home Page</h1>
      <p className='text-white-600'>Welcome to our blog!</p>

      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
