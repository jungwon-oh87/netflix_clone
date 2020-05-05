import React from "react";
import { Link } from "react-router-dom";
import "./movie-card.style.css";

const MovieCard = (props) => {
  const year = props.movie.release_date.split("-", 1);
  // console.log("MovieCard: ", props.movie);
  return (
    <div>
      <div className="image-container">
        <Link
          to={{
            pathname: "/detail",
            state: { movie: props.movie },
          }}
        >
          <img
            className="poster"
            src={`https://image.tmdb.org/t/p/w200/${props.movie.poster_path}`}
          />
          <span className="rate">
            <span className="star-icon">&#9733;</span>{" "}
            {props.movie.vote_average}
            /10
          </span>
        </Link>
      </div>
      <div className="info">
        <span className="title">{props.movie.original_title}</span>
        <span className="year">{year}</span>
      </div>
    </div>
  );
};

export default MovieCard;
