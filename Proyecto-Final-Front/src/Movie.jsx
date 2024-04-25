import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Movie() {
  const { id } = useParams();
  const [pelicula, setPelicula] = useState(null);

  useEffect(() => {
    axios.get(`https://proyecto-final-production-4c19.up.railway.app/peliculas/all${id}`)
      .then(response => {
        setPelicula(response.data);
      })
      .catch(error => {
        console.error('Error fetching movie:', error);
      });
  }, [id]);

  if (!pelicula) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2>{pelicula.name}</h2>
      <p>{pelicula.description}</p>
      <p>Nota: {pelicula.note}</p>
      <p>Edad de creación: {pelicula.creationAge}</p>
      <p>Actores: {pelicula.actors.join(', ')}</p>
      <p>Director: {pelicula.director}</p>
      <img src={pelicula.image} alt={pelicula.name} />
      <iframe title="trailer" width="560" height="315" src={pelicula.trailer} frameborder="0" allowfullscreen></iframe>
    </div>
  );
}

export default Movie;
