import React from "react";

export default function Booking() {
  // Simple wind-based message (you can tweak later)
  const conditionLevel = "Good"; // Good / Fair / Rough

  const conditionColor =
    conditionLevel === "Good"
      ? "#2ecc71"
      : conditionLevel === "Fair"
      ? "#f1c40f"
      : "#e74c3c";

  return (
    <main
      style={{
        margin: 0,
        padding: 0,
        background: "linear-gradient(135deg, #00b3b3, #3eb3ae)",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "#FF5CA2",
        textShadow: "1px 1px 4px rgba(0,0,0,0.7)",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          padding: "2rem 1rem",
          width: "100%",
          maxWidth: "900px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* TITLE */}
        <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>
          Book Your Trip
        </h1>

        {/* TRUST LINE */}
        <p style={{ fontSize: "1rem", marginBottom: "1rem", opacity: 0.9 }}>
          Local captain • Real-time conditions • Fast booking
        </p>

        {/* PHONE */}
        <p style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
          Call{" "}
          <a
            href="tel:+13217040973"
            style={{ color: "white", textDecoration: "underline" }}
          >
            (321) 704-0973
          </a>{" "}
          or book online below
        </p>

        {/* BOOK BUTTON */}
        <a
          href="https://fishingbooker.com/charters/view/43622"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: "#e25822",
            color: "white",
            padding: "1rem 2rem",
            borderRadius: "10px",
            fontWeight: "bold",
            fontSize: "1.1rem",
            textDecoration: "none",
            boxShadow: "0 6px 18px rgba(0,0,0,0.35)",
            marginBottom: "1.5rem",
          }}
        >
          Book Now on Fishing Booker
        </a>

        {/* 🌊 CONDITIONS SCORE (NEW) */}
        <div
          style={{
            width: "100%",
            maxWidth: "850px",
            marginBottom: "1rem",
          }}
        >
          <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
            Today’s Fishing Conditions
          </h2>

          <div
            style={{
              background: "rgba(255,255,255,0.12)",
              borderRadius: "12px",
              padding: "1rem",
              border: `2px solid ${conditionColor}`,
              marginBottom: "1rem",
            }}
          >
            <div
              style={{
                fontSize: "1.6rem",
                fontWeight: "bold",
                color: conditionColor,
              }}
            >
              {conditionLevel}
            </div>

            <div style={{ fontSize: "0.95rem", marginTop: "0.3rem" }}>
              {conditionLevel === "Good" &&
                "Excellent day for fishing — light winds & stable water."}
              {conditionLevel === "Fair" &&
                "Moderate conditions — fishable but expect some wind."}
              {conditionLevel === "Rough" &&
                "Choppy conditions — trip may be more challenging."}
            </div>
          </div>
        </div>

        {/* 🌊 WINDY MAP */}
        <div
          style={{
            width: "100%",
            maxWidth: "850px",
            borderRadius: "14px",
            overflow: "hidden",
            boxShadow: "0 6px 18px rgba(0,0,0,0.4)",
            marginBottom: "2rem",
          }}
        >
          <iframe
            title="Windy Weather Map"
            width="100%"
            height="450"
            src="https://embed.windy.com/embed2.html?lat=33.916&lon=-78.179&zoom=8&level=surface&overlay=wind&menu=&message=&marker=&calendar=&pressure=&type=map&location=coordinates&detail=&detailLat=33.916&detailLon=-78.179&metricWind=mph&metricTemp=%C2%B0F"
            frameBorder="0"
          />
        </div>

        {/* URGENCY LINE */}
        <p style={{ fontSize: "0.95rem", marginBottom: "1rem", opacity: 0.85 }}>
          👉 Morning trips typically offer the best bite conditions
        </p>

        {/* CALENDAR */}
        <p style={{ marginBottom: "1rem", fontWeight: "600" }}>
          Check availability below:
        </p>

        <div
          style={{
            width: "100%",
            maxWidth: "800px",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
          }}
        >
          <iframe
            title="Booking Calendar"
            src="https://calendar.google.com/calendar/embed?src=your_calendar_id&ctz=America%2FNew_York"
            style={{
              border: 0,
              width: "100%",
              height: "600px",
            }}
          />
        </div>
      </div>

      {/* 📞 MOBILE STICKY CALL BUTTON */}
      <a
        href="tel:+13217040973"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#e25822",
          color: "white",
          padding: "14px 18px",
          borderRadius: "50px",
          fontWeight: "bold",
          boxShadow: "0 6px 18px rgba(0,0,0,0.4)",
          textDecoration: "none",
          zIndex: 999,
        }}
      >
        Call Now
      </a>

      {/* MOBILE STYLES */}
      <style>{`
        @media (max-width: 600px) {
          h1 {
            font-size: 2rem !important;
          }
        }
      `}</style>
    </main>
  );
}