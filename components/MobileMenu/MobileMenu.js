import MobileMenuLink from './MobileMenuLink';
import { MobileMenuItems } from '../../lib/MenuItems';

export default function MobileMenu({ closeMenu }) {
  return (
    <div className='lg:hidden block main-menu'>
      <ul className='bg-gray-400'>
        {MobileMenuItems.map((item) => (<MobileMenuLink key={item} closeMenu={closeMenu} title={item} />))}
      </ul>
    </div>
  )
}