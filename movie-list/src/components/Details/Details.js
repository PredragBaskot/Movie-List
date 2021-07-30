import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Details.css";

const Details = (props) => {
  const [movieDetails, setMovieDetails] = useState({});

  const params = useParams();

  const fetchById = async () => {
    const url = `http://www.omdbapi.com/?apikey=ccb01116&i=${params.id}`;

    const response = await fetch(url);
    const responseJson = await response.json();

    setMovieDetails(responseJson);
  };

  const Details = () => {
    const entries = Object.entries(movieDetails); //retturns array of key- value
    console.log(entries);
    const i = 13;
    const array = entries
      .slice(0, i)
      .concat(entries.slice(i + 2, entries.length));
    const array2 = array.splice(9, 1);
    return array.map(([key, value]) => {
      return (
        <li>
          <h3>{`${key} : ${value}`}</h3>
        </li>
      );
    });
  };

  useEffect(() => {
    fetchById();
  }, []);

  return (
    <div>
      <div className="imageDetailsLeft">
        <img
          className="slika"
          src={
            movieDetails.Poster === "N/A"
              ? "https://i.redd.it/ds1luav7dl851.jpg"
              : movieDetails.Poster
          }
          alt="movie"
        />
        <h2>{movieDetails.Plot}</h2>
      </div>
      <div className="imageDetailsRight">
        <ul>
          <Details />
        </ul>
      </div>
    </div>
  );
};

export default Details;
