import Link from 'next/link';
import NavBarLink from './NavBarLink';
import MobileMenuButton from '../MobileMenu/MobileMenuButton';
import { MenuItems } from '../../lib/MenuItems';

export default function NavBar({ handleToggle }) {
  return (
    <nav className='bg-gray-900 mx-auto flex max-w-8xl items-center justify-between'>
      <div>
        <h1 className='text-white font-medium text-2xl px-5 py-2'>
          <Link className='hover:underline block whitespace-nowrap' href="/">Kenny Mooney</Link></h1>
      </div>
      <ul className='hidden lg:flex'>
        {MenuItems.map((item) => (<NavBarLink key={item} linkName={item} />))}
      </ul>
      <MobileMenuButton handleToggle={handleToggle} />
    </nav>
  )
}