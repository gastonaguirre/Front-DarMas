import React, {  useState } from 'react';
import {  useDispatch } from 'react-redux';
import   getPokeName   from '../../redux/action/getPokeName'

//hago una busqueda exacta por nombre del pokemon

export default function Search() {
    const dispatch = useDispatch();
    const [ name, setName ] = useState("")

    const handleSearchBar = (e) => {
        e.preventDefault()
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(getPokeName(name)) 
    }

    return (
        <div>
            <input  type='text' placeholder='Search Pokemons...' onChange={(e) => handleSearchBar(e)} />
            <button  onClick={(e) => handleSubmit(e)} type='submit'>Search</button>
        </div>
    )
}