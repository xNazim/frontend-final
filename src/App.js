import React from "react";
import Container from "@mui/material/Container";
import { Route, Routes } from "react-router-dom";

import { Home, Game } from "./pages";

function App() {
    return (
        <>
            <Container maxWidth="lg">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/game" element={<Game />} />
                </Routes>
            </Container>
        </>
    );
}

export default App;
