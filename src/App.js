import './App.css';
import React, { useState, useEffect } from 'react'
import MovieList from "./components/movielist/movielist"
import Nav from "./components/nav/nav"
import AddMovie from "./components/addmovie"
import { MovieProvider } from "./movielistcontext"


function App() {
  return (

    <MovieProvider>
      <div className="App">
        <Nav></Nav>
        <MovieList />

        <AddMovie />

      </div>
    </MovieProvider>


  );
}

export default App;
