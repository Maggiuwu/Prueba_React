import React from "react";
import logo from "./logo.svg";
import imagen from "./medium.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <main>
          <figure>
            <img src={imagen} alt="esto no es una cascada" />
          </figure>
          <figcaption>holi</figcaption>
        </main>
      </header>
    </div>
  );
}

export default App;
