import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSearch }) {
  const [term, setTerm] = useState("");

  const handleTermChange = (event) => {
    setTerm(event.target.value);
  };

  const handleOnSearch = () => {
    {
      onSearch(term);
    }
  };
  
  return (
    <div className="SearchBar">
      <input
        onChange={handleTermChange}
        value={term}
        placeholder="Enter A Song, Album, or Artist"
      />
      <button onClick={handleOnSearch} className="SearchButton">
        SEARCH
      </button>
    </div>
  );
}

export default SearchBar;
