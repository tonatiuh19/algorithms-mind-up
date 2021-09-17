import React, { useEffect } from "react";
import "./TwoDArrayDS.css";

const TwoDArrayDS = () => {
  const workspace = () => {
    console.log("gggg");
  };

  useEffect(() => {
    workspace();
  }, []);

  return (
    <div>
      <h1>TwoDArrayDS component</h1>
      <h5>All magic happens in the console log</h5>
    </div>
  );
};

export default TwoDArrayDS;
