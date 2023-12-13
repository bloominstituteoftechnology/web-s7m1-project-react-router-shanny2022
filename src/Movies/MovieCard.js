import React from 'react';

function MovieCard({ movie, showStars = false }) {
  return (
    <div className="movie-card">
      <h2>{movie.title}</h2>
      <div className="movie-director">
        Director: <em>{movie.director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{movie.metascore}</strong>
      </div>
      {showStars && (
        <>
          <h3>Actors</h3>
          {movie.stars.map(star => (
            <div key={star} className="movie-star">
              {star}
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default MovieCard;
