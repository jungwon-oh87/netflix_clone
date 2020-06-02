import React from "react";

import { Link } from "react-router-dom";
import "./nav.style.css";

const handleClick = (e) => {
  // const screen_type
  const elems = document.querySelectorAll(".activated");

  // When another tag is clicked
  if (e.target.nodeName === "A" && !e.target.classList.contains("activated")) {
    // Detect the screen size and then
    // Remove classname from the activated element
    if (e.target.classList.contains("mobile")) {
      elems[1].classList.remove("activated");
    } else {
      elems[0].classList.remove("activated");
    }
    e.target.classList.add("activated");
  }
};
const Nav = () => {
  return (
    <header className="nav-list-container" onClick={handleClick}>
      <ul className="nav-ul">
        <div className="nav-logo-container">
          <img
            src="https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
            alt="logo"
            className="nav-logo"
          />
        </div>
        <li>
          <Link to="/netflix_clone/" className="activated">
            Movies
          </Link>
        </li>
        <li>
          <Link to="/netflix_clone/tv">TV</Link>
        </li>
        <li>
          <Link to="/netflix_clone/search">Search</Link>
        </li>
      </ul>
      <ul className="nav-ul-mobile mobile">
        <li>
          <Link to="/netflix_clone/" className="activated mobile">
            <i class="fas fa-film fa-2x"></i>
          </Link>
        </li>
        <li>
          <Link to="/netflix_clone/tv" className="mobile">
            <i class="fas fa-tv fa-2x"></i>
          </Link>
        </li>
        <li>
          <Link to="/netflix_clone/search" className="mobile">
            <i class="fas fa-search fa-2x"></i>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Nav;
