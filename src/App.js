import './App.css';
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className="container">
      <div className="app-content">
        <h1>Dictionary</h1>
          <Dictionary />
      </div>
      <footer className="app-footer"><small>This project is coded by Julia van Vuren, open-sourced on GitHub &amp; hosted on Netlify</small></footer>
    </div>
  );
}


