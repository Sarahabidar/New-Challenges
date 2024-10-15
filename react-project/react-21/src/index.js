import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import MovieList from "./MovieList";
import { moviesData } from "./MoviesData";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1>Home Page</h1>
    <MovieList title="Best Movies" dataitems={moviesData}></MovieList>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
