import { TbCloudDownload } from "react-icons/tb";
import "./about.css";
import lisman from "../assets/img/LismanArsilo.png";

const About = () => {
  return (
    <section id="about" className="about section container">
      <div className="sectionTitle">
        <span className="titleNumber">01.</span>
        <h5 className="titleText">
          About Me
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>

      <div className="sectionContent grid">
        <div className="textSection">
          <h4>
            I'm a success-driven, determined Web Developer. I have experience
            using HTML, Sass, Javascript, and PHP to build accessible
            component-based web pages and systems. <br />
            Abilty to deliver quality results while collaborating in rapidly
            changing work environments and team compositions and i use databases
            MySQL, postgresqSQL and use framework like laravel, reactJS,
            expressJS.
            <br />A possionate person willing to learn more technologies to
            become a better developer than i was yesterday. So determined and
            result oriented
          </h4>
          <div className="btnAbout">
            <a href="public/CV - Lisman Arsilo.pdf" download className="flex">
              Download CV <TbCloudDownload />
            </a>
          </div>
        </div>

        <div className="headImgAbout">
          <img src={lisman} alt="Lisman Arsilo" className="imgAbout" />
        </div>
      </div>
    </section>
  );
};

export default About;
