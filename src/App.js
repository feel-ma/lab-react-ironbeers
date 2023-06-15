import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import React, { Routes, Route, Link } from "react-router-dom"; 
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import AddBeer from './components/AddBeer';
import Home from './components/Home';
import SingleBeer from './components/SingleBeer';


function App() {
  return (
    <div className="App">

    <Routes>
    <Route path="/" element={ <Home/>}> </Route>
          <Route path="/beers" element={ <Beers/>}> </Route>
          <Route path="/beers/:beerId" element={<SingleBeer/> }> </Route>
           <Route path="/random-beer" element={<RandomBeer/> }> </Route>
          <Route path="/new-beer" element={<AddBeer/> }> </Route> 
    </Routes>

    

    
    </div>
  );
}

export default App;
