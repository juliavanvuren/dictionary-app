import React, { useState } from "react";
import axios from "axios";
import './Dictionary.css';
import Results from "./Results";

export default function Dictionary(props) {

  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
    
  }
  
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSearch(event){
    event.preventDefault();
    search();
   
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);

  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    
  return (
     <div className="Dictionary">
      <section>
      <form className="search-form" onSubmit={handleSearch}>
        <input defaultValue={props.defaultKeyword} type="search" onChange={handleKeywordChange}/>
      </form>
      </section>
      <Results results={results} />
    </div>
  );
  
} else {
  return load();
}
}