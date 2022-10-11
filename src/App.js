import './App.css';
import Dictionary from './Dictionary';
import image from "./images/background-img.jpg";

export default function App() {
  return (
    <div style={{ backgroundImage:`url(${image})`}}>
    <div className="container">
      <div className="app-content">
        <h1>Dictionary</h1>
          <Dictionary defaultKeyword="sunrise" />

      <div className="app-footer">This project is coded by <a href="https://www.linkedin.com/in/juliavanvuren/" target="_blank" rel="noreferrer">Julia van Vuren</a>, open-sourced on GitHub &amp; hosted on Netlify</div>
      </div>
    </div>
    </div>
  );
}


