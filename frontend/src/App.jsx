import './App.css'
import { Route, Routes } from "react-router-dom";
import ActorsList from "./components/ActorsList.jsx";
import FilmsList from "./components/FilmsList.jsx";
import NotFound from "./components/NotFound.jsx";
import {Link} from "@mui/material";
import AppHeader from "./components/AppHeader.jsx";
import {MyProviders} from "./context/MyProviders.jsx";

function App() {
    return (
        <div className="App">
            <AppHeader></AppHeader>
            <nav>
              <Link href="/" className="link">Home</Link>
              <Link href="/films" className="link">Films</Link>
              <Link href="/actors" className="link">Actors</Link>
            </nav>
            <div className="container">
                <MyProviders>
                    <Routes>
                        <Route path="/" element={App}/>
                        <Route path="/films" element={<FilmsList/>}/>
                        <Route path="/actors" element={<ActorsList/>}/>
                        <Route path="*" element={<NotFound></NotFound>}></Route>
                    </Routes>
                </MyProviders>
            </div>
        </div>
    )
}

export default App
