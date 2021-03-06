import React from "react";
import { Link } from "react-router-dom";
import "./card.styles.css";
import pic from "../../images/defaultPoster.png";

const Card = (props) => {
  let year;

  if (props.category === "movie") {
    year = props.data.release_date.split("-", 1);
  }

  if (props.category === "tv") {
    year = props.data.first_air_date.split("-", 1);
  }

  return (
    <div>
      <div className="image-container">
        <Link
          to={{
            pathname: "/detail",
            state: { data: props.data, category: props.category },
          }}
        >
          <img
            className="poster"
            src={`https://image.tmdb.org/t/p/w200/${props.data.poster_path}`}
            alt="poster"
            onError={(e) => {
              console.log("on Error: ", e.target);
              e.target.onError = null;
              e.target.src = pic;
            }}
          />
          <span className="rate">
            <span className="star-icon">&#9733;</span> {props.data.vote_average}
            /10
          </span>
        </Link>
      </div>
      <div className="info">
        <span className="title">
          {props.category === "movie"
            ? props.data.original_title
            : props.data.original_name}
        </span>
        <span className="year">{year}</span>
      </div>
    </div>
  );
};

export default Card;
