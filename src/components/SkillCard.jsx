import "./SkillCard.css";
import React, { useRef, useEffect } from "react";

export default function SkillCard(props) {
  const barInnerRef = useRef(null);

  useEffect(() => {
    if (barInnerRef.current) {
      barInnerRef.current.style.width = `${props.percent * 7}px`;
    }
  }, [props.percent]);

  return (
    <div className="skill-card">
      <h3 id="skill-name">{props.name}</h3>
      <div className="bar-outer">
        <div className="bar-inner" ref={barInnerRef}></div>
      </div>
    </div>
  );
}
