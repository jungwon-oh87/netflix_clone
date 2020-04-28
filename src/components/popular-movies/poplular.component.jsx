import React from "react";
import "../now-playing/now.style.css";
import MovieList from "../movie-list/movie-list.component";

const PopularMovies = (props) => {
  return (
    <div className="container">
      <h2>Popular Movies</h2>
      <div className="content">
        <MovieList movies={props.movies} />
      </div>
    </div>
  );
};

export default PopularMovies;
