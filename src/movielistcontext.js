import React, { useState } from 'react'

export const MovieContext = React.createContext()
export const MovieProvider = (props) => {
    const [movieList, setmovieList] = useState([
        {
            name: "Harry Potter",
            price: "$10",
            id: 1
        },
        {
            name: "LOTR",
            price: "$15",
            id: 2
        },
        {
            name: "Star Wars",
            price: "$20",
            id: 3
        },
    ])
    return (

        <MovieContext.Provider value={[movieList, setmovieList]}>

            {props.children}

        </MovieContext.Provider>

    )
}