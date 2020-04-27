import React from "react";
import axios from "axios";
import { Nav } from "./components/nav/nav.component";
import { NowPlaying } from "./components/now-playing/now.component";

import "./App.css";

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends React.Component {
  constructor() {
    super();
  }

  state = {
    movies: [],
  };

  componentDidMount() {
    axios
      .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`)
      .then((res) => {
        // console.log(res);
        this.setState({ movies: res.data }, () => {
          console.log(this.state.movies);
        });
      });
  }

  render() {
    return (
      <div className="App">
        <Nav></Nav>
        <NowPlaying></NowPlaying>
      </div>
    );
  }
}

export default App;
