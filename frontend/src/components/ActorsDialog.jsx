import {Avatar, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import Button from "@mui/material/Button";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {useState} from "react";

export default function ActorsDialog({open, setOpen, allActors}) {
    const [selected, setSelected] = useState([]);

    const handleClose = () => {
        setOpen(false);
    };

    const handleClick = (event, id) => {
        console.log("handleClick id=" + id);
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }
        setSelected(newSelected);
    };

    return (
            <Dialog
                open={open}
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                keepMounted
            >
                <DialogTitle>{"Actors"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description" component={'span'}>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 500 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell></TableCell>
                                        <TableCell>Avatar</TableCell>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Imdb</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {allActors.map((row) => {
                                        const isItemSelected = selected.includes(row.id);

                                        return (
                                            <TableRow
                                                hover
                                                onClick={(event) => handleClick(event, row.id)}
                                                role="checkbox"
                                                aria-checked={isItemSelected}
                                                tabIndex={-1}
                                                key={row.id}
                                                selected={isItemSelected}
                                                sx={{ cursor: 'pointer' }}
                                            >
                                            <TableCell padding="checkbox">
                                                <Checkbox
                                                    color="primary"
                                                    checked={isItemSelected}
                                                    inputProps={{'aria-labelledby': 'labelId'}}
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <Avatar src={row.image} alt={row.name}
                                                               sx={{width: 80, height: 80, margin: "auto"}}/>
                                            </TableCell>
                                            <TableCell component="th" scope="row">{row.name}</TableCell>
                                            <TableCell>{row.imdb}</TableCell>
                                        </TableRow>
                                    )})}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    {selected}
                    <Button onClick={handleClose}>Save Actors</Button>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
    );
}