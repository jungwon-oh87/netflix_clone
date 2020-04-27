import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { Nav } from "./components/nav/nav.component";
import NowPlaying from "./components/now-playing/now.component";

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState(
          {
            movies: data.results,
          },
          () => {
            console.log("after fetched: ", this.state.movies);
          }
        );
        // let temp = [];
        // const movie_data = data.results;
        // movie_data.map((movie) => {
        //   temp.push(movie);
        // });
        // this.setState(
        //   {
        //     movies: temp,
        //   },
        //   () => {
        //     console.log("after pushed: ", this.state.movies);
        //   }
        // );
      });
  }

  render() {
    const { movies } = this.state;
    return (
      <div className="App">
        <Nav></Nav>
        <NowPlaying movies={movies}></NowPlaying>
      </div>
    );
  }
}

export default App;
