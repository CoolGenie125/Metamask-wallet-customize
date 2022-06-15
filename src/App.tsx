import React from 'react';
import Ourteam from 'Component/Pages/Ourteam';
import Roadmap from 'Component/Pages/Roadmap';
import Story from 'Component/Pages/Story';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from './Component/Pages/Contact';
import Landing from "./Component/Pages/Landing";
import Planet from "./Component/Pages/Planet";


function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
        <Route path="/" element={<Landing />} />
          <Route path="/planet" element={<Planet />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Ourteam />} />
          <Route path="/map" element={<Roadmap />} />
          <Route path="/story" element={<Story />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
