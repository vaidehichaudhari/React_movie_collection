import { createContext, useState, useEffect } from "react";
import moviesData from "../data";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movieList, setMovieList] = useState(() => {
    const savedMovies = localStorage.getItem("movies");
    return savedMovies ? JSON.parse(savedMovies) : moviesData;
  });

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movieList));
  }, [movieList]);

  const addMovie = (movie) => {
    setMovieList([...movieList, { id: Date.now(), ...movie }]);
  };

  const deleteMovie = (id) => {
    setMovieList(movieList.filter(movie => movie.id !== id));
  };

  return (
    <MovieContext.Provider value={{ movieList, addMovie, deleteMovie }}>
      {children}
    </MovieContext.Provider>
  );
};