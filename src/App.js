import React from "react";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NasaPhoto from "./components/NasaPhoto";
import "./App.css";

export default function App() {
  return (

      <div className="app">
        <Routes>
          <Route path="/" element={<Home/>}  exact />
          <Route path="/nasaphoto" element={<NasaPhoto/>}  />
        </Routes>
      </div>
 
  );
}