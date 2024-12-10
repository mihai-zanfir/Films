import { useEffect, useState } from "react";
import { getActors } from "../service/actorService.jsx";
import Actor from "./Actor.jsx";
import Grid from "@mui/material/Grid2";
import ActorForm from "./ActorForm.jsx";

export default function ActorsList() {

    const [actors, setActors] = useState([]);

    useEffect(() => {
        console.log("Load Actors");
        getActors()
            .then((result) => {
                setActors(result.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <h2>Actors</h2>
            <Grid container spacing={2}>
                {actors.map((actor) => (
                    <Grid key={actor.id}>
                        <Actor key={actor.id} actors={actors} setActors={setActors} actor={actor}/>
                    </Grid>
                ))}
                <Grid key={0}>
                    <ActorForm actors={actors} setActors={setActors}/>
                </Grid>
            </Grid>
        </div>
    );
}