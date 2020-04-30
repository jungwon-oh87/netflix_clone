import React from "react";

import { Link } from "react-router-dom";
import "./nav.style.css";

export const Nav = () => {
  function handleClick(e) {
    const listArray = Array.from(e.target.parentElement.children);
    listArray.forEach((list) => {
      if (list.classList.contains("activated")) {
        list.classList.remove("activated");
      }
    });
    e.target.classList.add("activated");
  }

  return (
    // <header className="list-container" onClick={handleClick}>
    <header className="list-container">
      <Link to="/netflix_clone/">Movies</Link>
      <Link to="/netflix_clone/tv">TV</Link>
      <Link to="/netflix_clone/search">Search iT!!!</Link>
      {/* <ul className="ul">
        <li className="activated">
          <a href="#">Movies</a>
        </li>
        <li>
          <a href="#">TV</a>
        </li>
        <li>
          <a href="#">Search</a>
        </li>
      </ul> */}
    </header>
  );
};
