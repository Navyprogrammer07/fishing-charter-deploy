import React from "react";
import FishingBookerWidget from "../components/FishingBookerWidget";

export default function Booking() {
  return (
    <main
      style={{
        margin: 0,
        padding: 0,
        background: "linear-gradient(135deg, #00b3b3, #3eb3ae)",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        color: "#FF5CA2",
        textShadow: "1px 1px 4px rgba(0,0,0,0.7)",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          padding: "2rem 1rem",
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

        <p style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
          Call us at{" "}
          <a
            href="tel:+13217040973"
            style={{ color: "white", textDecoration: "underline" }}
          >
            (321) 704-0973
          </a>
        </p>

        {/* BOOKING BUTTON */}
        <a
          href="https://fishingbooker.com/charters/view/43622?booking_date=07-31-2025&date_search=07-31-2025&booking_persons=2"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: "#e25822",
            color: "white",
            padding: "1rem 2rem",
            borderRadius: "8px",
            fontWeight: "bold",
            textDecoration: "none",
            marginBottom: "2.5rem",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          }}
        >
          Book Now on Fishing Booker
        </a>

        {/* WEATHER */}
        <div style={{ width: "100%", maxWidth: "800px", marginBottom: "2.5rem" }}>
          <h2 style={{ marginBottom: "1rem" }}>Fishing Conditions</h2>

          <div
            style={{
              background: "#fff",
              borderRadius: "10px",
              padding: "15px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            }}
          >
            <FishingBookerWidget
              id="fbkr-widget-926"
              src="https://fishingbooker.com/widget/get?charterId=43622&widget=weather&unique=926&shadow=true&size=small&units=imperial"
            />
          </div>
        </div>

        {/* CALENDAR */}
        <div style={{ width: "100%", maxWidth: "800px", marginBottom: "2.5rem" }}>
          <h2 style={{ marginBottom: "1rem" }}>Check Availability</h2>

          <iframe
            title="Booking Calendar"
            src="https://calendar.google.com/calendar/embed?src=your_calendar_id&ctz=America%2FNew_York"
            style={{
              width: "100%",
              height: "600px",
              border: 0,
              borderRadius: "10px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            }}
          />
        </div>

        {/* RECOMMENDATIONS */}
        <div style={{ width: "100%", maxWidth: "800px", marginBottom: "2rem" }}>
          <h2 style={{ marginBottom: "1rem" }}>
            What Anglers Are Saying
          </h2>

          <div
            style={{
              background: "#fff",
              borderRadius: "10px",
              padding: "15px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            }}
          >
            <FishingBookerWidget
              id="fbkr-widget-764"
              src="https://fishingbooker.com/widget/get?charterId=43622&widget=recommendation&unique=764&shadow=true"
            />
          </div>
        </div>
      </div>
    </main>
  );
}