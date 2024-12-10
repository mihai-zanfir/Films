import { useEffect, useState } from "react";
import { getFilmActors } from "../service/filmService.jsx";
import Film from "./Film.jsx";
import Grid from '@mui/material/Grid2';
import FilmForm from "./FilmForm.jsx";

export default function FilmsList({countries, genres}) {

    const [films, setFilms] = useState([]);

    useEffect(() => {
        console.log("Load Films");
        getFilmActors()
            .then((result) => {
                setFilms(result.data);
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
                        <Film key={film.id} films={films} setFilms={setFilms} film={film} countries={countries} genres={genres} />
                    </Grid>
                ))}
                <Grid key={0}>
                    <FilmForm key={0} films={films} setFilms={setFilms} countries={countries} genres={genres} />
                </Grid>
            </Grid>
        </div>
    );
}