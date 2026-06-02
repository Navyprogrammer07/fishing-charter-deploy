import React, { useEffect } from "react";

export default function Booking() {
  useEffect(() => {
    // Clear old widgets if they exist (prevents duplicates on refresh/navigation)
    const existingRecommendation = document.getElementById("fbkr-reco-script");
    const existingWeather = document.getElementById("fbkr-weather-script");

    if (existingRecommendation) existingRecommendation.remove();
    if (existingWeather) existingWeather.remove();

    // Recommendation Widget
    const recommendationScript = document.createElement("script");
    recommendationScript.id = "fbkr-reco-script";
    recommendationScript.src =
      "https://fishingbooker.com/widget/get?charterId=43622&widget=recommendation&unique=764&shadow=true";
    recommendationScript.async = true;
    recommendationScript.defer = true;

    // Weather Widget
    const weatherScript = document.createElement("script");
    weatherScript.id = "fbkr-weather-script";
    weatherScript.src =
      "https://fishingbooker.com/widget/get?charterId=43622&widget=weather&unique=926&shadow=true&size=small&units=imperial";
    weatherScript.async = true;
    weatherScript.defer = true;

    document.body.appendChild(recommendationScript);
    document.body.appendChild(weatherScript);

    return () => {
      recommendationScript.remove();
      weatherScript.remove();
    };
  }, []);

  const section = {
    width: "100%",
    maxWidth: "800px",
    marginBottom: "2.5rem",
    textAlign: "center",
  };

  const card = {
    width: "100%",
    background: "#fff",
    borderRadius: "10px",
    padding: "15px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
  };

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
        }}
      >
        {/* TITLE */}
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
          Book Your Trip
        </h1>

        <p style={{ marginBottom: "1rem" }}>
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
            marginBottom: "2rem",
          }}
        >
          Book Now on Fishing Booker
        </a>

        {/* WEATHER FIRST (DECISION MAKING) */}
        <div style={section}>
          <h2 style={{ marginBottom: "1rem" }}>Fishing Conditions</h2>

          <div style={card}>
            <div id="fbkr-widget-926">
              <a href="https://fishingbooker.com">
                <img
                  src="https://static.fishingbooker.com/public/img/widgets/fishingbooker-logo-dark.svg"
                  alt="FishingBooker"
                />
              </a>
            </div>
          </div>
        </div>

        {/* RECOMMENDATIONS SECOND */}
        <div style={section}>
          <h2 style={{ marginBottom: "1rem" }}>
            What Anglers Are Saying
          </h2>

          <div style={card}>
            <div id="fbkr-widget-764">
              <a href="https://fishingbooker.com">
                <img
                  src="https://static.fishingbooker.com/public/img/widgets/fishingbooker-logo-dark.svg"
                  alt="FishingBooker"
                />
              </a>
            </div>
          </div>
        </div>

        {/* CALENDAR */}
        <div style={section}>
          <h2 style={{ marginBottom: "1rem" }}>Check Availability</h2>

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
        </div>
      </div>
    </main>
  );
}