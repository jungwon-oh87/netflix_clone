import React from "react";

import "./movie-card.style.css";

const MovieCard = (props) => {
  const year = props.movie.release_date.split("-", 1);
  console.log(year);
  return (
    <div>
      <div className="image-container">
        <img
          src={`https://image.tmdb.org/t/p/w200/${props.movie.poster_path}`}
        />
      </div>
      <div className="info">
        <span className="title">{props.movie.original_title}</span>
        <span className="year">{year}</span>
      </div>
    </div>
  );
};

export default MovieCard;
