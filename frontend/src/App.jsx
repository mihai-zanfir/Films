import './App.css'
import { Route, Routes } from "react-router-dom";
import ActorsList from "./components/ActorsList.jsx";
import FilmsList from "./components/FilmsList.jsx";
import NotFound from "./components/NotFound.jsx";
import {Link} from "@mui/material";
import {useState, useEffect} from "react";
import AppHeader from "./components/AppHeader.jsx";
import {getCountries, getGenres} from "./service/utilityService.jsx";
import {getFilmActors} from "./service/filmService.jsx";

function App() {

    const [genres, setGenres] = useState([]);
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        console.log("Load Films");
        getCountries()
            .then((result) => {
                setCountries(result.data);
            })
            .catch((err) => {
                console.log(err);
            });
        getGenres()
            .then((result) => {
                setGenres(result.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="App">
            <AppHeader></AppHeader>
            <nav>
              <Link href="/" className="link">Home</Link>
              <Link href="/films" className="link">Films</Link>
              <Link href="/actors" className="link">Actors</Link>
            </nav>
            <div className="container">
                  <Routes>
                      <Route path="/" element={App}/>
                      <Route path="/films" element={<FilmsList countries={countries} genres={genres}></FilmsList>}/>
                      <Route path="/actors" element={<ActorsList></ActorsList>}/>
                      <Route path="*" element={<NotFound></NotFound>}></Route>
                  </Routes>
            </div>
        </div>
    )
}

export default App
