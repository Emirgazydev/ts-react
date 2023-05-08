import React from 'react';
import './App.css';
import Blocs from "./components/Blocs";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Jasob from "./components/Jasob";
import Login from "./components/Login";
import Stars from "./components/Stars";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#181818]">
        <Header/>
        <Hero/>
        <Blocs/>
        <Jasob/>
        <Login/>
        <Stars/>
        <Footer/>
    </div>
  );
}

export default App;
