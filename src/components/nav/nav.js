import React, { useState, useContext } from 'react'
import { MovieContext } from "../../movielistcontext"

export default function Nav() {

    const [movieList, setmovieList] = useContext(MovieContext)


    return (
        <nav className="nav">
            <h1>ANUNAY</h1>
            <p>No of movies: {movieList.length}</p>
        </nav>

    )

}