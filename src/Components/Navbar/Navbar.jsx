import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo1 from '../../assets/logo-01.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll';

const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
    },[]);

    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = ()=>{
      setMobileMenu(!mobileMenu);
    }

    const closeMenu = () => {
        setMobileMenu(false);
    }

  return (
    <nav className={`containers ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo1} alt="" className='logo' />
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={-130} duration={500} onClick={closeMenu}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-220} duration={500} onClick={closeMenu}>Our Services</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500} onClick={closeMenu}>About us</Link></li>
        <li><Link to='campus' smooth={true} offset={-220} duration={500} onClick={closeMenu}>Why Choose Us?</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-220} duration={500} onClick={closeMenu}>Flyanza Review</Link></li>
        <li><Link to='contact' smooth={true} offset={-220} duration={500} onClick={closeMenu}>Contact us</Link></li>
        {/* <li><a href="/loginpage" className='btn'>Login</a></li> */}
        {/* <li><a href="/flight" className='btn' onClick={closeMenu}>BOOK FLIGHT</a></li> */}
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar
