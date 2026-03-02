import React from "react";

const testimonials = [
  {
    name: "Mark R.",
    quote:
      "Best fishing trip we've ever had! Captain Josh made it so easy and fun for the whole family.",
  },
  {
    name: "Sarah L.",
    quote:
      "Caught my first redfish thanks to this amazing crew. Highly recommend for anyone visiting Holden Beach!",
  },
  {
    name: "Kevin M.",
    quote:
      "Professional, friendly, and knowledgeable. Will definitely book again next season.",
  },
];

export default function Contact() {
  return (
    <main
      className="content"
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "2rem 1rem",
        color: "#0c2d48",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Contact Us</h1>

      <p style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
        Call us at{" "}
        <a href="tel:+1234567890" style={{ color: "#0077b6" }}>
          (123) 456-7890
        </a>{" "}
        to book your trip.
      </p>

      <p style={{ fontSize: "1.1rem", marginBottom: "2rem" }}>
        Email:{" "}
        <a
          href="mailto:info@backwatercharters.com"
          style={{ color: "#0077b6" }}
        >
          info@backwatercharters.com
        </a>
      </p>

      <section
        style={{
          marginTop: "2rem",
          backgroundColor: "#f0f6fa",
          padding: "2rem 1rem",
          borderRadius: 12,
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>
          What Our Customers Say
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5rem",
            justifyContent: "center",
          }}
        >
          {testimonials.map(({ name, quote }, i) => (
            <div
              key={i}
              style={{
                background: "white",
                padding: "1.25rem",
                borderRadius: 8,
                maxWidth: 320,
                minWidth: 260,
                fontStyle: "italic",
                color: "#0c2d48",
                boxShadow: "0 4px 10px rgba(0, 119, 194, 0.1)",
              }}
            >
              <p style={{ fontSize: "1.05rem", lineHeight: 1.6 }}>"{quote}"</p>
              <h4
                style={{
                  marginTop: "1rem",
                  fontWeight: 700,
                  fontStyle: "normal",
                  textAlign: "right",
                  color: "#005a8b",
                  fontSize: "1rem",
                }}
              >
                — {name}
              </h4>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @media (max-width: 600px) {
          h1 {
            font-size: 2rem !important;
          }
          h2 {
            font-size: 1.6rem !important;
          }
          p, a {
            font-size: 1rem !important;
          }
        }
      `}</style>
    </main>
  );
}
