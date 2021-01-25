import React, { useState, useContext } from 'react'
import Movie from "../movies/movie";
import { MovieContext } from "../../movielistcontext"

export default function MovieList() {

    const [movieList, setmovieList] = useContext(MovieContext)
    console.log(movieList)

    // const addMovie = (e) => {
    //     e.preventDefault()
    //     let newMovie = {
    //         name: document.getElementById("movieName").value,
    //         price: document.getElementById("moviePrice").value,
    //         id: movieList.length + 1
    //     }

    //     setmovieList([...movieList, newMovie])


    // }

    // return (
    //     <div className="container">
    //         <div className="row">
    //             <div className="col-12">
    //                 <form action="">
    //                     <div className="form-group">
    //                         <input className="form-control" id="movieName" type="text" placeholder="name" />
    //                     </div>
    //                     <div className="form-group">
    //                         <input className="form-control" id="moviePrice" type="text" placeholder="price" />
    //                     </div>
    //                     <button className="btn btn-primary" type="submit" onClick={(e) => addMovie(e, movieList, setmovieList)}> Add Movie</button>
    //                 </form>
    //             </div>
    //         </div>
    //     </div>
    // )

    ///THE ABOVE IS ONE WAY

    return (
        <ul>
            {
                movieList.map((movie, index) => <li key={index}> {movie.name} </li>)
            }
        </ul>
    )

}