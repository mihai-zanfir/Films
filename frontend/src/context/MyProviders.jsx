import {createContext, useEffect, useState} from "react";
import {getCountries, getGenres} from "../service/utilityService.jsx";

export const CountriesContext = createContext(null);
export const GenresContext = createContext(null);

export function MyProviders({ children }) {

    const [countries, setCountries] = useState([]);
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        console.log("Load Countries and Genres");
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
        <CountriesContext.Provider value={{ countries }}>
            <GenresContext.Provider value={{ genres }}>
                {children}
            </GenresContext.Provider>
        </CountriesContext.Provider>
    );
}