import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MovieContext } from "./MovieContex"; // Fix typo in import
import { FaStar } from "react-icons/fa"; // Import star icon
// import "bootstrap/dist/css/bootstrap.min.css";

const MovieDetails = () => {
  const { movieList, deleteMovie } = useContext(MovieContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movieList.find((m) => m.id === Number(id));

  if (!movie) return <h2 className="text-center mt-3">Movie not found</h2>;

  // Generate stars using a for loop
  const stars = [];
  for (let i = 0; i < movie.rating; i++) {
    stars.push(<FaStar key={i} color="gold" size={20} />);
  }

  return (
    <div className="container mt-3">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>Rating: {stars}</p>
      <button
        className="btn btn-danger me-2"
        onClick={() => {
          deleteMovie(movie.id);
          navigate("/");
        }}
      >
        Delete
      </button>
      <button className="btn btn-secondary" onClick={() => navigate("/")}>
        Back
      </button>
    </div>
  );
};

export default MovieDetails;
