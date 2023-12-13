import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import MovieList from './MovieList';
import Movie from './Movie';
import SavedList from './SavedList';

const movies = [
  {
    id: 1,
    title: 'The Godfather',
    director: 'Francis Ford Coppola',
    metascore: 100,
    stars: ['Marlon Brando', 'Al Pacino', 'Robert Duvall'],
    // Add other movies here...
  },
  // ...
];

function App() {
  const [savedMovies, setSavedMovies] = useState([]);

  const addToSavedList = movie => {
    setSavedMovies([...savedMovies, movie]);
  };

  return (
    <div className="App">
      <SavedList list={savedMovies} />
      <Route exact path="/" render={() => <MovieList movies={movies} />} />
      <Route path="/movies/:id" render={props => <Movie {...props} addToSavedList={addToSavedList} movies={movies} />} />
    </div>
  );
}

export default App;
