import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://sparkly-platypus-3811a9.netlify.app/"
            target="_blank"
          >
            Kayleigh Richardson
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/KaylSantos/react-weather-app"
            target="_blank"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
