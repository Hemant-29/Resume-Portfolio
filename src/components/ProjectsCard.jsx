import { useEffect } from "react";
import React from "react";
import "./ProjectsCard.css";

function ProjectsCard(props) {
  return (
    <div className="ProjectsCard">
      <div className="project--image-section">
        <img src={props.image} alt="Project Image" />
      </div>
      <div className="project--description">
        <div className="project--details">
          <h2 className="project--name">{props.name}</h2>
          <h3 className="project--tech">{props.tech}</h3>
          <a href={props.website} target="_blank" className="project--website">
            Link to the Project
          </a>
        </div>

        <div className="project--about-section">
          <div className="about-section--about">
            <h4>About</h4>
          </div>
          <div></div>
          <div className="project--about-section--p">
            <p>{props.aboutText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsCard;
