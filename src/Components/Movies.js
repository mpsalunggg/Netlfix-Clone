import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Comp.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import deleteImg from "./../Assets/delete.png"

const imgBaseUrl = process.env.REACT_APP_BASEIMGURL;

function Movies({ title, url, poster }) {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [ketTrailer, setKetTrailer] = useState(false);

  const settings = {
    // height: "390",
    width: "100%",
    playerVars: {
      autoPlay: 1,
    },
  };

  useEffect(() => {
    const listMovie = async () => {
      const movie = await axios.get(url + "&append_to_response=videos");
      // console.log(movie)
      setMovie(movie.data.results);
      // return movie
    };
    listMovie();
  }, [url]);

  const clickTrailer = (mov) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(
        mov?.name || mov?.title || mov?.original_title || mov?.original_name
      )
        .then((url) => {
          if (url) {
            const urlMov = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlMov.get("v"));
            setKetTrailer(false);
          } else {
            setKetTrailer(true);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const closeClick = () => {
    setTrailerUrl('')
  }
  return (
    <div>
      <h1 className="sm:text-3xl text-2xl font-bold ml-5 text-white">
        {title}
      </h1>
      <div className="flex overflow-x-scroll overflow-y-hidden webkit-scroll p-6">
        {movie.map((val) => {
          return (
            <img
              key={val.id}
              src={
                poster
                  ? `${imgBaseUrl}/${val.poster_path}`
                  : `${imgBaseUrl}/${val.backdrop_path}`
              }
              className={`w-full sm:max-h-28 max-h-20 object-contain mr-2 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer ${
                poster && "posterLg"
              }`}
              onClick={() => clickTrailer(val)}
            />
          );
        })}
      </div>
      {}
      {ketTrailer ? (
        <h1 className="text-white bg-red p-3 m-3 font-medium text-center">
          Error Video
        </h1>
      ) : (
        trailerUrl && <div>
          <div className="bg-gray-700 p-3 m-3 flex justify-center items-center gap-2 cursor-pointer" onClick={() => closeClick()}>
            <p className="text-white">Close Trailer</p>
            <img src={deleteImg} className='w-4'/>
          </div>
          <YouTube videoId={trailerUrl} opts={settings} className='pb-3'/>
        </div>
      )}
    </div>
  );
}

export default Movies;
