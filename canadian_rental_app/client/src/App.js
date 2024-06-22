import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Categories from "./Components/Categories";
import Items from "./Components/Items";
import Bookings from "./Components/Bookings";
import { NavLink, Navbar } from "reactstrap";


function App() {
  return (
    <div className="App">
      <h1 className="display-1 m-5">CANADIAN RENTAL APP</h1>

      <Navbar color="warning">
        <NavLink href="/bookings">
          <h5>My Bookings</h5>
        </NavLink>
      </Navbar>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Categories/>}/>
          <Route path="/:category" element={<Items/>}/>
          <Route path="/bookings" element={<Bookings/>}/>
        </Routes>
      </BrowserRouter>    
    </div>
  );
}

export default App;
