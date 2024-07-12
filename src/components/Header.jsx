import { useEffect } from "react";
import React from "react";
import "./Header.css";

export default function Header(props) {
  const [circleStyle, setCircleStyle] = React.useState({
    position: "absolute",
    left: "25px",
  });

  useEffect(() => {
    setCircleStyle((oldStyle) => ({
      ...oldStyle,
      left: props.darkMode ? "7px" : "30px",
    }));
  }, [props.darkMode]);

  return (
    <header className="Header">
      <h1 id="PersonName">Hemant Bagaria</h1>
      <nav className="navButtons">
        <li>
          <button onClick={()=>{props.goToFunction(".qualifications")}}>Education</button>
        </li>
        <li>
          <button onClick={()=>props.goToFunction(".skillSection")}>Skills</button>
        </li>
        <li>
          <button onClick={()=>props.goToFunction(".project-container")}>Projects</button>
        </li>
      </nav>
      <button onClick={props.toggleMode} className="toggle">
        <svg
          style={circleStyle}
          id="toggle--circle"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="18" height="18" rx="9" fill="#5671A6" />
        </svg>
        <svg
          id="toggle--rect"
          width="54"
          height="30"
          viewBox="0 0 54 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1"
            y="1"
            width="52"
            height="28"
            rx="14"
            stroke="#5671A6"
            stroke-width="2"
          />
        </svg>
      </button>
    </header>
  );
}
