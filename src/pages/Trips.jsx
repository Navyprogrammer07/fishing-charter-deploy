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
          <h2 style={{ 
            fontSize: "1.8rem", 
            fontWeight: "700", 
            marginBottom: "1rem",
            textAlign: "center",
            color: "#ff4500"
          }}>
            Fishing Charter Rates
          </h2>
          <p style={{ 
            fontSize: "1rem", 
            marginBottom: "2rem",
            textAlign: "center",
            opacity: 0.9
          }}>
            Oak Island, Southport, Holden Beach
          </p>

          {/* Pricing Cards Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.2rem",
            marginBottom: "2rem"
          }}>
            {/* 2-Hour Kids Trip */}
            <div style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "8px",
              padding: "1.2rem",
              border: "2px solid rgba(255, 69, 0, 0.3)",
              textAlign: "center"
            }}>
              <div style={{ fontSize: "1.1rem", fontWeight: "600", marginBottom: "0.5rem" }}>
                2-Hour Kids Trip
              </div>
              <div style={{ fontSize: "1.8rem", fontWeight: "700", color: "#ff4500" }}>
                $300
              </div>
            </div>

            {/* 3-Hour Trips */}
            <div style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "8px",
              padding: "1.2rem",
              border: "2px solid rgba(255, 69, 0, 0.3)"
            }}>
              <div style={{ fontSize: "1.1rem", fontWeight: "600", marginBottom: "0.8rem", textAlign: "center" }}>
                3-Hour Trip
              </div>
              <div style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
                  <span>4 people:</span>
                  <strong style={{ color: "#ff4500" }}>$450</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
                  <span>5 people:</span>
                  <strong style={{ color: "#ff4500" }}>$500</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>6 people:</span>
                  <strong style={{ color: "#ff4500" }}>$550</strong>
                </div>
              </div>
            </div>

            {/* 4-Hour Trips */}
            <div style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "8px",
              padding: "1.2rem",
              border: "2px solid rgba(255, 69, 0, 0.3)"
            }}>
              <div style={{ fontSize: "1.1rem", fontWeight: "600", marginBottom: "0.8rem", textAlign: "center" }}>
                4-Hour Trip
              </div>
              <div style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
                  <span>4 people:</span>
                  <strong style={{ color: "#ff4500" }}>$550</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
                  <span>5 people:</span>
                  <strong style={{ color: "#ff4500" }}>$600</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>6 people:</span>
                  <strong style={{ color: "#ff4500" }}>$650</strong>
                </div>
              </div>
            </div>

            {/* 5-Hour Trips */}
            <div style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "8px",
              padding: "1.2rem",
              border: "2px solid rgba(255, 69, 0, 0.3)"
            }}>
              <div style={{ fontSize: "1.1rem", fontWeight: "600", marginBottom: "0.8rem", textAlign: "center" }}>
                5-Hour Trip
              </div>
              <div style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
                  <span>4 people:</span>
                  <strong style={{ color: "#ff4500" }}>$700</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
                  <span>5 people:</span>
                  <strong style={{ color: "#ff4500" }}>$750</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>6 people:</span>
                  <strong style={{ color: "#ff4500" }}>$800</strong>
                </div>
              </div>
            </div>

            {/* 6-Hour Trips */}
            <div style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "8px",
              padding: "1.2rem",
              border: "2px solid rgba(255, 69, 0, 0.3)"
            }}>
              <div style={{ fontSize: "1.1rem", fontWeight: "600", marginBottom: "0.8rem", textAlign: "center" }}>
                6-Hour Trip
              </div>
              <div style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
                  <span>4 people:</span>
                  <strong style={{ color: "#ff4500" }}>$750</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
                  <span>5 people:</span>
                  <strong style={{ color: "#ff4500" }}>$800</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>6 people:</span>
                  <strong style={{ color: "#ff4500" }}>$850</strong>
                </div>
              </div>
            </div>

            {/* Full Day Trip */}
            <div style={{
              backgroundColor: "rgba(255, 69, 0, 0.15)",
              borderRadius: "8px",
              padding: "1.2rem",
              border: "2px solid rgba(255, 69, 0, 0.5)",
              gridColumn: "1 / -1"
            }}>
              <div style={{ fontSize: "1.2rem", fontWeight: "700", marginBottom: "0.8rem", textAlign: "center", color: "#ff4500" }}>
                Full Day Trip (8 hours)
              </div>
              <div style={{ 
                display: "grid", 
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "0.8rem",
                fontSize: "0.95rem"
              }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>4 people:</span>
                  <strong style={{ color: "#ff4500", fontSize: "1.1rem" }}>$1000</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>5 people:</span>
                  <strong style={{ color: "#ff4500", fontSize: "1.1rem" }}>$1050</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>6 people:</span>
                  <strong style={{ color: "#ff4500", fontSize: "1.1rem" }}>$1150</strong>
                </div>
              </div>
            </div>

            {/* Extended Trip */}
            <div style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "8px",
              padding: "1.2rem",
              border: "2px solid rgba(255, 69, 0, 0.3)",
              textAlign: "center",
              gridColumn: "1 / -1"
            }}>
              <div style={{ fontSize: "1.1rem", fontWeight: "600", marginBottom: "0.5rem" }}>
                Extended Trip
              </div>
              <div style={{ fontSize: "1rem", color: "#ff4500", fontWeight: "600" }}>
                Inquire with us
              </div>
            </div>
          </div>

          <p style={{ 
            fontSize: "1rem", 
            marginBottom: "1.5rem",
            textAlign: "center",
            lineHeight: 1.6,
            padding: "0 1rem"
          }}>
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
          h2 {
            font-size: 1.5rem !important;
          }
          ul {
            font-size: 1rem !important;
          }
          section p {
            font-size: 1rem !important;
          }
          .pricing-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
