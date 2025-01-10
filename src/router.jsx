// React Router configuration

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LearnPage from './pages/LearnPage';
import CreditsPage from './pages/CreditsPage';

const AppRouter = () => (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/learn" element={<LearnPage />} />
            <Route path="/credits" element={<CreditsPage />} />
        </Routes>
    </Router>
);

export default AppRouter;
