import "./project.css";
import dataProject from "../data/projects";
import { useState } from "react";
import { PiGithubLogoLight } from "react-icons/pi";
import { SiWebauthn } from "react-icons/si";
import Presence from "../assets/img/presence.png";

const Projcets = () => {
  const [projects, setProjects] = useState(dataProject);
  return (
    <section id="projects" className="projects section container">
      <div className="sectionTitle">
        <span className="titleNumber">03.</span>
        <h5 className="titleText">
          Projects
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>

      <div className="projectContainer grid">
        <div className="generalProject grid">
          {projects &&
            projects.map((project) => {
              return (
                <div className="singleProject" key={project.id}>
                  <div className="iconProjects">
                    <a href={project.github} target="_blank">
                      <PiGithubLogoLight className="icon" />
                    </a>
                    <a href={project.liveLink} target="_blank">
                      <SiWebauthn className="icon" />
                    </a>
                  </div>
                  <img
                    src={project.image}
                    alt="Image Project"
                    className="imageProject"
                  />
                  <div className="projectInformation">
                    <h1 className="projectTitle">{project.title}</h1>
                    <p className="projectDescTitle">{project.desc}</p>
                  </div>
                  <div className="projectTech">
                    <div className="techFramework">
                      <span className="framework">{project.framework}</span>
                    </div>
                    <div className="groupTech">
                      <small className="tech">{project.tech1}</small>
                      <small className="tech">{project.tech2}</small>
                      <small className="tech">{project.tech3}</small>
                      <small className="tech">{project.tech4}</small>
                      <small className="tech">{project.tech5}</small>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Projcets;
