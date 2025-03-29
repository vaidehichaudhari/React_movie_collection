import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MovieProvider } from "./components/MovieContex";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import AddMovie from "./components/AddMovie";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <MovieProvider>
      <Router>
        <div className="container mt-3">
          <h1 className="text-center">Movie Collection</h1>
          <AddMovie />
          <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </div>
      </Router>
    </MovieProvider>
  );
}

export default App;