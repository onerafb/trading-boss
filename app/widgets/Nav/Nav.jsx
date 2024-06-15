"use client";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaWindowClose } from "react-icons/fa";
import { useState } from "react";
import Link from 'next/link';
import { useRouter } from 'next/router'; // Import useRouter hook from Next.js
import "./nav.css";

const Header = () => {
  const [nav, setNav] = useState(true);
  // const router = useRouter(); // useRouter hook

  const handleToggle = () => {
    setNav((prev) => !prev);
  };

  // Function to scroll to sections
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    handleToggle(); // Close the navigation menu after clicking on a link
  };

  return (
    <header>
      <div className="header-div">
        <div className="header-div-childOne">
          <a href="/" className="header-link-logo">
            <span className="header-logo-img">
              <span>◈</span> TRADING BOSS <span>◈</span>{" "}
            </span>
          </a>
          <form className="header-input"></form>
        </div>
        <nav className={nav ? "nav" : "nav nav-active"}>
          <ul>
            <li onClick={() => scrollToSection('home')}>
              <a className="header-link">Home</a>
            </li>
            <li onClick={() => scrollToSection('about')}>
              <a className="header-link">About</a>
            </li>
            <li onClick={() => scrollToSection('telegram')}>
              <a className="header-link">Telegram</a>
            </li>
            <li onClick={() => scrollToSection('reviews')}>
              <a className="header-link">Reviews</a>
            </li>
            <li onClick={() => scrollToSection('qna')}>
              <a className="header-link">QnA</a>
            </li>
            <li onClick={() => scrollToSection('contact')}>
              <a className="header-link">Contact</a>
            </li>
          </ul>
          <button className="close" onClick={handleToggle}>
            <FaWindowClose />
          </button>
        </nav>
        <button className="bars" onClick={handleToggle}>
          <FaBarsStaggered />
        </button>
      </div>
    </header>
  );
};

export default Header;
