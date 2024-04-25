import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    axios.get('https://proyecto-final-production-4c19.up.railway.app/peliculas/all')
      .then(response => {
        setPeliculas(response.data);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de películas</h1>
      <ul>
        {peliculas.map(pelicula => (
          <li key={pelicula.id}>
            <a href={`/movie/${pelicula.id}`}>{pelicula.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
