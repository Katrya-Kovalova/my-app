import React from "react";
import Search from "./Search";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Search />
      <small>
        <a href="https://github.com/Katrya-Kovalova/my-app">Open-source code</a>
        by Katya Kovalova
      </small>
    </div>
  );
}
