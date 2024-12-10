import {AppBar, Box, IconButton, Link, Stack, Toolbar} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {AccountCircle} from "@mui/icons-material";

export default function AppHeader() {

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar>
                <Toolbar>
                    <IconButton color="inherit">
                        <MenuIcon />
                    </IconButton>
                    <h2>Films & Actors</h2>
                    <Box sx={{ flexGrow: 1 }}></Box>
                    <Stack direction="row" spacing={2}>
                        <Link href="/" className="menu-link">Home</Link>
                        <Link href="/films" className="menu-link">Films</Link>
                        <Link href="/actors" className="menu-link">Actors</Link>
                    </Stack>
                    <IconButton color="inherit">
                        <AccountCircle/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}