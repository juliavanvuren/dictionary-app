import React, { useState } from "react";
import axios from "axios";
import './Dictionary.css';

export default function Dictionary() {

  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function handleSearch(event){
    event.preventDefault();
    
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
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