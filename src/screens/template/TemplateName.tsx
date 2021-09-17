import React, { useEffect } from "react";
import "./TemplateName.css";

const TemplateName = () => {
  const workspace = () => {};

  useEffect(() => {
    workspace();
  }, []);

  return (
    <div>
      <h1>TemplateName component</h1>
      <h5>All magic happens in the console log</h5>
    </div>
  );
};

export default TemplateName;
