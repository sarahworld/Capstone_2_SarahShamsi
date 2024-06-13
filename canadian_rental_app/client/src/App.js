import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Categories from "./Components/Categories";
import Items from "./Components/Items";


function App() {
  return (
    <div className="App">
      <h1 className="display-1 m-5">CANADIAN RENTAL APP</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Categories/>}/>
          <Route path="/:category" element={<Items/>}/>
        </Routes>
      </BrowserRouter>    
    </div>
  );
}

export default App;
