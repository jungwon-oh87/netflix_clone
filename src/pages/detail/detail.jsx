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
    runtime_hour: 0,
    runtime_min: 0,
    genres: [],
    video_key: "",
  };

  componentDidMount() {
    this.setState(
      {
        movie_id: this.props.location.state.movie.id,
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
              video_info: allResponses[1],
            },
            () => {
              console.log("after fetched, movie_info: ", this.state.movie_info);
              console.log("after fetched, video_info: ", this.state.video_info);

              // Handle runtime format
              const runtime_min = this.state.movie_info.runtime;
              let hour = Math.floor(runtime_min / 60);
              let min = Math.floor(runtime_min % 60);

              // Handle genres
              let genres = [];

              genres = this.state.movie_info.genres.map((g) => {
                return g.name;
              });

              // Update state
              this.setState({
                release_year: this.state.movie_info.release_date.split("-", 1),
                runtime_hour: hour,
                runtime_min: min,
                genres: genres,
                video_key: this.state.video_info.results[0].key,
              });
            }
          )
        );
      }
    );
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
              src={`https://image.tmdb.org/t/p/original/${this.state.movie_info.poster_path}`}
              className="detail_poster"
            />
          </div>
        </div>
        <div className="detail_main_container">
          <div className="detail_main_inner_container">
            <div className="detail_info">
              <h2>{this.state.movie_info.original_title}</h2>
              <div className="detail_sub_info">
                {this.state.release_year} &bull; {this.state.runtime_hour}
                {"hr "}
                {this.state.runtime_min}
                {"mins "}
                &bull; {this.state.genres.join(" / ")} &bull;{" "}
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
                    src={`https://www.youtube.com/embed/${this.state.video_key}`}
                  ></iframe>
                </div>
                <div className="detail_grid_content" id="b2">
                  <div className="detail_company_container">
                    <h2>Companies...</h2>
                    <div className="detail_companies">
                      {this.state.movie_info.production_companies &&
                        this.state.movie_info.production_companies.map((c) => {
                          return (
                            <div className="detail_company">
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
