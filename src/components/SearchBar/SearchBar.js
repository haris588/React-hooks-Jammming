import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSearch }) {
  const [term, setTerm] = useState("");

  const handleTermChange = (event) => {
    setTerm(event.target.value)
  };

  return (
    <div className="SearchBar">
      <input onChange={handleTermChange} value={term} placeholder="Enter A Song, Album, or Artist" />
      <button onClick={onSearch} className="SearchButton">SEARCH</button>
    </div>
  );
}

export default SearchBar;
