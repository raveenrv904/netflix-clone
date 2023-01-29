import React, { useState, useEffect } from 'react';
import "./banner.css";
import axios from "../../axios";
import requests from '../../requests';

const Banner = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(requests.fetchHorrorMovies);
            const randomNum = () => {
                return Math.floor(Math.random() * 20) - 1;
            }
            const randomData = (request.data.results);
            const data = randomData[randomNum()];
            setMovies(data);

        }
        fetchData();
    }, [])


    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    return (
        <header className='banner'
            style={
                {
                    backgroundSize: "cover",
                    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
                    backgroundPosition: "center center"
                }
            }
        >

            <div className="banner__contents">
                <h1 className='banner__title'>{movies?.title || movies?.name || movies?.original_name}</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h2 className='banner__description'>
                    {truncate(movies?.overview, 100)}
                </h2>
            </div>


            <div className="banner--fadeBottom">

            </div>
        </header>
    )
}

export default Banner;