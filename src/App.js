import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World!</p>
        <p>
          This project propose is create automated test using Cypress + React +
          Github Actions
        </p>
        <a
          className="App-link"
          href="https://github.com/gabrielrab/gh-actions-cypress-test"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to GitHub Repository
        </a>
      </header>
    </div>
  );
}

export default App;
