import React from "react";
import Weather from "./Weather.js";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/Amel-coder-dot"
            target="_blank"
            rel="noreferrer"
          >
            Freya Collie
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Amel-coder-dot/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and is hosted on{" "}
          <a
            href="https://super-strudel-925eaf.netlify.app/?"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
