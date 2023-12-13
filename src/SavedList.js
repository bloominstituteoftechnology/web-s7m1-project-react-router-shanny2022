import React from 'react';
import { Link } from 'react-router-dom';

function SavedList({ list }) {
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {list.map(movie => (
        <Link to={`/movies/${movie.id}`} key={movie.id}>
          <span className="saved-movie">{movie.title}</span>
        </Link>
      ))}
    </div>
  );
}

export default SavedList;
