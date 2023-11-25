'use client'

import Link from 'next/link'
import NavbarTools from './../NavbarTools/NavbarTools';
import Logo from './../Logo/Logo';
//import { useEffect } from 'react';
import './Navbar.scss'
import SigninButton from './SigninButton';




const Navbar = () => {
  const scrollToAbout = () => {
    const goalsSection = document.getElementById('about-section');

    if (goalsSection) {
      goalsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToServices = () => {
    const goalsSection = document.getElementById('services-section');

    if (goalsSection) {
      goalsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToContact = () => {
    const goalsSection = document.getElementById('contact-section');

    if (goalsSection) {
      goalsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="navbar py-4">
        <div className="container">
          <Logo />
          <div className="list">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
            </svg>
          </div>
          <ul >
            <Link href="/" >home</Link>
            <Link href="/" onClick={scrollToServices}>services</Link>
            {/*<Link href="/blog" >blog</Link>*/}
            <Link href="/" onClick={scrollToContact}>contact us</Link>
            <Link href="/" passHref onClick={scrollToAbout}>about us</Link>
            <SigninButton />
            
          </ul>
          <NavbarTools />
        </div>
      </div>
    </>
  );
}

export default Navbar;
