import axios from "axios";
import { BACKEND_URL} from "../constants.jsx";

const api = axios.create({baseURL: BACKEND_URL});

const getFilmActors = () => api.get("/films");
const createFilm = (film) => api.post("/films", film);
const updateFilm = (film) => api.put(`/films/${film.id}`, film);
const deleteFilm = (id) => api.delete(`/films/${id}`);

export { getFilmActors, createFilm, updateFilm, deleteFilm };