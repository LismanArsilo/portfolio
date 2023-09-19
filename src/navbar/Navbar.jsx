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
  const [activerClr, setActiveClr] = useState("");
  const addBackground = () => {
    if (window.scrollY >= 10) {
      setActiveClr("colorNav");
      setActiveHeader("header activeHeader");
    } else {
      setActiveClr("");
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
            <a
              href="#about"
              className={`navLink ${activerClr}`}
              onClick={() => removeNavbar()}
            >
              1. <span>About</span>
            </a>
          </li>
          <li className="navItem">
            <a
              href="#skills"
              className={`navLink ${activerClr}`}
              onClick={() => removeNavbar()}
            >
              2. <span>Skills</span>
            </a>
          </li>
          <li className="navItem">
            <a
              href="#projects"
              className={`navLink ${activerClr}`}
              onClick={() => removeNavbar()}
            >
              3. <span>Projects</span>
            </a>
          </li>
          <li className="navItem" onClick={() => removeNavbar()}>
            <a href="#contact" className={`navLink ${activerClr}`}>
              4. <span>Contact</span>
            </a>
          </li>
          <button className="btn" onClick={() => removeNavbar()}>
            <a href="public/CV - Lisman Arsilo.pdf" download>
              Resume
            </a>
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
