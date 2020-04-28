import React, { Component } from "react";
import "./App.css";

import { Nav } from "./components/nav/nav.component";
import NowPlaying from "./components/now-playing/now.component";
import UpcomingMovies from "./components/upcoming-movies/upcoming.component";
import PopularMovies from "./components/popular-movies/poplular.component";

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      now_playing_movies: [],
      upcoming_movies: [],
      popular_movies: [],
    };
  }

  componentDidMount() {
    Promise.all([
      fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`
      ).then((data) => data.json()),
      fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`
      ).then((data) => data.json()),
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      ).then((data) => data.json()),
    ]).then((allResponses) => {
      this.setState(
        {
          now_playing_movies: allResponses[0].results,
          upcoming_movies: allResponses[1].results,
          popular_movies: allResponses[2].results,
        },
        () => {
          console.log(
            "after fetched, only popular movies: ",
            this.state.popular_movies
          );
        }
      );
    });
  }

  render() {
    const { now_playing_movies, upcoming_movies, popular_movies } = this.state;
    return (
      <div className="App">
        <Nav></Nav>
        <NowPlaying movies={now_playing_movies} />
        <UpcomingMovies movies={upcoming_movies} />
        <PopularMovies movies={popular_movies} />
      </div>
    );
  }
}

export default App;
