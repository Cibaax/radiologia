import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Administration from './Components/Administration/Administration';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>          
          <Route path="/" element={<Home/>}></Route>
          <Route path="/administration" element={<Administration/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
