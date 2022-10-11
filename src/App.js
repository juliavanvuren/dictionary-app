import './App.css';
import Dictionary from './Dictionary';
import image from "./images/background-img.jpg";

export default function App() {
  return (
    <div style={{ backgroundImage:`url(${image})`}}>
    <div className="container">
      <div className="app-content">
          <Dictionary defaultKeyword="sunrise" />

      <div className="app-footer">This project is coded by <a href="https://www.linkedin.com/in/juliavanvuren/" target="_blank" rel="noreferrer">Julia van Vuren</a>, open-sourced on <a href="https://github.com/juliavanvuren" target="_blank" rel="noreferrer">GitHub</a> &amp; hosted on <a href="https://jazzy-lolly-53da69.netlify.app/" target="_blank" rel="noreferrer">Netlify</a></div>
      </div>
    </div>
    </div>
  );
}


