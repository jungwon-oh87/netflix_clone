import React from "react";
import axios from "axios";
import { Nav } from "./components/nav/nav.component";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
  }

  state = {
    persons: [],
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res);
      this.setState({ persons: res.data }, () => {
        console.log(this.state.persons);
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Nav></Nav>
      </div>
    );
  }
}

export default App;
