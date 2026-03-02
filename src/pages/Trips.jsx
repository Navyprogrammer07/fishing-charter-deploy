import React from "react";

export default function Trips() {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100vw",
        overflowX: "hidden",
        color: "#ff4500",
        textShadow: "1px 1px 4px rgba(0,0,0,0.7)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      {/* Background Images */}
      <img
        src="/images/Josh3.jpg"
        alt="Fishing scene left"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "40vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: -1,
        }}
      />
      <img
        src="/images/Josh5.jpg"
        alt="Fishing scene right"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "40vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: -1,
        }}
      />

      {/* Content Container */}
      <div
        style={{
          position: "relative",
          maxWidth: "720px",
          margin: "0 auto",
          minHeight: "100vh",
          padding: "3rem 1.5rem 4rem 1.5rem",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          borderRadius: "12px",
          boxSizing: "border-box",
          textAlign: "center",
          overflowY: "auto",
        }}
      >

        {/* Pricing Section */}
        <section style={{ marginBottom: "2.5rem" }}>
          <p style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "0.5rem" }}>
            Fishing Charter Rates: Oak Island, Southport, Holden Beach
          </p>

          <ul
            style={{
              listStyle: "none",
              paddingLeft: 0,
              fontSize: "1.1rem",
              lineHeight: 1.8,
              marginBottom: "1.5rem",
            }}
          >
            <li style={{ marginBottom: "0.5rem" }}><strong>2-Hour Kids Trip:</strong> $300</li>
            
            <li style={{ marginBottom: "0.5rem" }}><strong>3-Hour Trip (4 people):</strong> $450</li>
            <li style={{ marginBottom: "0.5rem" }}><strong>3-Hour Trip (5 people):</strong> $500</li>
            <li style={{ marginBottom: "0.5rem" }}><strong>3-Hour Trip (6 people):</strong> $550</li>
            
            <li style={{ marginBottom: "0.5rem" }}><strong>4-Hour Trip (4 people):</strong> $550</li>
            <li style={{ marginBottom: "0.5rem" }}><strong>4-Hour Trip (5 people):</strong> $600</li>
            <li style={{ marginBottom: "0.5rem" }}><strong>4-Hour Trip (6 people):</strong> $650</li>
            
            <li style={{ marginBottom: "0.5rem" }}><strong>5-Hour Trip (4 people):</strong> $700</li>
            <li style={{ marginBottom: "0.5rem" }}><strong>5-Hour Trip (5 people):</strong> $750</li>
            <li style={{ marginBottom: "0.5rem" }}><strong>5-Hour Trip (6 people):</strong> $800</li>
            
            <li style={{ marginBottom: "0.5rem" }}><strong>6-Hour Trip (4 people):</strong> $750</li>
            <li style={{ marginBottom: "0.5rem" }}><strong>6-Hour Trip (5 people):</strong> $800</li>
            <li style={{ marginBottom: "0.5rem" }}><strong>6-Hour Trip (6 people):</strong> $850</li>
            
            <li style={{ marginBottom: "0.5rem" }}><strong>Full Day Trip (8 hours - 4 people):</strong> $1000</li>
            <li style={{ marginBottom: "0.5rem" }}><strong>Full Day Trip (8 hours - 5 people):</strong> $1050</li>
            <li style={{ marginBottom: "0.5rem" }}><strong>Full Day Trip (8 hours - 6 people):</strong> $1150</li>
            
            <li style={{ marginTop: "0.5rem" }}><strong>Extended Trip:</strong> Inquire with us</li>
          </ul>

          <p style={{ fontSize: "1rem", marginBottom: "1.5rem" }}>
            We seek out live fresh bait daily and will pick you up at a predetermined location.
            Interested in helping with bait or watching? Let us know when making arrangements.
          </p>
        </section>

        {/* Payment & Contact */}
        <section style={{ marginBottom: "2rem" }}>
          <p style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "0.5rem" }}>
            Accepted Forms of Payment:
          </p>
          <p style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
            <strong>Cash, Visa, Zelle</strong>
          </p>
        </section>

        {/* What We Provide */}
        <section style={{ marginBottom: "2rem" }}>
          <p style={{ fontSize: "1.2rem", fontWeight: "700", marginBottom: "0.5rem" }}>
            We Provide:
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ul
              style={{
                listStyle: "disc",
                paddingLeft: "1.2rem",
                fontSize: "1rem",
                marginBottom: "1.5rem",
                textAlign: "left",
                maxWidth: 500,
              }}
            >
              <li><strong>19 Ft Center Console Wellcraft Fishing Charter</strong></li>
              <li><strong>Fishing license</strong></li>
              <li><strong>Rods and reels (or bring your own)</strong></li>
              <li><strong>Tackle, bait, and ice</strong></li>
            </ul>
          </div>
        </section>

        {/* What You Bring */}
        <section>
          <p style={{ fontSize: "1.2rem", fontWeight: "700", marginBottom: "0.5rem" }}>
            Things For You To Bring:
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ul
              style={{
                listStyle: "disc",
                paddingLeft: "1.2rem",
                fontSize: "1rem",
                marginBottom: "1.5rem",
                textAlign: "left",
                maxWidth: 500,
              }}
            >
              <li><strong>Good spirit and adventure</strong></li>
              <li><strong>Hat, SPF 90+, sunglasses, camera/phone</strong></li>
              <li><strong>Snacks and drinks</strong></li>
              <li><strong>Comfortable clothes for weather</strong></li>
            </ul>
          </div>
        </section>
      </div>

      <style>{`
        @media (max-width: 768px) {
          h1 {
            font-size: 2rem !important;
          }
          ul {
            font-size: 1rem !important;
          }
          section p {
            font-size: 1rem !important;
          }
        }
      `}</style>
    </div>
  );
}
