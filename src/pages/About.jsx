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
      <h1 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>
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
          gap: "2.5rem",
        }}
      >
        {/* CAPTAIN IMAGE */}
        <img
          src="/images/captain.jpg"
          alt="Captain Josh"
          style={{
            width: "100%",
            maxWidth: "320px",
            borderRadius: "16px",
            alignSelf: "center",
          }}
        />

        {/* CAPTAIN BIO */}
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
            Captain Josh Richardson
          </h2>

          <p style={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
            With over 15 years of experience navigating the waters of Holden Beach, Oak Island, and Southport, Captain Josh is a true backwater expert. Born and raised fishing the North Carolina coast, he has spent years mastering inshore and nearshore waters. Whether you're a seasoned angler or bringing your family for the first time, he ensures a safe and memorable experience.
          </p>
        </div>

        {/* BOAT SECTION */}
        <div
          style={{
            padding: "1.5rem",
            borderRadius: "14px",
            background: "rgba(255, 255, 255, 0.08)",
            border: "1px solid rgba(255,255,255,0.2)",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: "1.9rem", marginBottom: "1rem" }}>
            Our Vessel
          </h2>

          <img
            src="/images/contender-21ft.jpg"
            alt="21 ft Contender"
            style={{
              width: "100%",
              maxWidth: "650px",
              borderRadius: "14px",
              marginBottom: "1rem",
            }}
          />

          <h3 style={{ fontSize: "1.4rem" }}>21 ft Contender</h3>

          <p style={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
            Built for speed, stability, and comfort in both inshore and nearshore waters.
            Our Contender provides a smooth ride and top-tier fishing experience.
          </p>
        </div>
      </div>
    </div>
  );
}