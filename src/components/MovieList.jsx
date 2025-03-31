import { useContext } from "react";
import { MovieContext } from "./MovieContex";
import { Link } from "react-router-dom";
import { FaStar, FaRegStar } from "react-icons/fa"; // Import star icons
// import "bootstrap/dist/css/bootstrap.min.css";

const MovieList = () => {
  const { movieList } = useContext(MovieContext);

  return (
    <div className="container mt-3">
      {movieList.map((movie) => {
        // Generate stars using a for loop
        const stars = [];
        for (let i = 0; i < 5; i++) {
          if (i < movie.rating) {
            stars.push(<FaStar key={i} color="gold" size={18} />);
          } else {
            stars.push(<FaRegStar key={i} color="gray" size={18} />);
          }
        }

        return (
          <div key={movie.id} className="card mb-3 p-3">
            <h3>
              <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
            </h3>
            <p>Rating: {stars}</p>
          </div>
        );
      })}
    </div>
  );
};

export default MovieList;
