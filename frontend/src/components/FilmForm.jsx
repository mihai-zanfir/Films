import {useContext, useState} from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import {Avatar, Link, MenuItem, TextField} from "@mui/material";
import {createFilm} from "../service/filmService.jsx";
import newFilm from "../types/FilmObj.tsx";
import newCountry from "../types/CountryObj.tsx";
import newGenre from "../types/GenreObj.tsx";
import {CountriesContext, GenresContext} from "../context/MyProviders.jsx";

export default function FilmForm({films, setFilms}) {

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
    const {countries} = useContext(CountriesContext);
    const {genres} = useContext(GenresContext);

    const handleCreate = () => {
        console.log("New film!");
        //console.log({title, year, director, genre, country, image, imdb, description});
        /*const actorsObj = [{"id": 1, "name": "", "image": "", "imdb": "", "description": ""},
            {"id": 2, "name": "", "image": "", "imdb": "", "description": ""}];*/
        const countryObj = newCountry(country_id, country);
        const genreObj = newGenre(genre_id, genre);
        const filmObj = newFilm(0, title, year, director, genreObj, countryObj, image, imdb, description, actors);
        console.log(filmObj);

        createFilm(filmObj)
            .then((response) => {
                console.log("Film created!");
                console.log(response.data);
                setFilms([...films, response.data]);
                console.log("Last Films");
                console.log(films);
                resetForm();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const resetForm = () => {
        console.log("Reset Form!");
        setTitle("");
        setYear("");
        setDirector("")
        setGenreId("")
        setGenre("")
        setCountryId("")
        setCountry("")
        setImage("");
        setImdb("");
        setDescription("");
        setActors([]);
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

    return (
        <Card key={0} sx={{maxWidth: 400, minHeight: 900}} className="card">
            <TextField label="Title:" value={title} size="small" margin="normal" fullWidth required
                       onChange={(e) => setTitle(e.target.value)}/>
            <CardMedia title={title} image="https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png"
                       sx={{height: 300}} />
            <CardContent>
                <Typography component={'span'} variant="body2" sx={{color: 'text.secondary'}}>
                    <TextField label="Image:" value={image} size="small" margin="normal" fullWidth required
                               onChange={(e) => setImage(e.target.value)}/>
                    <TextField label="Year:" value={year} size="small" margin="normal" fullWidth required
                               onChange={(e) => setYear(e.target.value)}/>
                    <TextField label="Director:" value={director} size="small" margin="normal" fullWidth required
                               onChange={(e) => setDirector(e.target.value)}/>
                    <TextField label="Country:" value={country_id} size="small" margin="normal" fullWidth required
                               onChange={handleCountryChange} select>
                        {countries?.map((country) => (
                            <MenuItem key={country.id} value={country.id}>
                                {country.name}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField label="Genre:" value={genre_id} size="small" margin="normal" fullWidth required
                               onChange={handleGenreChange} select>
                        {genres?.map((genre) => (
                            <MenuItem key={genre.id} value={genre.id}>
                                {genre.name}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField label="Imdb:" value={imdb} size="small" margin="normal" fullWidth required
                               onChange={(e) => setImdb(e.target.value)}/>
                    <TextField label="Description:" value={description} size="small" margin="normal" fullWidth required
                               onChange={(e) => setDescription(e.target.value)} multiline maxRows={4}/>
                    <h3>Actors:</h3>
                    {actors.map((actor) => (
                        <div key={actor.id} className="inline ml2">
                            <Avatar src={actor.image} alt={actor.name}
                                    sx={{width: 80, height: 80, margin: "auto"}}/>
                            <Link href={actor.imdb} target="_blank">{actor.name}</Link>
                        </div>
                    ))}
                </Typography>
            </CardContent>
            <CardActions className="bottom-right">
                <Button onClick={() => handleCreate()} size="small">Create</Button>
                <Button onClick={() => resetForm()} size="small" color="error">Cancel</Button>
            </CardActions>
        </Card>
    );
}