import axios from "axios";
import { BACKEND_URL} from "../constants.jsx";

const api = axios.create({baseURL: BACKEND_URL});

const getActors = () => api.get("/actors");
const createActor = (actor) => api.post("/actors", actor);
const updateActor = (actor) => api.put(`/actors/${actor.id}`, actor);
const deleteActor = (id) => api.delete(`/actors/${id}`);

export { getActors, createActor, updateActor, deleteActor };