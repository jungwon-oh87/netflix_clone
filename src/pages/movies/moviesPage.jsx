import React, { Fragment } from "react";
import Section from "../../components/section/section.component";

const MoviesPage = (props) => {
  return (
    <Fragment>
      <Section
        title="Now Playing"
        data={props.data.now_playing_movies}
        category="movie"
      />
      <Section
        title="Upcoming Movies"
        data={props.data.upcoming_movies}
        category="movie"
      />
      <Section
        title="Popular Movies"
        data={props.data.popular_movies}
        category="movie"
      />
    </Fragment>
  );
};

export default MoviesPage;
