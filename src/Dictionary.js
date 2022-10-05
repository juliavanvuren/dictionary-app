import React, { useState } from "react";
import axios from "axios";
import './Dictionary.css';
import Results from "./Results";

export default function Dictionary(props) {

  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
    
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
        <input defaultValue={props.defaultKeyword} type="search" onChange={handleKeywordChange}/>
      </form>
      <Results results={results} />
    </div>
  );
}