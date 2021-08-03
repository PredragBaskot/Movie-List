import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Details.css";
import { API_URL, API_KEY } from '../../constants';

const Details = (props) => {
  const [movieDetails, setMovieDetails] = useState({});

  const params = useParams();

  const fetchById = async () => {
    const url = `${API_URL}/?apikey=${API_KEY}&i=${params.id}`;

    const response = await fetch(url);
    const responseJson = await response.json();

    setMovieDetails(responseJson);
  };

  const Details = () => {
    const entries = Object.entries(movieDetails); //retturns array of key- value

    const i = 13;
    const array = entries
      .slice(0, i)
      .concat(entries.slice(i + 2, entries.length));
    array.splice(9, 1);

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
