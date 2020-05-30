import React from "react";
import List from "../list/list.component";

import "./section.styles.css";

const Section = ({ title, ...otherProps }) => {
  return (
    <div className="section-container">
      <h2>{title}</h2>
      <div className="section-content">
        <List {...otherProps} />
      </div>
    </div>
  );
};

export default Section;
