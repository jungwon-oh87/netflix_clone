import React, { Component } from "react";
import Section from "../../components/section/section.component";

import "./searchPage.css";

const API_KEY = process.env.REACT_APP_API_KEY;

class searchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie_id_list: [],
    };

    // this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch = (e) => {
    if (e.which == 13 || e.keyCode == 13) {
      const search_input = e.target.value;
      fetch(
        `https://api.themoviedb.org/3/search/keyword?api_key=${API_KEY}&query=${search_input}&page=1`
      )
        .then((data) => data.json())
        .then((res) => {
          console.log("this: ", this);
          this.setState(
            {
              movie_id_list: res.results,
            },
            () => {
              console.log("movie id list: ", this.state.movie_id_list);
            }
          );
        });
    }
  };

  render() {
    return (
      <div className="search-container">
        <div className="search-input-container">
          <input
            type="text"
            className="search-input"
            placeholder="Enter search item"
            onKeyPress={this.handleSearch}
          />
        </div>
        <div className="search-movie-container">
          {/* <Section title="Movie Results" category="movie" /> */}
        </div>
      </div>
    );
  }
}

export default searchPage;
