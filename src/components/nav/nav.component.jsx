import React from "react";

import { Link } from "react-router-dom";
import "./nav.style.css";

const handleClick = (e) => {
  const elems = document.querySelector(".activated");

  console.log("elems: ", e.target);
  // Remove classname from the activated element
  if (elems !== null) {
    elems.classList.remove("activated");
  }

  e.target.classList.add("activated");
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
    </header>
  );
};

export default Nav;
