import { useState, useContext } from "react";
import { MovieContext } from "./MovieContex";

const AddMovie = () => {
  const { addMovie } = useContext(MovieContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description && rating) {
      addMovie({ title, description, rating: Number(rating) });
      setTitle("");
      setDescription("");
      setRating("");
    }
  };

  return (
    <form className="container mt-3" onSubmit={handleSubmit}>
    <div className="mb-3">
      <input type="text" className="form-control" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
    </div>
    <div className="mb-3">
      <input type="text" className="form-control" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
    </div>
    <div className="mb-3">
      <input type="number" className="form-control" placeholder="Rating (1-5)" value={rating} onChange={(e) => setRating(e.target.value)} required min="1" max="5" />
    </div>
    <button type="submit" className="btn btn-primary">Add Movie</button>
  </form>
  );
};
export default AddMovie;
