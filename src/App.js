import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Programs from './components/Programs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Quotes from './components/Quotes';
import './App.css';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Quotes />
    <Footer />
  </Router>
);

export default App;
