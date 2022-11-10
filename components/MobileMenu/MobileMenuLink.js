import Link from 'next/link';

export default function MobileMenuLink({ closeMenu, title }) {
  return (
    <li className='text-black px-5 py-2 hover:bg-gray-900 hover:text-white'>
      <Link className='font-medium block whitespace-nowrap text-lg'
        href={`/${title}`} onClick={closeMenu}>{title}</Link>
    </li>
  )
}