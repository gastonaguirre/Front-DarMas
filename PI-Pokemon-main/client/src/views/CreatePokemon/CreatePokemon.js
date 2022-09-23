import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTypes } from '../../redux/action/getTypes'
import { postPoke } from '../../redux/action/postPoke'


export default function PokeCreate() {
    const dispatch = useDispatch();
    const allTypes = useSelector((state) => state.pokemonTypes)

    const [input, setInput] = useState({
        name: "",
        hp: 50,
        attack: 50,
        defense: 50,
        speed: 50,
        height: 50,
        weight: 50,
        types: [],
        img: "https://cutt.ly/NVbECPH"
    })



    useEffect(() => {
        dispatch(getTypes())
    }, [dispatch])

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })

    }

    const handleSelect = (e) => {
        setInput({
            ...input,
            types: [...input.types, e.target.value]
        })
    }

    const handleSubmit = (e) => {
        if (!input.name) {
            e.preventDefault();
            return alert("Can't create a Pokemon without a name")
        } else if (!input.types.length) {
            e.preventDefault();
            return alert("Please select at least one pokemon type")
        } else if (!input.img) {
            e.preventDefault();
            return alert("Please send a valid url image")
        }
        
        dispatch(postPoke(input))
        alert("Pokemon created succesfully!!")
        // setInput({
        //     name: "",
        //     hp: 50,
        //     attack: 50,
        //     defense: 50,
        //     speed: 50,
        //     height: 50,
        //     weight: 50,
        //     types: [],
        //     img: "https://cutt.ly/NVbECPH"
        // })

    }



    return (
        <div className='divForm'>
            <div className='title-submit'>
                <h2 className='createTitle'>Pokemon Creation:</h2>
                <Link to='/home'>
                    <button>Home</button>
                </Link>
                <br />
                <button id='submit' className='titleCreate' type='submit' onClick={(e) => handleSubmit(e)}>Create Pokemon</button>

            </div>
            <form className='form' onSubmit={(e) => handleSubmit(e)}>
                <div className='leftCreate'>

                    <div>
                        <label className='textCreate'>Name:  </label>
                        <input type="text" id='7' value={input.name} name="name" placeholder='PokeName' onChange={(e) => handleChange(e)} />
                    </div>
                    <br />

                    <div className='range'>
                        <label className='textCreate'>HP:</label>
                        <input type="range" min="0" max="100" id='1' value={input.hp} name="hp" onChange={(e) => handleChange(e)} />
                        <h5 className='textCreate'>{input.hp}</h5>
                    </div>
                    <br />
                    <div className='range'>
                        <label className='textCreate'>Attack:</label>
                        <input type="range" min="0" max="100" id='2' value={input.attack} name="attack" onChange={(e) => handleChange(e)} />
                        <h5 className='textCreate'>{input.attack}</h5>
                    </div>
                    <br />
                    <div className='range'>
                        <label className='textCreate'>Defense:</label>
                        <input type="range" min="0" max="100" id='3' value={input.defense} name="defense" onChange={(e) => handleChange(e)} />
                        <h5 className='textCreate'>{input.defense}</h5>
                    </div>
                </div>

                <div className='center'>

                    <div className='range'>
                        <label className='textCreate'>Speed:</label>
                        <input type="range" min="0" max="100" id='4' value={input.speed} name="speed" onChange={(e) => handleChange(e)} />
                        <h5 className='textCreate'>{input.speed}</h5>
                    </div>
                    <br />
                    <div className='range'>
                        <label className='textCreate'>Height:</label>
                        <input type="range" min="0" max="100" id='5' value={input.height} name="height" onChange={(e) => handleChange(e)} />
                        <h5 className='textCreate'>{input.height}</h5>
                    </div>
                    <br />
                    <div className='range'>
                        <label className='textCreate'>Weight:</label>
                        <input type="range" min="0" max="100" id='6' value={input.weight} name="weight" onChange={(e) => handleChange(e)} />
                        <h5 className='textCreate'>{input.weight}</h5>
                    </div>
                </div>
                <div className='rightCreate'>


                    <div>
                        <label className='textCreate'>Select Types:</label>
                        <select id='8' onChange={(e) => handleSelect(e)}>
                            <option value="" hidden name="types">Select Types:</option>
                            {
                                allTypes?.map(pt => {
                                    return (<option value={pt.name} key={pt.id}>{pt.name}</option>)
                                })
                            }
                        </select>
                        <ul>
                            <li>
                                {
                                    input.types.map(pt =>
                                        <div>
                                            <h5 className='textCreate'>
                                                {allTypes?.find(p => p.name === pt)?.name}
                                            </h5>
                                        </div>
                                    )
                                }
                            </li>
                        </ul>

                    </div>
                    <br />
                    <div>
                        <label className='textCreate'>Image:</label>
                        <input type="url" id='9' value={input.img} name="img" placeholder='Image Url...' onChange={(e) => handleChange(e)} />

                    </div>

                </div>

            </form>


        </div>
    )


}