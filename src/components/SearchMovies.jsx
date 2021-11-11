import React, { useState } from "react";
import MovieCard from "./MovieCard";
import ProgressBar from "react-scroll-progress-bar"; //Add this line

const SearchMovies = () => {
  const [movieName, setMovieName] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovie = (e) => {
    e.preventDefault();
    console.log("Submitted!");

    const url = `https://api.themoviedb.org/3/search/movie?api_key=ea9da6d6559674b59b4628d87ea7d2c7&language=en-US&query=${movieName}&page=1&include_adult=false`;
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        const data = response;
        setMovies(data.results);
      });
    console.log(movies);
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setMovieName(value);
  };

  return (
    <div>
      <div className="progress-bar">
        <ProgressBar />
      </div>

      <form className="form" onSubmit={searchMovie}>
        <label htmlFor="query" className="label">
          Movie Name
        </label>

        <input
          className="input"
          type="text"
          name="movieName"
          placeholder="search for a movie"
          value={movieName}
          onChange={handleChange}
        />

        <button className="button">Search</button>
      </form>
      <div className="card-list">
        <h3 className="results-info">{`${movies.length} result(s) found`}</h3>
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard movie={movie} />
          ))}
      </div>
    </div>
  );
};

export default SearchMovies;
