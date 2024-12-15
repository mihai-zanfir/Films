import { useEffect, useState } from "react";
import { getFilms } from "../service/filmService.jsx";
import {getActors} from "../service/actorService.jsx";
import Film from "./Film.jsx";
import Grid from '@mui/material/Grid2';
import FilmForm from "./FilmForm.jsx";

export default function FilmsList() {

    const [films, setFilms] = useState([]);
    const [allActors, setAllActors] = useState([]);

    useEffect(() => {
        console.log("Load Films");
        getFilms()
            .then((result) => {
                setFilms(result.data);
            })
            .catch((err) => {
                console.log(err);
            });
        getActors()
            .then((result) => {
                setAllActors(result.data);
                console.log(allActors);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <h2>Films</h2>
            <Grid container spacing={2}>
                {films.map((film) => (
                    <Grid key={film.id}>
                        <Film key={film.id} films={films} setFilms={setFilms} film={film} allActors={allActors} />
                    </Grid>
                ))}
                <Grid key={0}>
                    <FilmForm key={0} films={films} setFilms={setFilms} />
                </Grid>
            </Grid>
        </div>
    );
}