import React from "react";
import Container from "@mui/material/Container";
import { Route, Routes } from "react-router-dom";

import { Home, Game, Rules, History } from "./pages";
import { SimpleBreadcrumbs } from "components";
import logo from "images/alatoo.png";

function App() {
    return (
        <div className="main">
            <Container maxWidth="lg">
                <div className="main__header">
                    <SimpleBreadcrumbs />
                    <div className="main__logo">
                        <img src={logo} alt="logo" />
                    </div>
                </div>
                <div className="main__inner">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/game" element={<Game />} />
                        <Route path="/rules" element={<Rules />} />
                        <Route path="/history" element={<History />} />
                    </Routes>
                </div>
            </Container>
        </div>
    );
}

export default App;
