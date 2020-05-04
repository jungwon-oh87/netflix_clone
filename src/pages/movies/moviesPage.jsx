import React from "react";
import NowPlaying from "../../components/now-playing/now.component";
import UpcomingMovies from "../../components/upcoming-movies/upcoming.component";
import PopularMovies from "../../components/popular-movies/poplular.component";

const MoviesPage = (props) => {
  return (
    <div>
      <NowPlaying movies={props.data.now_playing_movies} />
      <UpcomingMovies movies={props.data.upcoming_movies} />
      <PopularMovies movies={props.data.popular_movies} />
    </div>
  );
};

export default MoviesPage;
