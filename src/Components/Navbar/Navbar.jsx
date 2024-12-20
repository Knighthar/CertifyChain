import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/Screenshot_2024-04-25_223314-removebg.png';
import menu_icon from '../../assets/menu-icon.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup on component unmount to avoid memory leaks
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMobileMenu((prev) => !prev); // Cleaner toggle
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className="logo" />
      <ul className={`menu ${mobileMenu ? 'show-mobile-menu' : 'hide-mobile-menu'}`}>
        <li><a href="#background">Home</a></li>
        <li><a href="#guide">Guide</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#users">Users</a></li>
        <li>
          <button className="btn">
            <a href="#register">Register</a>
          </button>
        </li>
      </ul>
      <img
        src={menu_icon}
        alt="Menu Icon"
        className="menu-icon"
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;
