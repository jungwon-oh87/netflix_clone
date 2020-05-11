import React, { Fragment } from "react";
import Section from "../../components/section/section.component";

const TvPage = (props) => {
  console.log("Airing TV in TV page component: ", props.data.air_tv);
  return (
    <Fragment>
      <Section
        title="Top Rated Shows"
        data={props.data.top_rated_tv}
        category="tv"
      />
      <Section
        title="Poplular Shows"
        data={props.data.popular_tv}
        category="tv"
      />
      <Section title="Airing Today" data={props.data.air_tv} category="tv" />
    </Fragment>
  );
};

export default TvPage;
