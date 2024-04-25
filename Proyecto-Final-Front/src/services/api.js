import axios from 'axios';

const API_URL = 'https://proyecto-final-production-4c19.up.railway.app/peliculas/all';

const api = axios.create({
  baseURL: API_URL,
});

export default api;
