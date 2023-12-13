import React from 'react';
import { Link } from 'react-router-dom';

function MovieList({ movies }) {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <Link to={`/movies/${movie.id}`} key={movie.id}>
          {/* Your movie card component here */}
        </Link>
      ))}
    </div>
  );
}

export default MovieList;
