import React, { Component } from "react";
import "./App.css";

import MoviesPage from "./pages/movies/moviesPage";
import Nav from "./components/nav/nav.component";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends Component {
  constructor() {
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

  showMoviePage = () => {
    return <MoviesPage data={this.state} />;
  };

  showTvPage() {
    return <h1 className="temp-text">TV Page coming soon...</h1>;
  }

  showSearchPage() {
    return <h1 className="temp-text">Search Page coming soon...</h1>;
  }

  showNotFound() {
    console.log("not found called");
    return <h1 className="temp-text">404 Page</h1>;
  }

  render() {
    // const { now_playing_movies, upcoming_movies, popular_movies } = this.state;
    return (
      <div className="App">
        <Router>
          <Nav></Nav>
          <Switch>
            <Route
              path="/netflix_clone/"
              component={this.showMoviePage}
              exact={true}
            />
            <Route path="/netflix_clone/tv" component={this.showTvPage} />
            <Route
              path="/netflix_clone/search"
              component={this.showSearchPage}
            />
            <Route component={this.showNotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
