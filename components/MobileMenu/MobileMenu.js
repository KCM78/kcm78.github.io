import MobileMenuLink from './MobileMenuLink';
import { MenuItems } from '../../lib/MenuItems';

export default function MobileMenu({ closeMenu }) {
  return (
    <div className='lg:hidden block main-menu'>
      <ul className='bg-gray-400'>
        {MenuItems.map((item) => (<MobileMenuLink key={item} closeMenu={closeMenu} title={item} />))}
      </ul>
    </div>
  )
}