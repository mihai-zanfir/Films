import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import {Avatar, Link} from "@mui/material";
import TextFieldEditing from "./TextFieldEditing.jsx";
import {deleteFilm, updateFilm} from "../service/filmService.jsx";
import ActorsDialog from "./ActorsDialog.jsx";
import newFilm from "../types/FilmObj.tsx";
import newCountry from "../types/CountryObj.tsx";
import newGenre from "../types/GenreObj.tsx";

export default function Film({films, setFilms, film, allActors, countries, genres}) {
    const [editingFilm, setEditingFilm] = useState(null);
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [director, setDirector] = useState("");
    const [genre_id, setGenreId] = useState("");
    const [genre, setGenre] = useState("");
    const [country_id, setCountryId] = useState("");
    const [country, setCountry] = useState("");
    const [image, setImage] = useState("");
    const [imdb, setImdb] = useState("");
    const [description, setDescription] = useState("");
    const [actors, setActors] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        console.log("Set Film properties");
        //console.log(film);
        setTitle(film.title);
        setYear(film.year);
        setDirector(film.director)
        setGenreId(film.genre.id)
        setGenre(film.genre.name)
        setCountryId(film.country.id)
        setCountry(film.country.name)
        setImage(film.image);
        setImdb(film.imdb);
        setDescription(film.description);
        setActors(film.actors);
    }, [editingFilm]);

    const handleSaveEditing = () => {
        if (editingFilm) {
            const id = film.id;
            console.log("Save edited film with id=" + id);
            console.log({id, title, year, director, genre, country, image, imdb, description});
            /*const actorsObj = [{"id": 1, "name": "", "image": "", "imdb": "", "description": ""},
                {"id": 2, "name": "", "image": "", "imdb": "", "description": ""}];*/
            const countryObj = newCountry(country_id, country);
            const genreObj = newGenre(genre_id, genre);
            const filmObj = newFilm(id, title, year, director, genreObj, countryObj, image, imdb, description, actors);

            updateFilm(filmObj)
                .then((response) => {
                    console.log("Film updated!");
                    console.log(response.data);
                    setFilms(films.map((film) => film.id === editingFilm.id ? response.data : film));
                    setEditingFilm(null);
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            console.log("Edit film with id=" + film.id);
            setEditingFilm(film);
        }
    };

    const handleCancelDelete = (id) => {
        console.log("Delete film with id=" + id);
        if (editingFilm) {
            console.log("Cancel editing film with id=" + id);
            setEditingFilm(null);
        } else {
            console.log("Delete film with id=" + id);
            deleteFilm(id)
                .then(() => {
                    setFilms(films.filter((film) => film.id !== id));
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    const handleCountryChange = (e) => {
        e.preventDefault();
        setCountryId(e.target.value);
        setCountry(countries.filter(country => country.id === e.target.value)[0].name);
    };

    const handleGenreChange = (e) => {
        e.preventDefault();
        setGenreId(e.target.value);
        setGenre(genres.filter(genre => genre.id === e.target.value)[0].name);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    return (
        <Card key={film.id} sx={{minWidth: 400, maxWidth: 400, minHeight: 900}} className="card">
            <TextFieldEditing objectType="CardHeader" label="Title:" txtValue={title} editing={editingFilm}
                              onChange={(e) => setTitle(e.target.value)} />
            <CardMedia sx={{height: 300}} image={film.image} title={film.title} />
            <CardContent>
                <Typography component={'span'} variant="body2" sx={{color: 'text.secondary'}}>
                    <TextFieldEditing objectType="Image" label="Image:" txtValue={image} editing={editingFilm}
                                      onChange={(e) => setImage(e.target.value)}/>
                    <TextFieldEditing objectType="TextField" label="Year:" txtValue={year} editing={editingFilm}
                                      onChange={(e) => setYear(e.target.value)}/>
                    <TextFieldEditing objectType="TextField" label="Director:" txtValue={director} editing={editingFilm}
                                      onChange={(e) => setDirector(e.target.value)}/>
                    <TextFieldEditing objectType="Select" label="Country:" txtValue={country_id} editing={editingFilm}
                                      onChange={handleCountryChange} selectValues={countries} nameValue={country} />
                    <TextFieldEditing objectType="Select" label="Genre:" txtValue={genre_id} editing={editingFilm}
                                      onChange={handleGenreChange} selectValues={genres} nameValue={genre} />
                    <TextFieldEditing objectType="Link" label="Imdb:" txtValue={imdb} editing={editingFilm}
                                      onChange={(e) => setImdb(e.target.value)}/>
                    <TextFieldEditing objectType="TextArea" label="Description:" txtValue={description}
                                      editing={editingFilm}
                                      onChange={(e) => setDescription(e.target.value)}/>
                    <h3>Actors:</h3>
                    {film.actors.map((actor) => (
                        <div key={actor.id} className="inline ml2">
                            <Avatar src={actor.image} alt={actor.name}
                                    sx={{width: 80, height: 80, margin: "auto"}}/>
                            <Link href={actor.imdb} target="_blank">{actor.name}</Link>
                        </div>
                    ))}
                    {editingFilm &&
                        <Button onClick={handleClickOpen}>
                            Edit Actors
                        </Button>
                    }
                    <ActorsDialog open={open} setOpen={setOpen} allActors={allActors} />
                </Typography>
            </CardContent>
            <CardActions className="bottom-right">
                <Button onClick={() => handleSaveEditing()} size="small">
                    {editingFilm ? `Save` : `Edit`}
                </Button>
                <Button onClick={() => handleCancelDelete(film.id)} size="small" color="error">
                    {editingFilm ? `Cancel` : `Delete`}
                </Button>
            </CardActions>
        </Card>
    );
}