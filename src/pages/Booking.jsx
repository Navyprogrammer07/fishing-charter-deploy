import React from "react";

export default function Booking() {
  return (
    <main
      style={{
        margin: 0,
        padding: 0,
        background: "linear-gradient(135deg, #00b3b3, #3eb3ae)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
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
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
          Book Your Trip
        </h1>

        {/* PHONE */}
        <p style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
          Please call us at{" "}
          <a
            href="tel:+13217040973"
            style={{ color: "white", textDecoration: "underline" }}
          >
            (321) 704-0973
          </a>{" "}
          to book your fishing charter.
        </p>

        {/* BOOKING BUTTON */}
        <p style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
          Or book your trip online with our trusted partner:
        </p>

        <a
          href="https://fishingbooker.com/charters/view/43622?booking_date=07-31-2025&date_search=07-31-2025&booking_persons=2&booking_days=1&booking_children=0"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: "#e25822",
            color: "white",
            padding: "1rem 2rem",
            borderRadius: "8px",
            fontWeight: "bold",
            fontSize: "1.1rem",
            textDecoration: "none",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            marginBottom: "2rem",
          }}
        >
          Book Now on Fishing Booker
        </a>

        {/* 🌊 WINDY WEATHER (NEW SECTION - IMPORTANT) */}
        <h2 style={{ marginBottom: "1rem", fontSize: "1.6rem" }}>
          Current Fishing Conditions
        </h2>

        <div
          style={{
            width: "100%",
            maxWidth: "850px",
            borderRadius: "14px",
            overflow: "hidden",
            boxShadow: "0 6px 18px rgba(0,0,0,0.4)",
            border: "1px solid rgba(255,255,255,0.2)",
            marginBottom: "2.5rem",
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

        {/* AVAILABILITY */}
        <p style={{ marginBottom: "1rem", fontWeight: "600", fontSize: "1.1rem" }}>
          Check availability below:
        </p>

        <div
          style={{
            width: "100%",
            maxWidth: "800px",
            overflow: "hidden",
            borderRadius: "10px",
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
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
      </div>

      {/* MOBILE FIXES */}
      <style>{`
        @media (max-width: 600px) {
          h1 {
            font-size: 2rem !important;
          }
          a {
            font-size: 1rem !important;
            padding: 0.8rem 1.5rem !important;
          }
          iframe {
            height: 400px !important;
          }
        }
      `}</style>
    </main>
  );
}