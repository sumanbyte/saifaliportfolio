import React from "react";
import ChangeUIButton from "./ChangeUIButton";
import Socials from "./Socials"

const Projects = ({verticalsocials}) => {
  
  return (
    <>
    <ChangeUIButton/>
    {verticalsocials && <Socials verticalsocials={verticalsocials} />}
    <div className="projects-section">
      <div className="project-card">
        <div className="project-card-items">
          <div className="project-image">
            <img src={require("../../img/project-img.png")} alt="project" />
          </div>
          <div className="project-text">
            <p>Build a Doctor Connected App</p>
          </div>
          <div className="project-view-btn">
             <a href="/projects"><button>View Project</button></a>
          </div>
        </div>
        <div className="project-numbering">
          <div>01</div>
        </div>
      </div>

      <div className="project-card">
        <div className="project-numbering">
          <div>02</div>
        </div>
        <div className="project-card-items">
          <div className="project-image">
            <img src={require("../../img/project-img.png")} alt="project" />
          </div>
          <div className="project-text">
            <p>Build a Doctor Connected App</p>
          </div>
          <div className="project-view-btn">
             <a href="/projects"><button>View Project</button></a>
          </div>
        </div>
      </div>

      <div className="project-card">
        <div className="project-card-items">
          <div className="project-image">
            <img src={require("../../img/project-img.png")} alt="project" />
          </div>
          <div className="project-text">
            <p>Build a Doctor Connected App</p>
          </div>
          <div className="project-view-btn">
             <a href="/projects"><button>View Project</button></a>
          </div>
        </div>
        <div className="project-numbering">
          <div>03</div>
        </div>
      </div>

      <div className="project-card">
        <div className="project-numbering">
          <div>04</div>
        </div>
        <div className="project-card-items">
          <div className="project-image">
            <img src={require("../../img/project-img.png")} alt="project" />
          </div>
          <div className="project-text">
            <p>Build a Doctor Connected App</p>
          </div>
          <div className="project-view-btn">
             <a href="/projects"><button>View Project</button></a>
          </div>
        </div>
      </div>

    </div>
    </>
  );
};

export default Projects;
