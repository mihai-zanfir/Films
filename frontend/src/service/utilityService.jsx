import axios from "axios";
import { BACKEND_URL} from "../constants.jsx";

const api = axios.create({baseURL: BACKEND_URL});

const getCountries = () => api.get("/countries");
const getGenres = () => api.get("/genres");

export { getCountries, getGenres };