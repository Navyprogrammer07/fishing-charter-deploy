import React from "react";

export default function About() {
  return (
    <div
      style={{
        backgroundImage: "url('/images/about-bg.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh",
        width: "100%",
        padding: "3rem 1rem",
        color: "white",
        textShadow: "1px 1px 4px rgba(0,0,0,0.7)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxSizing: "border-box",
      }}
    >
      <h1
        style={{
          marginBottom: "2rem",
          fontSize: "2.5rem",
          textAlign: "center",
        }}
      >
        Meet the Crew
      </h1>

      <div
        style={{
          width: "100%",
          maxWidth: "1000px",
          background: "rgba(0, 0, 0, 0.65)",
          borderRadius: "16px",
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          boxShadow: "0 8px 24px rgba(0,0,0,0.6)",
        }}
      >
        <img
          src="/images/captain.jpg"
          alt="Captain Josh"
          style={{
            width: "100%",
            maxWidth: "320px",
            borderRadius: "16px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.7)",
            objectFit: "cover",
            alignSelf: "center",
          }}
        />

        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
            Captain Josh Richardson
          </h2>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
            With over 14 years of experience navigating the waters of Holden Beach, Oak Island, and Southport, Captain Josh is a true backwater expert. Born and raised fishing the North Carolina coast, he has spent years mastering the waters of both intercoastal and inshore. More than just a skilled angler, Josh is a patient and enthusiastic guide who loves sharing the excitement of fishing with others. Whether you're a seasoned pro or introducing your kids to their first fishing adventure, Captain Josh’s deep local knowledge and passion for the water ensure a fun, safe, and unforgettable experience.
          </p>
        </div>
      </div>
    </div>
  );
}
