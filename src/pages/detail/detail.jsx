import React from "react";
import "./detail.css";

const API_KEY = process.env.REACT_APP_API_KEY;

class Detail extends React.Component {
  constructor() {
    super();
  }

  state = {
    movie_id: "",
    movie_info: {},
    movie_video_info: {},
    movie_year: "",
    movie_runtime_hr: -1,
    movie_runtime_min: 0,
    movie_genres: [],
    movie_video_key: "",
    tv_id: "",
    tv_info: {},
    tv_video_info: {},
    tv_year: "",
    tv_runtime_hr: -1,
    tv_runtime_min: 0,
    tv_genres: [],
    tv_video_key: "",
  };

  handleMovie = () => {
    console.log("movie data: ", this.props.location.state.data);
    this.setState(
      {
        movie_id: this.props.location.state.data.id,
      },
      () => {
        Promise.all([
          // For movie info
          fetch(
            `https://api.themoviedb.org/3/movie/${this.state.movie_id}?api_key=${API_KEY}&language=en-US`
          ).then((data) => data.json()),
          // For video teaser
          fetch(
            `https://api.themoviedb.org/3/movie/${this.state.movie_id}/videos?api_key=${API_KEY}&language=en-US`
          ).then((data) => data.json()),
        ]).then((allResponses) =>
          this.setState(
            {
              movie_info: allResponses[0],
              movie_video_info: allResponses[1],
            },
            () => {
              console.log("after fetched, movie_info: ", this.state.movie_info);
              console.log(
                "after fetched, video_info: ",
                this.state.movie_video_info
              );

              // Handle runtime format
              let runtime_min = -1;
              runtime_min = this.state.movie_info.runtime;
              let hour = Math.floor(runtime_min / 60);
              let min = Math.floor(runtime_min % 60);

              // Handle genres
              let genres = [];

              genres = this.state.movie_info.genres.map((g) => {
                return g.name;
              });

              // Update state
              this.setState({
                movie_year: this.state.movie_info.release_date.split("-", 1),
                movie_runtime_hr: hour,
                movie_runtime_min: min,
                movie_genres: genres,
                movie_video_key: this.state.movie_video_info.results[0].key,
              });
            }
          )
        );
      }
    );
  };

  handleTv = () => {
    console.log(this.props.location.state.data);
    this.setState(
      {
        tv_id: this.props.location.state.data.id,
      },
      () => {
        console.log("tv id: ", this.state.tv_id);
        Promise.all([
          fetch(
            `https://api.themoviedb.org/3/tv/${this.state.tv_id}?api_key=${API_KEY}&language=en-US`
          ).then((data) => data.json()),
          fetch(
            `https://api.themoviedb.org/3/tv/${this.state.tv_id}/videos?api_key=${API_KEY}&language=en-US`
          ).then((data) => data.json()),
        ]).then((allResponses) => {
          this.setState(
            {
              tv_info: allResponses[0],
              tv_video_info: allResponses[1],
            },
            () => {
              console.log(
                "in handle tv after fetch, tv info: ",
                this.state.tv_info
              );
              console.log(
                "in handle tv after fetch, tv video info: ",
                this.state.tv_video_info
              );

              // Handle runtime format
              let runtime_min = -1;
              if (this.state.tv_info.episode_run_time.length !== 0) {
                runtime_min = this.state.tv_info.episode_run_time[0];
                this.setState({ tv_total_runtime_min: runtime_min });
              }
              // console.log("episode run time: ", runtime_min);

              let hour = Math.floor(runtime_min / 60);
              let min = Math.floor(runtime_min % 60);

              // Handle genres
              let genres = [];

              genres = this.state.tv_info.genres.map((g) => {
                return g.name;
              });

              // console.log("tv genres: ", genres);

              if (this.state.tv_video_info.results.length > 0) {
                this.setState({
                  tv_video_key: this.state.tv_video_info.results[0].key,
                });
              }

              // Update state
              this.setState({
                tv_year: this.state.tv_info.first_air_date.split("-", 1),
                tv_runtime_hr: hour,
                tv_runtime_min: min,
                tv_genres: genres,
                // tv_video_key: this.state.tv_video_info.results[0].key,
              });
            }
          );
        });
      }
    );
  };

  componentDidMount() {
    let category = this.props.location.state.category;
    if (category === "movie") {
      this.handleMovie();
    } else if (category === "tv") {
      this.handleTv();
    }
  }

  openTab = (tabName) => {
    const gridContent = document.querySelectorAll(".detail_grid_content");

    // Handle contents
    for (let i = 0; i < gridContent.length; i++) {
      gridContent[i].classList.remove("show");
    }
    document.getElementById(tabName).classList.add("show");
  };

  addDefaultSrc = (e) => {
    e.target.src =
      "https://dummyimage.com/600x400/000/ffffff.png&text=Image+Not+Found";
  };
  render() {
    return (
      <div
        style={{
          marginTop: "50px",
        }}
        className="detail_container"
      >
        <div className="detail_poster_container">
          <div className="detail_poster_inner_container">
            <img
              src={`https://image.tmdb.org/t/p/original/${
                this.props.location.state.category === "movie"
                  ? this.state.movie_info.poster_path
                  : this.state.tv_info.poster_path
              }`}
              className="detail_poster"
            />
          </div>
        </div>
        <div className="detail_main_container">
          <div className="detail_main_inner_container">
            <div className="detail_info">
              <h2>
                {this.props.location.state.category === "movie"
                  ? this.state.movie_info.original_title
                  : this.state.tv_info.original_name}
              </h2>
              <div className="detail_sub_info">
                {this.props.location.state.category === "movie"
                  ? this.state.movie_year
                  : this.state.tv_year}{" "}
                &bull;
                {this.props.location.state.category === "movie"
                  ? // Handle hour for MOVIE
                    this.state.movie_runtime_hr > 0
                    ? this.state.movie_runtime_hr
                    : ""
                  : // Handle hour for TV
                  this.state.tv_total_runtime_min > 60
                  ? this.state.tv_runtime_hr
                  : ""}
                {this.props.location.state.category === "movie"
                  ? // Handle hr postfix for MOVIE
                    this.state.movie_info.runtime >= 60
                    ? "hr "
                    : ""
                  : // Handle hr postfix for TV
                  this.state.tv_total_runtime_min >= 60
                  ? "hr "
                  : ""}
                {/* {
                  // Hour number when movie
                  this.props.location.state.category === "movie" &&
                  this.state.movie_runtime_hr > 0
                    ? this.state.movie_runtime_hr
                    : // 여기서부터 TV
                    this.state.tv_total_runtime_min > 0
                    ? this.state.tv_runtime_hr
                    : "RUNTIME not available"
                }
                {
                  // Hr postfix
                  this.state.movie_runtime_hr > 0 ||
                  this.state.tv_runtime_hr > 0
                    ? "hr"
                    : ""
                }
                {
                  // Min number when movie
                  this.props.location.state.category === "movie" &&
                  this.state.movie_runtime_min > 0
                    ? this.state.movie_runtime_min
                    : ""
                }
                {
                  // Min number when tv
                  this.props.location.state.category === "tv" &&
                  this.state.tv_runtime_min > 0
                    ? this.state.tv_runtime_min
                    : ""
                }
                {
                  // Min postfix
                  this.props.location.state.category === "movie" &&
                  this.state.movie_runtime_min >= 0
                    ? "mins "
                    : ""
                }
                {this.props.location.state.category === "tv" &&
                this.state.tv_runtime_min >= 0
                  ? "mins "
                  : ""}
                &bull; {this.state.movie_genres.join(" / ")} &bull;{" "} */}
                <button className="detail_button">
                  <a
                    href={`https://www.imdb.com/title/${this.state.movie_info.imdb_id}`}
                    target="_blank"
                  >
                    IMDB
                  </a>
                </button>
              </div>
              <div className="detail_overview">
                <p>{this.state.movie_info.overview}</p>
              </div>
              <div className="detail_grid_container">
                {/* Two columns */}
                <div className="detail_tab_row">
                  <div
                    className="detail_tab_col show"
                    onClick={(e) => {
                      this.openTab("b1");
                      e.target.parentNode.lastChild.classList.remove("show");
                      e.target.classList.add("show");
                    }}
                  >
                    Video
                  </div>
                  <div
                    className="detail_tab_col"
                    onClick={(e) => {
                      this.openTab("b2");
                      e.target.parentNode.firstChild.classList.remove("show");
                      e.target.classList.add("show");
                    }}
                  >
                    Production
                  </div>
                </div>
                <div className="detail_grid_content show" id="b1">
                  <h2>Teaser videos...</h2>
                  <iframe
                    width="500"
                    height="300"
                    src={`https://www.youtube.com/embed/${this.state.movie_video_key}`}
                  ></iframe>
                </div>
                <div className="detail_grid_content" id="b2">
                  <div className="detail_company_container">
                    <h2>Companies...</h2>
                    <div className="detail_companies">
                      {this.state.movie_info.production_companies &&
                        this.state.movie_info.production_companies.map((c) => {
                          return (
                            <div className="detail_company" key={c.id}>
                              <div className="detail_logo_container">
                                <img
                                  src={`https://image.tmdb.org/t/p/original/${c.logo_path}`}
                                  onError={this.addDefaultSrc}
                                  // onError="this.onerror=null; this.src='https://dummyimage.com/600x400/000/ffffff.png&text=Image+Not+Found'"
                                  className="detail_logo"
                                />
                              </div>
                              <p className="detail_company_name">{c.name}</p>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                  <div className="detail_country">
                    <h2>Countries...</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
