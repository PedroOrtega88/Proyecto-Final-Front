import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from './Home.jsx';
import Movie from './Movie.jsx'; // Cambié la importación aquí
import axios from 'axios';

const App = () => {
  const [peliculas, setPeliculas] = useState(null);
  const urlApi = import.meta.env.VITE_APP_API_URL;

  const fetchData = async () => {
    try {
      const response = await axios.get(urlApi);
      setPeliculas(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/create">Crear</Link>
        </nav>
        {peliculas === null ? (
          <div>Cargando...</div>
        ) : (
          <Routes>
            <Route path="/" element={<Home peliculas={peliculas} />} />
            <Route path="/create" element={<InputCreate />} />
            {peliculas.map(pelicula => (
              <Route
                key={pelicula.id}
                path={`/movie/${pelicula.id}`}
                element={<Movie pelicula={pelicula} />}
              />
            ))}
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default App;
