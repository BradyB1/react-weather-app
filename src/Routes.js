import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { About } from './pages/AboutPage';
import { Contact } from './pages/ContactPage';

const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default MyRoutes;
