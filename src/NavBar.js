import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const nav = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav
      style={{
        backgroundColor: "#008080",
        boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
        position: "sticky",
        top: 0,
        zIndex: 1100,
        padding: "0.75rem 1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        <img
          src="/images/logo.png"
          alt="Backwater Fishing Charters Logo"
          style={{ width: 160, cursor: "pointer" }}
          onClick={() => nav("/Home")}
        />

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          style={{
            background: "none",
            border: "none",
            color: "#FF5CA2",
            fontSize: "1.8rem",
            display: "none",
            cursor: "pointer",
          }}
          className="hamburger"
        >
          ☰
        </button>

        {/* Nav Links */}
        <div
          className={`nav-links ${menuOpen ? "show" : ""}`}
          style={{
            display: "flex",
            gap: "1.5rem",
            alignItems: "center",
          }}
        >
          {["Home", "Trips", "About", "Gallery"].map((text, i) => (
            <button
              key={i}
              onClick={() => {
                nav(`/${text.toLowerCase()}`);
                setMenuOpen(false);
              }}
              style={{
                background: "none",
                border: "none",
                color: "#FF5CA2",
                fontSize: "1.6rem",
                cursor: "pointer",
              }}
            >
              {text}
            </button>
          ))}

          <button
            onClick={() => {
              nav("/booking");
              setMenuOpen(false);
            }}
            className="btn-primary"
            style={{
              fontSize: "1.6rem",
              padding: "0.4rem 1rem",
            }}
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Mobile menu styles (JSX-in-CSS override below 768px) */}
      <style>{`
        @media (max-width: 768px) {
          .hamburger {
            display: block;
          }
          .nav-links {
            flex-direction: column;
            align-items: flex-start;
            background-color: #006666;
            width: 100%;
            padding: 1rem;
            display: none;
          }
          .nav-links.show {
            display: flex;
          }
        }
      `}</style>
    </nav>
  );
}
