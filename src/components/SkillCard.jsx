import "./SkillCard.css";
import React, { useRef, useEffect, useState } from "react";

export default function SkillCard(props) {
  const barInnerRef = useRef(null);
  const outerBarRef = useRef(null);

  const [outerBarWidth, setOuterBarWidth] = useState(0);

  useEffect(() => {
    const outerbar = outerBarRef.current;
    if (!outerbar) return;

    const updateWidth = () => {
      setOuterBarWidth(outerbar.offsetWidth);
    }; // Create a ResizeObserver to monitor changes

    const resizeObserver = new ResizeObserver(() => {
      updateWidth();
    }); // Start observing the element

    resizeObserver.observe(outerbar); // Initial width update
    updateWidth();
    return () => {
      // Cleanup observer on unmount
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (barInnerRef.current) {
      console.log(outerBarWidth);
      barInnerRef.current.style.width = `${
        (props.percent * (outerBarWidth - 10)) / 100
      }px`;
    }
  }, [props.percent, outerBarWidth]);

  return (
    <div className="skill-card">
      <h3 id="skill-name">{props.name}</h3>
      <div className="bar-outer" ref={outerBarRef}>
        <div className="bar-inner" ref={barInnerRef}></div>
      </div>
    </div>
  );
}
