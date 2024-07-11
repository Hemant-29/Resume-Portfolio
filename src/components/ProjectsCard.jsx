import { useEffect } from "react";
import React from "react";
import './ProjectsCard.css'

function ProjectsCard(props) {
  return (
    <div className="ProjectsCard">
      <div className="image-section">
        <img src={props.image} alt="Project Image" />
      </div>
      <div className="description">
        <div className="details">
          <h2 className="name">{props.name}</h2>
          <h3 className="tech">{props.tech}</h3>
          <a href={props.website} target="_blank" className="website">
            Hosted Link
          </a>
        </div>

        <div className="about-section">
          <div className="about-section--about">
            <h4>About</h4>
            <p>{props.aboutText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsCard;
