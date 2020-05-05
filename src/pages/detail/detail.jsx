import React from "react";
import "./detail.css";

const API_KEY = process.env.REACT_APP_API_KEY;

class Detail extends React.Component {
  constructor() {
    super();
  }

  state = {
    id: "",
    movie_info: {},
    video_info: {},
    release_year: "",
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
            `http://api.themoviedb.org/3/movie/${this.state.movie_id}/videos?api_key=${API_KEY}&language=en-US`
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
              this.setState({
                release_year: this.state.movie_info.release_date.split("-", 1),
              });
            }
          )
        );
      }
    );
  }

  getYear = () => {
    console.log("get year called");
  };

  render() {
    return (
      <div
        style={{
          marginTop: "50px",
          // backgroundImage: `https://image.tmdb.org/t/p/w200/${this.state.movie.poster_path}`,
        }}
        className="detail_container"
      >
        <div className="detail_poster_container">
          <div className="detail_poster_inner_container">
            <img
              src={`https://image.tmdb.org/t/p/original/${this.state.movie_info.poster_path}`}
              className="detail_poster"
            />
          </div>
        </div>
        <div className="detail_main">
          <h2>{this.state.movie_info.original_title}</h2>
          <p>{this.state.release_year}</p>
        </div>
      </div>
    );
  }
}

export default Detail;
