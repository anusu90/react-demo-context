import React, { useState, useContext } from 'react'
import { MovieContext } from "../movielistcontext"

const AddMovie = () => {

    const [name, setname] = useState('');
    const [price, setprice] = useState('');
    const [movieList, setmovieList] = useContext(MovieContext)

    const updateName = (e) => {
        setname(e.target.value)
    }

    const updatePrice = (e) => {
        setprice(e.target.value)
    }

    const addMovie = (e) => {
        e.preventDefault();
        let newMovie = {
            name: name,
            price: price,
            id: movieList.length + 1
        }
        setmovieList([...movieList, newMovie])

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <form action="">
                        <div className="form-group">
                            <input className="form-control" value={name} onChange={updateName} type="text" placeholder="name" />
                        </div>
                        <div className="form-group">
                            <input className="form-control" value={price} onChange={updatePrice} type="text" placeholder="price" />
                        </div>
                        <button className="btn btn-primary" type="submit" onClick={addMovie}> Add Movie</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddMovie