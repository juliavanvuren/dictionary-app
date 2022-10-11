import React from "react";
import './Phonetic.css';

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <br />
     <a href={props.phonetic.audio} target="_blank" rel="noreferrer">PLAY</a>
      {props.phonetic.text}
    </div>
  );
}