import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router"; // Correct import
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Home /> } /> 
      <Route path="/login" element={<Login />} /> 
      <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>
);