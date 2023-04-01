import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Administration from './Components/Administration/Administration';
import Requirements from './Components/Requirements/Requirements';
import Events from './Components/Administration/Events/Events';
import Registred from './Components/Administration/Registred/Registred';
import NavBar from './Components/Administration/NavBar/NavBar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>          
          <Route path="/" element={<Home/>}></Route>
          <Route path="/requirements" element={<Requirements/>}></Route>
          <Route path="/administration" element={<><Administration/><NavBar/></>}></Route>
          <Route path="/administration/events" element={<><Events/><NavBar/></>}></Route>
          <Route path="/administration/registred" element={<><Registred/><NavBar/></>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
