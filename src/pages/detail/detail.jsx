import React from "react";
import "./detail.css";

const API_KEY = process.env.REACT_APP_API_KEY;

class Detail extends React.Component {
  constructor() {
    super();
  }

  state = {
    id: "",
    info: {},
    video_info: {},
    year: "",
    runtime_hr: -1,
    runtime_min: 0,
    genres: [],
    video_key: "",
    title: "",
    countries: [],
  };

  componentDidMount() {
    let category = this.props.location.state.category;
    console.log("movie data in detail: ", this.props.location.state.data);
    // console.log(this.props.location.state.category);
    this.setState(
      {
        id: this.props.location.state.data.id,
      },
      () => {
        Promise.all([
          // For movie info
          fetch(
            `https://api.themoviedb.org/3/${category}/${this.state.id}?api_key=${API_KEY}&language=en-US`
          ).then((data) => data.json()),
          // For video teaser
          fetch(
            `https://api.themoviedb.org/3/${category}/${this.state.id}/videos?api_key=${API_KEY}&language=en-US`
          ).then((data) => data.json()),
        ]).then((allResponses) =>
          this.setState(
            {
              info: allResponses[0],
              video_info: allResponses[1],
            },
            () => {
              console.log("after fetched, info: ", this.state.info);
              console.log("after fetched, video_info: ", this.state.video_info);

              // Create title, year, runtime, genres
              let title = "";
              let year = "";
              let total_runtime_min = -1;
              let genres = [];
              let video_key = "";

              // movie: info.production_countries[0].iso_3166_1
              // tv: info.origin_country or production_companies[0].origin_country
              let countries = [];

              // Set info according to category
              if (category === "movie") {
                title = this.state.info.original_title;
                year = this.state.info.release_date.split("-", 1);
                total_runtime_min = this.state.info.runtime;
                this.state.info.production_countries.forEach((c) =>
                  countries.push(c.iso_3166_1)
                );

                // console.log("after push, movie countries: ", countries);
              } else {
                title = this.state.info.original_name;
                year = this.state.info.first_air_date.split("-", 1);
                total_runtime_min = this.state.info.episode_run_time[0];
                countries = this.state.info.origin_country;
                // console.log("after push, tv country: ", countries);
              }

              // Set genres and video
              genres = this.state.info.genres.map((g) => g.name);

              if (this.state.video_info.results.length > 0) {
                video_key = this.state.video_info.results[0].key;
                console.log("video key: ", video_key);
              } else {
                video_key = "";
                console.log("video not available");
              }

              // Handle runtime format
              let hour = Math.floor(total_runtime_min / 60);
              let min = Math.floor(total_runtime_min % 60);

              // Update state
              this.setState({
                year: year,
                runtime_hr: hour,
                runtime_min: min,
                genres: genres,
                video_key: video_key,
                title: title,
                countries: countries,
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
              src={`https://image.tmdb.org/t/p/original/${this.state.info.poster_path}`}
              className="detail_poster"
            />
          </div>
        </div>
        <div className="detail_main_container">
          <div className="detail_main_inner_container">
            <div className="detail_info">
              <h2>{this.state.title}</h2>
              <div className="detail_sub_info">
                {this.state.year} &bull;
                {this.state.runtime_hr !== 0 &&
                  `${this.state.runtime_hr}hr`}{" "}
                {this.state.runtime_min !== 0 && `${this.state.runtime_min}min`}
                {this.state.info.runtime !== 0 && this.state.info.imdb_id ? (
                  <span>&bull;</span>
                ) : (
                  ""
                )}
                {this.state.info.imdb_id ? (
                  <span>
                    <button className="detail_button">
                      <a
                        href={`https://www.imdb.com/title/${this.state.info.imdb_id}`}
                        target="_blank"
                      >
                        IMDB
                      </a>
                    </button>
                  </span>
                ) : (
                  ""
                )}
              </div>
              <div className="detail_overview">
                <p>{this.state.info.overview}</p>
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
                  {this.state.video_info.results == null ||
                  this.state.video_info.results.length === 0 ? (
                    <h4>
                      We're sorry. There is no available videos for this
                      product.
                    </h4>
                  ) : (
                    <div>
                      <h2>Teaser videos</h2>
                      <iframe
                        width="500"
                        height="300"
                        src={`https://www.youtube.com/embed/${this.state.video_key}`}
                      ></iframe>
                    </div>
                  )}
                </div>
                <div className="detail_grid_content" id="b2">
                  <div className="detail_company_container">
                    <h2>Companies</h2>
                    <div className="detail_companies">
                      {this.state.info.production_companies &&
                        this.state.info.production_companies.map((c) => {
                          return (
                            <div className="detail_company" key={c.id}>
                              <div className="detail_logo_container">
                                <img
                                  src={`https://image.tmdb.org/t/p/original/${c.logo_path}`}
                                  onError={this.addDefaultSrc}
                                  className="detail_logo"
                                />
                              </div>
                              <p className="detail_company_name">{c.name}</p>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                  <div className="detail_country_container">
                    <h2>Countries</h2>
                    <div className="detail_country_img_container">
                      {this.state.countries.map((c) => {
                        return (
                          <img
                            src={`https://www.countryflags.io/${c}/shiny/64.png`}
                            alt={c}
                            key={c}
                          />
                        );
                      })}
                    </div>
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
