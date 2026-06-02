import React, { useEffect } from "react";

export default function Booking() {
  useEffect(() => {
    // Prevent double-loading
    if (window.__fbkrLoaded) return;
    window.__fbkrLoaded = true;

    // WEATHER
    const weatherScript = document.createElement("script");
    weatherScript.src =
      "https://fishingbooker.com/widget/get?charterId=43622&widget=weather&unique=926&shadow=true&size=small&units=imperial";
    weatherScript.async = true;
    document.body.appendChild(weatherScript);

    // RECOMMENDATION
    const recoScript = document.createElement("script");
    recoScript.src =
      "https://fishingbooker.com/widget/get?charterId=43622&widget=recommendation&unique=764&shadow=true";
    recoScript.async = true;
    document.body.appendChild(recoScript);
  }, []);

  return (
    <main
      style={{
        margin: 0,
        padding: 0,
        background: "linear-gradient(135deg, #00b3b3, #3eb3ae)",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        color: "#FF5CA2",
        textShadow: "1px 1px 4px rgba(0,0,0,0.7)",
      }}
    >
      <div style={{ width: "100%", maxWidth: "900px", padding: "2rem" }}>
        <h1 style={{ fontSize: "2.5rem", textAlign: "center" }}>
          Book Your Trip
        </h1>

        <p style={{ textAlign: "center" }}>
          Call{" "}
          <a
            href="tel:+13217040973"
            style={{ color: "white", textDecoration: "underline" }}
          >
            (321) 704-0973
          </a>
        </p>

        {/* WEATHER */}
        <h2 style={{ textAlign: "center", marginTop: "2rem" }}>
          Fishing Conditions
        </h2>

        <div
          id="fbkr-widget-926"
          style={{
            background: "#fff",
            borderRadius: "10px",
            padding: "15px",
            marginBottom: "2rem",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          }}
        >
          <a href="https://fishingbooker.com">
            <img
              src="https://static.fishingbooker.com/public/img/widgets/fishingbooker-logo-dark.svg"
              alt="FishingBooker"
            />
          </a>
        </div>

        {/* CALENDAR */}
        <h2 style={{ textAlign: "center" }}>Check Availability</h2>

        <iframe
          title="Booking Calendar"
          src="https://calendar.google.com/calendar/embed?src=your_calendar_id&ctz=America%2FNew_York"
          style={{
            width: "100%",
            height: "600px",
            border: 0,
            borderRadius: "10px",
          }}
        />

        {/* RECOMMENDATIONS */}
        <h2 style={{ textAlign: "center", marginTop: "2rem" }}>
          What Anglers Are Saying
        </h2>

        <div
          id="fbkr-widget-764"
          style={{
            background: "#fff",
            borderRadius: "10px",
            padding: "15px",
            marginBottom: "2rem",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          }}
        >
          <a href="https://fishingbooker.com">
            <img
              src="https://static.fishingbooker.com/public/img/widgets/fishingbooker-logo-dark.svg"
              alt="FishingBooker"
            />
          </a>
        </div>
      </div>
    </main>
  );
}