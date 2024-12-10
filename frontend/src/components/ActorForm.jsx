import { useState } from "react";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import {createActor} from "../service/actorService.jsx";
import {TextField} from "@mui/material";

export default function ActorForm({actors, setActors}) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [imdb, setImdb] = useState("");
    const [description, setDescription] = useState("");

    const handleCreate = () => {
        console.log("New actor!");
        console.log({name, image, imdb, description });
        createActor({name, image, imdb, description })
            .then((response) => {
                console.log("Actor created!");
                console.log(response.data);
                setActors([...actors, response.data]);
                console.log("Last Actors");
                console.log(actors);
                resetForm();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const resetForm = () => {
        console.log("Reset Form!");
        setName("");
        setImage("");
        setImdb("");
        setDescription("");
    };

    return (
        <Card sx={{minHeight: 700, width: 400}} className="card">
            <TextField label="Name:" value={name} size="small" margin="normal" fullWidth required
                       onChange={(e) => setName(e.target.value)}/>
            <CardMedia title={name} image="https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png"
                       sx={{height: 300}} />
            <CardContent>
                <Typography component={'span'} variant="body2" sx={{color: 'text.secondary'}}>
                    <TextField label="Image:" value={image} size="small" margin="normal" fullWidth required
                           onChange={(e) => setImage(e.target.value)}/>
                    <TextField label="Imdb:" value={imdb} size="small" margin="normal" fullWidth required
                           onChange={(e) => setImdb(e.target.value)}/>
                    <TextField label="Description:" value={description} size="small" margin="normal" fullWidth required
                           onChange={(e) => setDescription(e.target.value)} multiline maxRows={4} />
                </Typography>
            </CardContent>
            <CardActions className="bottom-right">
                <Button onClick={() => handleCreate()} size="small">Create</Button>
                <Button onClick={() => resetForm()} size="small" color="error">Cancel</Button>
            </CardActions>
        </Card>
    );
}
