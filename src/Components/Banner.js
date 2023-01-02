import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { reqApi } from '../Api/Api'
import imgPlay from './../Assets/play.png'
import imgList from './../Assets/list.png'

const baseImgUrl = process.env.REACT_APP_BASEIMGURL

function Banner() {
    const [movie, setMovie] = useState([])
    const backgroundImg = {
        backgroundSize: "cover",
        backgroundImage: `url("${baseImgUrl}/${movie?.backdrop_path}")`,
        backgroundPosition: "center center"
    }

    useEffect(() => {
        const listMovie = async () =>{
            const movies = await axios.get(reqApi.moviesOriginal)
            setMovie(movies.data.results[Math.floor(Math.random() * movies.data.results.length - 1)])
            return movies
        }
        listMovie()
    },[])

    console.log(movie)
    
    return (
        <header className='h-128 flex flex-col justify-center mb-7' style={backgroundImg}>
            <div className='sm:ml-14 ml-6 flex flex-col justify-center gap-4 h-128 pt-20'>
                <h1 className='text-white sm:text-5xl text-4xl font-medium'>{movie.name || movie.original_name}</h1>
                <div className='flex gap-4'>
                    <button className="w-28 h-10 rounded-md bg-black backdrop-blur-sm bg-opacity-20 flex items-center justify-center  hover:bg-black gap-2 transition ease-in-out duration-300">
                        <img src={imgPlay} className='w-3'/>
                        <p className='text-white'>Play</p>
                    </button>
                    <button className="w-28 h-10 rounded-md bg-black backdrop-blur-sm bg-opacity-20 flex items-center justify-center hover:bg-black gap-2 transition ease-in-out duration-300">
                        <img src={imgList} className='w-3'/>
                        <p className='text-white'>My List</p>
                    </button>
                </div>
                <p className='text-white sm:text-lg text:sm font-normal sm:w-1/2 w-72'>
                    {movie.overview}
                </p>
            </div>
            <div className='fade'></div>
        </header>
    )
}

export default Banner