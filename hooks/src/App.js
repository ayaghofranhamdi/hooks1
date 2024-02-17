import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import {moviesData} from "./Data"
import { useState } from 'react';
import Navigation from './Component/Navigation';
import MovieList from './Component/MovieList';
import AddMovie from './AddMovie';
function App() {

  const [movies, setMovies] = useState(moviesData)

  const add = (newMovie)  => {
   setMovies([...movies, newMovie]); 
 }
  return (
    <div className="App">
      <Navigation />
      <AddMovie add={add} />
      <MovieList movies ={movies} />
    </div>
  );

  

}

export default App;
