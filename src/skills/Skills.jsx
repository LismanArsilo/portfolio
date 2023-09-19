import { TbBrandReactNative, TbBrandLaravel } from "react-icons/tb";
import { DiJavascript1 } from "react-icons/di";
import { IoLogoSass } from "react-icons/io";
import { SiCss3, SiMysql } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaHtml5, FaGitSquare } from "react-icons/fa";

import "./skills.css";

const Skills = () => {
  return (
    <div id="skills" className="skills section container">
      <div className="sectionTitle">
        <span className="titleNumber">02.</span>
        <h5 className="titleText">
          Skills
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>

      <div className="skillsContainer grid">
        {/* Skill Group */}
        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title">Web Development</h2>
            <span className="subTitle">2 Year Experience</span>
          </div>
          <div className="generalSkills">
            {/* Single Skill */}
            <div className="singleSkill">
              <div className="iconBox flex">
                <TbBrandReactNative className="icon" />
              </div>
              <span className="skillName">React JS</span>
            </div>
            <div className="singleSkill">
              <div className="iconBox flex">
                <DiJavascript1 className="icon" />
              </div>
              <span className="skillName">Javascript</span>
            </div>
            <div className="singleSkill">
              <div className="iconBox flex">
                <IoLogoSass className="icon" />
              </div>
              <span className="skillName">Sass</span>
            </div>
            <div className="singleSkill">
              <div className="iconBox flex">
                <SiCss3 className="icon" />
              </div>
              <span className="skillName">CSS 3</span>
            </div>
            <div className="singleSkill">
              <div className="iconBox flex">
                <FaHtml5 className="icon" />
              </div>
              <span className="skillName">HTML 5</span>
            </div>
            <div className="singleSkill">
              <div className="iconBox flex">
                <TbBrandLaravel className="icon" />
              </div>
              <span className="skillName">Laravel</span>
            </div>
          </div>
        </div>

        {/* Skill Other */}
        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title">Other Skills</h2>
            <span className="subTitle">2 Year Experience</span>
          </div>
          <div className="generalSkills">
            {/* Single Skill */}
            <div className="singleSkill">
              <div className="iconBox flex">
                <FaGitSquare className="icon" />
              </div>
              <span className="skillName">Git</span>
            </div>
            <div className="singleSkill">
              <div className="iconBox flex">
                <AiFillGithub className="icon" />
              </div>
              <span className="skillName">Github</span>
            </div>
            <div className="singleSkill">
              <div className="iconBox flex">
                <SiMysql className="icon" />
              </div>
              <span className="skillName">MySQL</span>
            </div>
            <div className="singleSkill">
              <div className="iconBox flex">
                <SiCss3 className="icon" />
              </div>
              <span className="skillName">Postgre</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
