//import { useState } from "react";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import "./css/App.css";
import { MovieProvider } from "./contexts/MovieContext";

import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
