import React, { useState, useEffect, useCallback } from "react";

import AddMovie from "./components/AddMovie";
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
      const response = await fetch(
        "https://react-http-23637-default-rtdb.firebaseio.com/movies.json"
      );

      if (!response.ok) {
        throw new Error("No response");
      }

      const data = await response.json();
      const loadMovies = [];

      for (const key in data) {
        loadMovies.push({
          id: key,
          title: data[key].title,
          releaseDate: data[key].releaseDate,
          openingText: data[key].openingText,
        });
      }

      setDummyMovies(loadMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  const addMovieHander = async (movie) => {
    const response = await fetch(
      "https://react-http-23637-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    const data = await response.json();
    console.log(data);

    fetchMoviesHandler();
  };

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
        <AddMovie onAddMovie={addMovieHander} />
      </section>

      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
