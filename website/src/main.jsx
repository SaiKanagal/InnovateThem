import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router"; // Correct import
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Interests from "./components/Interests";
import Matches from "./components/Matches";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Home /> } /> 
      <Route path="/login" element={<Login />} /> 
      <Route path="/register" element={<Register />} />
      <Route path="/interests" element={<Interests />} />
      <Route path="/matches" element={<Matches />} />
    </Routes>
  </BrowserRouter>
);