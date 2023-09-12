import { useState } from "react";
import "./navbar.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  const [active, setActive] = useState("navBar");

  const showNavbar = () => {
    setActive("navBar activeNavbar");
  };

  const removeNavbar = () => {
    setActive("navBar");
  };

  // code statement add background color the header
  const [activeHeader, setActiveHeader] = useState("header");
  const addBackground = () => {
    if (window.scrollY >= 10) {
      setActiveHeader("header activeHeader");
    } else {
      setActiveHeader("header");
    }
  };
  window.addEventListener("scroll", addBackground);
  return (
    <header className={activeHeader}>
      <div className="headLogo">
        <h1 className="logo">
          <a href="#home">La.</a>
        </h1>
      </div>

      <div className={active}>
        <ul className="navLists">
          <li className="navItem">
            <a href="#about" className="navLink">
              1. <span>About</span>
            </a>
          </li>
          <li className="navItem">
            <a href="#skills" className="navLink">
              2. <span>Skills</span>
            </a>
          </li>
          <li className="navItem">
            <a href="#projects" className="navLink">
              3. <span>Projects</span>
            </a>
          </li>
          <li className="navItem">
            <a href="#contact" className="navLink">
              4. <span>Contact</span>
            </a>
          </li>
          <button className="btn">
            <a href="#">Resume</a>
          </button>
          <div onClick={() => removeNavbar()} className="navClose">
            <AiFillCloseCircle className="icon" />
          </div>
        </ul>
      </div>

      <div onClick={() => showNavbar()} className="navToggle">
        <TbGridDots className="icon" />
      </div>
    </header>
  );
};

export default Navbar;
