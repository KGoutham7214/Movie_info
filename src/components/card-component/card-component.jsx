
import React, {useState} from "react";
import './card-components-styles.css'
import { useGlobalContext } from "../../contexts/context";

const Card = () => {
  const {movie} = useGlobalContext();
 

  console.log(movie.imdbID + "sdcs");
  return (
    <div className="movie-card">
    {
    movie.map((movie) => {
        return(
          <div className='' key={movie.imdbID}>
          
          <div className="card-content" onClick={()=>{location.href = `https://www.imdb.com/title/${movie.imdbID}/`}}>
          <img 
            key={movie.imdbID}
            alt={`movie ${movie.Title}`}
            src={`${movie.Poster}`}
          />
            <h2>Title: {movie.Title}</h2>
            <p>Type: {movie.Type}</p>
            <p>Release-year: {movie.Year}</p>
          </div>
          </div>
        ); 
      })
    }
    </div>
  );
}

export default Card;