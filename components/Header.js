import Link from 'next/link';

export default function Header() {
  return (
  <div>
    <nav className='bg-gray-900 mx-auto flex max-w-8xl items-center justify-between'>
      <div>
        <h1 className='text-white font-medium text-2xl px-5 py-2'>
          <Link className='hover:underline block whitespace-nowrap' href="/">Kenny Mooney</Link></h1>
      </div>
      <ul className='hidden lg:flex'>
        <li className='px-5 py-2'>
          <Link className='text-white font-medium hover:underline block whitespace-nowrap text-lg'
            href="/about">about</Link>
        </li>
        <li className='px-5 py-2'>
          <Link className='text-white font-medium hover:underline block whitespace-nowrap text-lg'
            href="/books">books</Link>
        </li>
      </ul>
    </nav>
  </div>
  )
}