// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";  // import NavBar component
import Home from "./pages/Home";
import About from "./pages/About";
import Trips from "./pages/Trips";
import Gallery from "./pages/Gallery";
import Booking from "./pages/Booking";

export default function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} /> {/* 👈 Set this to "/" */}
          <Route path="/Home" element={<Home/>}/> 
          <Route path="/about" element={<About />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </main>

      <footer className="footer">
        © 2025 Hook Ya Up Fishing Charter. All rights reserved.
      </footer>
    </>
  );
}
