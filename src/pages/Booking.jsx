import React, { useEffect } from "react";

export default function Booking() {
  useEffect(() => {
    const recommendationScript = document.createElement("script");
    recommendationScript.src =
      "https://fishingbooker.com/widget/get?charterId=43622&widget=recommendation&unique=764&shadow=true";
    recommendationScript.async = true;
    recommendationScript.defer = true;

    const weatherScript = document.createElement("script");
    weatherScript.src =
      "https://fishingbooker.com/widget/get?charterId=43622&widget=weather&unique=889&shadow=true&size=small&units=imperial";
    weatherScript.async = true;
    weatherScript.defer = true;

    document.body.appendChild(recommendationScript);
    document.body.appendChild(weatherScript);

    return () => {
      document.body.removeChild(recommendationScript);
      document.body.removeChild(weatherScript);
    };
  }, []);

  const sectionStyle = {
    width: "100%",
    maxWidth: "800px",
    marginBottom: "2.5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const cardStyle = {
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

        <p style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
          Please call us at{" "}
          <a
            href="tel:+13217040973"
            style={{ color: "white", textDecoration: "underline" }}
          >
            (321) 704-0973
          </a>
        </p>

        {/* BOOKING BUTTON */}
        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
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
            marginBottom: "2.5rem",
          }}
        >
          Book Now on Fishing Booker
        </a>

        {/* WEATHER SECTION (DECISION MAKER) */}
        <div style={sectionStyle}>
          <h2 style={{ marginBottom: "1rem" }}>Fishing Conditions</h2>

          <div style={cardStyle}>
            <div id="fbkr-widget-889">
              <a href="https://fishingbooker.com">
                <img
                  src="https://static.fishingbooker.com/public/img/widgets/fishingbooker-logo-dark.svg"
                  alt="FishingBooker"
                />
              </a>
            </div>
          </div>
        </div>

        {/* CALENDAR SECTION (PRIMARY ACTION) */}
        <div style={sectionStyle}>
          <h2 style={{ marginBottom: "1rem" }}>Check Availability</h2>

          <div
            style={{
              width: "100%",
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
              frameBorder="0"
              scrolling="no"
            />
          </div>
        </div>

        {/* RECOMMENDATIONS (TRUST BUILDER) */}
        <div style={sectionStyle}>
          <h2 style={{ marginBottom: "1rem" }}>
            What Anglers Are Saying
          </h2>

          <div style={cardStyle}>
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