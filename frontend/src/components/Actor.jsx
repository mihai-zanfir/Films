import { useState, useEffect } from "react";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import TextFieldEditing from "./TextFieldEditing.jsx";
import {deleteActor, updateActor} from "../service/actorService.jsx";

export default function Actor({actors, setActors, actor}) {
    const [editingActor, setEditingActor] = useState(null);
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [imdb, setImdb] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        console.log("Set Actor properties");
        //console.log(actor);
        setName(actor.name);
        setImage(actor.image);
        setImdb(actor.imdb);
        setDescription(actor.description);
    }, [editingActor]);

    const handleSaveEditing = () => {
        if (editingActor) {
            const id = actor.id;
            console.log("Save edited actor with id=" + id);
            console.log({id, name, image, imdb, description });
            updateActor({id, name, image, imdb, description })
                .then((response) => {
                    console.log("Actor updated!");
                    console.log(response.data);
                    setActors(actors.map((actor) => actor.id === editingActor.id ? response.data : actor));
                    setEditingActor(null);
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            console.log("Edit actor with id=" + actor.id);
            setEditingActor(actor);
        }
    };

    const handleCancelDelete = (id) => {
        if (editingActor) {
            console.log("Cancel editing actor with id=" + id);
            setEditingActor(null);
        } else {
            console.log("Delete actor with id=" + id);
            deleteActor(id)
                .then(() => {
                    setActors(actors.filter((actor) => actor.id !== id));
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    return (
        <Card key={actor.id} sx={{minHeight: 700, width: 400}} className="card">
            <TextFieldEditing objectType="CardHeader" label="Name:" txtValue={name} editing={editingActor}
                              onChange={(e) => setName(e.target.value)}/>
            <CardMedia title={name} image={actor.image} sx={{height: 300}} />
            <CardContent>
                <Typography component={'span'}variant="body2" sx={{color: 'text.secondary'}}>
                    <TextFieldEditing objectType="Image" label="Image:" txtValue={image} editing={editingActor}
                                      onChange={(e) => setImage(e.target.value)}/>
                    <TextFieldEditing objectType="Link" label="Imdb:" txtValue={imdb} editing={editingActor}
                                      onChange={(e) => setImdb(e.target.value)} />
                    <TextFieldEditing objectType="TextArea" label="Description:" txtValue={description} editing={editingActor}
                                      onChange={(e) => setDescription(e.target.value)}/>
                </Typography>
            </CardContent>
            <CardActions className="bottom-right">
                <Button onClick={() => handleSaveEditing()} size="small">
                    {editingActor ? `Save` : `Edit`}
                </Button>
                <Button onClick={() => handleCancelDelete(actor.id)} size="small" color="error">
                    {editingActor ? `Cancel` : `Delete`}
                </Button>
            </CardActions>
        </Card>
    );
}
