import React, { useState } from 'react';
import MobileMenu from '../MobileMenu/MobileMenu';
import NavBar from '../NavBar/NavBar';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggle = () => {
    setMobileMenuOpen(value => !value);
  }

  const closeMenu = () => {
    setMobileMenuOpen(false);
  }
  
  return (
    <div>
      <NavBar handleToggle={handleToggle} />
      {mobileMenuOpen ? <MobileMenu closeMenu={closeMenu}/> : null}
    </div>
  )
}