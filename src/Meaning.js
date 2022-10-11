import React from "react";
import Synonyms from "./Synonyms";
import './Meaning.css';

export default function Meaning(props) {
  if (props.meaning) {
return (
  <div className="Meaning">
    <div className="part-of-speech">
    {props.meaning.partOfSpeech}</div>
    {props.meaning.definitions.map(function(definition, index) {
    return (
    <div key={index}>
    <div className="definition">
    <strong>▶ </strong>{definition.definition}
    </div>
    <div className="example">
    {definition.example}
    </div>
    <Synonyms synonyms={definition.synonyms} />
    
    </div>
    )
    })}
  
  </div>
);
}
}