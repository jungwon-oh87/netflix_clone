import React from "react";
import MovieCard from "../movie-card/movie-card.component";

import "./movie-list.style.css";

const MovieList = (props) => {
  return (
    <div className="movie-list">
      {props.movies.map((m) => {
        return <MovieCard key={m.id} movie={m} />;
      })}
    </div>
  );
};

export default MovieList;
