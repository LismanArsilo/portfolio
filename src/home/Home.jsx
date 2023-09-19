import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { TbArrowBigRightLines, TbChevronsDown } from "react-icons/tb";
import "./home.css";

const Home = () => {
  return (
    <section id="home" className="home section">
      {/* This div be only visible */}
      <div className="leftIcons">
        <div className="socials grid">
          <a href="https://github.com/LismanArsilo" target="_blank">
            <AiFillGithub className="icon" />
          </a>
          <a href="https://www.instagram.com/lismanarsilo/" target="_blank">
            <AiOutlineInstagram className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/lisman-arsilo-1104a6202/"
            target="_blank"
          >
            <BsLinkedin className="icon" />
          </a>
          <div className="lineHome"></div>
        </div>
      </div>

      {/* Home Content */}
      <div className="container containerHome">
        <span className="introHome">Hi my name is ,</span>
        <h1 className="titleHome">Lisman Arsilo</h1>
        <span className="subTitleHome">
          I developer scalable web based Applications, Software and Hardware
        </span>
        <p className="paragraphHome">
          I code within required coding standards and styles to serve the exact
          need.
        </p>
        <div className="lowerSectionHome">
          <button className="btnHome">
            <a href="#contact" className="flex">
              Contact Me <TbArrowBigRightLines className="icon" />
            </a>
          </button>
          <div className="scroolHome">
            <a href="#about" className="flex">
              <h6 className="scroll">Scroll Down</h6>
              <TbChevronsDown className="icon" />
            </a>
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="rightHome">
        <div className="emailHome">
          <a href="https://mailto:lismanarsilo@gmail.com" target="_blank">
            lismanarsilo@gmail.com
          </a>
        </div>

        <div className="lineHome"></div>
      </div>
    </section>
  );
};

export default Home;
