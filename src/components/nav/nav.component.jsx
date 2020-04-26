import React from "react";

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
    <div className="list-container" onClick={handleClick}>
      <ul className="ul">
        <li className="activated">
          <a href="#">Movies</a>
        </li>
        <li>
          <a href="#">TV</a>
        </li>
        <li>
          <a href="#">Search</a>
        </li>
      </ul>
    </div>
  );
};
