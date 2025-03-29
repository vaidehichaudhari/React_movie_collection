import { useContext } from "react";
import { MovieContext } from "./MovieContex";
import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

const MovieList = () => {
  const { movieList } = useContext(MovieContext);

  return (
    <div className="container mt-3">
      {movieList.map((movie) => (
        <div key={movie.id} className="card mb-3 p-3">
          <h3>
            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
          </h3>
          <p>Rating: {movie.rating}/5</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;