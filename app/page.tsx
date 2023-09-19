
import '../app/globals.css';
import Link from "next/link"
export default function Home() {
  return (
    <>
      <body>
        <header className='bg-gray-800 text-white'>
          <div className='container mx-auto py-4'>
            <nav className='flex justify-between items-center'>
              <div className='text-2xl font-bold'>My Blog</div>
              <ul className='flex space-x-4'>
                <li>
            <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
          </li>
                <li>
                  <Link href='/blog' className='text-gray-300 hover:text-white'>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href='/about'
                    className='text-gray-300 hover:text-white'
                  >
                    About
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <div className='flex justify-center items-center h-screen flex-col'>
          <h1 className='text-3xl font-semibold text-blue-800'>Home Page</h1>
          <p className='text-gray-600'>Welcome to our blog!</p>
        </div>
      </body>
    </>
  );
}









