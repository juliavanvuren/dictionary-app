import React, { useState } from "react";
import './Dictionary.css';

export default function Dictionary() {

  let [keyword, setKeyword] = useState("");

  function handleSearch(event){
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);

  }

  return (
     <div className="Dictionary">
      <form className="search-form" onSubmit={handleSearch}>
        <input type="search" onChange={handleKeywordChange}/>
      </form>
    </div>
  );
}