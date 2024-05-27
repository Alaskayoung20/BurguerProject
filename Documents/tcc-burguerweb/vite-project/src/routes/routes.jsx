import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Login } from "../containers/Login";
import { Register } from "../containers/Register";
import {Home} from "../home";

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Register />} />
                <Route path="*" element={<div>Página não encontrada</div>} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;
