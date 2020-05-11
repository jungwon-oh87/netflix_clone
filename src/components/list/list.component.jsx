import React from "react";
import Card from "../card/card.component";

import "./list.styles.css";

const List = (props) => {
  return (
    <div className="list-container">
      {props.data.map((d) => {
        return <Card key={d.id} data={d} category={props.category} />;
      })}
    </div>
  );
};

export default List;
