import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [dummyMovies, setDummyMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("https://swapi.dev/api/films");

      if (!response.ok) {
        throw new Error("No response");
      }
      const data = await response.json();

      const transformData = data.results.map((dataMovies) => {
        return {
          id: dataMovies.episode_id,
          title: dataMovies.title,
          releaseDate: dataMovies.release_date,
          openingText: dataMovies.opening_crawl,
        };
      });
      setDummyMovies(transformData);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  let content = <p> No movies found. </p>;

  if (isLoading) {
    content = <p> is Loading... </p>;
  }

  if (error) {
    content = <p> {error} </p>;
  }

  if (dummyMovies.length > 0) {
    content = <MoviesList movies={dummyMovies} />;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
