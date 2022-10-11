import React, { useState } from "react";
import axios from "axios";
import './Dictionary.css';
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {

  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]); 
  }
  
  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  

  let pexelsApiKey = "563492ad6f91700001000001e964b71e6a904943969a4e7c104e717b";
  let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
  let headers = {"Authorization" : `Bearer ${pexelsApiKey}`};
  axios.get(pexelsApiUrl, { headers : headers } ).then(handlePexelsResponse);
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
      <div className="question">what would you like to look up?</div>
      <form className="search-form" onSubmit={handleSearch}>
        <input defaultValue={props.defaultKeyword} type="search" onChange={handleKeywordChange}/>
      </form>
      <div className="examples">examples: nature, sunrise, hapiness...</div>
      </section>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
  
} else {
  return load();
}
}