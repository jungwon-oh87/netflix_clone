import React from "react";
import MovieList from "../movie-list/movie-list.component";

// import "./upcoming.style.css";
import "../now-playing/now.style.css";

const UpcomingMovies = (props) => {
  return (
    <div className="container">
      <h2>Upcoming Movies</h2>
      <div className="content">
        <MovieList movies={props.movies} />
      </div>
    </div>
  );
};
export default UpcomingMovies;
