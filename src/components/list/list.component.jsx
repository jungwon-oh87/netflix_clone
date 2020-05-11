import React from "react";
import MovieCard from "../movie-card/movie-card.component";

import "./list.styles.css";

const List = (props) => {
  return (
    <div className="list-container">
      {props.movies.map((m) => {
        return <MovieCard key={m.id} movie={m} category={props.category} />;
      })}
    </div>
  );
};

export default List;
