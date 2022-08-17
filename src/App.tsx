import React from 'react';
import './App.css';
import Footer from './components/estaticos/footer/Footer';
import Navbar from './components/estaticos/navbar/Navbar';
import Home from './components/pages/home/Home';

function App() {
  return (
      <>
       <Navbar />
          <Home />
       <Footer />
      </>
  );
}

export default App;