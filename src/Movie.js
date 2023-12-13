import React from 'react';
import { useParams } from 'react-router-dom';
import MovieCard from './Movies/MovieCard';

function Movie({ movies, addToSavedList }) {
  const { id } = useParams();
  const movie = movies.find(movie => movie.id === Number(id));

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const saveMovie = () => {
    addToSavedList(movie);
  };

  return (
    <div className="save-wrapper">
      <MovieCard movie={movie} showStars={true} />

      <div className="save-button" onClick={saveMovie}>
        Save
      </div>
    </div>
  );
}

export default Movie;
