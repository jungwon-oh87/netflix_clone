import React from "react";
import List from "../list/list.component";

import "./section.styles.css";

const Section = (props) => {
  return (
    <div className="section-container">
      <h2>{props.title}</h2>
      <div className="section-content">
        <List data={props.data} category={props.category} />
      </div>
    </div>
  );
};

export default Section;
