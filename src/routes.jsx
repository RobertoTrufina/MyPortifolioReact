import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import MyProjects from "./pages/MyProjects";


export default function ProjectRoute() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projetos" element={<MyProjects />} />
                </Routes>
            </BrowserRouter>


        </>
    )
}
