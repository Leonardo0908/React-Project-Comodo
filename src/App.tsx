import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/estaticos/footer/Footer';
import Navbar from './components/estaticos/navbar/Navbar';
import Application from './pages/application/Application';
import Home from './pages/home/Home';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div style={{ minHeight: '100vh' }} >
          <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/home" element={<Home />} />

            <Route path="/application" element={<Application />} />

          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
