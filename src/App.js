import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Administration from './Components/Administration/Administration';
import Requirements from './Components/Requirements/Requirements';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>          
          <Route path="/" element={<Home/>}></Route>
          <Route path="/requirements" element={<Requirements/>}></Route>
          <Route path="/administration" element={<Administration/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
