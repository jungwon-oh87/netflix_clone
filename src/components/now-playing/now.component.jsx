import React from "react";
import MovieList from "../movie-list/movie-list.component";

import "./now.style.css";

const NowPlaying = (props) => {
  return (
    <div className="container">
      <h2>Now Playing</h2>
      <div className="content">
        <MovieList movies={props.movies} />
      </div>
    </div>
  );
};
export default NowPlaying;
