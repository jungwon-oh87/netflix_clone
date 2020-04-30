import React from "react";

import { Link } from "react-router-dom";
import "./nav.style.css";

const handleClick = (e) => {
  const elems = document.querySelector(".activated");

  // Remove classname from the activated element
  if (elems !== null) {
    elems.classList.remove("activated");
  }
  e.target.classList.add("activated");
};
const Nav = () => {
  return (
    <header className="list-container" onClick={handleClick}>
      <ul className="ul">
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
