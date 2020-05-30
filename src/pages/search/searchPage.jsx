import React, { Component } from "react";
import Section from "../../components/section/section.component";

import "./searchPage.css";

const API_KEY = process.env.REACT_APP_API_KEY;

class searchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie_list: [],
      tv_list: [],
    };

    // this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch = (e) => {
    if (e.which == 13 || e.keyCode == 13) {
      const search_input = e.target.value;
      Promise.all([
        fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search_input}&language=en-US&include_adult=false`
        ).then((data) => data.json()),
        fetch(
          `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${search_input}&language=en-US&include_adult=false`
        ).then((data) => data.json()),
      ]).then((allResponses) => {
        this.setState(
          {
            movie_list: allResponses[0].results,
            tv_list: allResponses[1].results,
          },
          () => {
            console.log("movie list in the state: ", this.state.movie_list);
            console.log("tv list in the state: ", this.state.tv_list);
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
            placeholder="Type an item and press enter."
            onKeyPress={this.handleSearch}
            autoFocus
          />
        </div>
        <div className="search-movie-container">
          {this.state.movie_list.length > 0 && (
            <Section
              title="Movie Results"
              category="movie"
              data={this.state.movie_list}
            />
          )}
          {this.state.tv_list.length > 0 && (
            <Section
              title="TV Show Results"
              category="tv"
              data={this.state.tv_list}
            />
          )}
        </div>
      </div>
    );
  }
}

export default searchPage;
