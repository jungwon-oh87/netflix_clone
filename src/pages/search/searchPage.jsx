import React from "react";

import "./searchPage.css";

const searchPage = () => {
  return (
    <div className="search-container">
      <div className="search-input-container">
        <input
          type="text"
          className="search-input"
          placeholder="Enter search item"
        />
      </div>
      <div className="search-movie-container">movie list comes here...</div>
    </div>
  );
};

export default searchPage;
