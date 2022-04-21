import React from "react";
import {  Route, Routes } from "react-router-dom";
import "./App.css";
import Registration from "./pages/Registration";
import Main from "./pages/Main";
import Home from "./pages/Home";
import Adherent from "./pages/Adherent";
import Pres from "./pages/Presentation";
import Login from "./pages/Login";
import Admin from "./dashboard/Admin";
import Normal from "./dashboard/Normal";
import Contact from "./pages/Contact";
import SuivieDemande from "./dashboard/SuivieDemande";
import Presentation from "./pages/Presentation";
import Service from "./dashboard/Service";


function App() {
  return (
    <Routes>
      <Route path="/register" element={<Registration />} />
      <Route path="/Normal" element={<Normal />} />

      <Route path="/Main" element={<Main />} />
      <Route path="/" element={<Home/>} />
      <Route path="/Presentation" element={<Presentation/>} />
      <Route path="/Adherent" element={<Adherent/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/Admin" element={<Admin/>} />
      <Route path="/Normal" element={<Normal/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/Suivie" element={<SuivieDemande/>} />
      <Route path="/Suivie" element={<SuivieDemande/>} />
      <Route path="/Service" element={<Service/>} />






    </Routes>
  );
}

export default App;
