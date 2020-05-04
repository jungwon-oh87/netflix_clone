import React from "react";

const API_KEY = process.env.REACT_APP_API_KEY;

class Detail extends React.Component {
  constructor() {
    super();
  }

  state = {
    id: "",
    movie_info: {},
    video_info: {},
  };

  componentDidMount() {
    // console.log("key: ", API_KEY);
    this.setState(
      {
        movie_id: this.props.location.state.movie.id,
      },
      () => {
        Promise.all([
          fetch(
            `https://api.themoviedb.org/3/movie/${this.state.movie_id}?api_key=${API_KEY}&language=en-US`
          ).then((data) => data.json()),
          fetch(
            `http://api.themoviedb.org/3/movie/131634/videos?api_key=${API_KEY}&language=en-US`
          ).then((data) => data.json()),
        ]).then((allResponses) =>
          this.setState(
            {
              movie_info: allResponses[0],
              video_info: allResponses[1],
            },
            () => {
              console.log("after fetched, id:", this.state.id);
              console.log("after fetched, movie_info: ", this.state.movie_info);
              console.log("after fetched, video_info: ", this.state.video_info);
            }
          )
        );
      }
    );
  }
  render() {
    return (
      <div style={{ marginTop: "50px" }}>
        <div className="poster">
          {/* <img
            src={`https://image.tmdb.org/t/p/w200/${this.state.movie.poster_path}`}
          /> */}
        </div>
        <div className="info">
          <h2>{}</h2>
          <div>stars, genre, release_date</div>
          <div>{}</div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default Detail;
