import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function TestimonialCarousel() {
  const testimonials = [
    {
      name: "Gary W.",
      text: "Captain Josh was amazing with my 10 year old nephew. We caught a lot of fish and a great variety of fish. I would recommend Captain Josh to anyone with children. It was a lot of fun.",
    },
    {
      name: "Stephanie C.",
      text: "Great trip! Captain Josh knows the waterways and did everything to make this a fun trip. We will be booking again!",
    },
    {
      name: "Rebecca W.",
      text: "Had a wonderful day, caught a lot of fish and had a great day on the water.",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const { name, text } = testimonials[index];

  return (
    <div
      style={{
        padding: "1.5rem",
        backgroundColor: "#a6d9d9",
        borderRadius: "12px",
        boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
        maxWidth: 700,
        margin: "3rem auto 1rem auto",
        textAlign: "center",
        color: "#004d40",
      }}
    >
      <p style={{ fontSize: "1.1rem", fontStyle: "italic", lineHeight: 1.6 }}>
        “{text}”
      </p>
      <h4 style={{ marginTop: "1rem", fontWeight: 600 }}>— {name}</h4>
    </div>
  );
}

export default function Home() {
  const nav = useNavigate();

  return (
    <>
      <div
        className="hero"
        style={{
          backgroundImage: "url('/images/hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          minHeight: "100vh",
          color: "#FF5CA2",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "3rem 1rem",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(13, 74, 92, 0.8)",
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: 720,
            width: "100%",
            padding: "1rem",
          }}
        >
          <h1 style={{ fontSize: "2.6rem", marginBottom: "1rem" }}>
            Hook Ya Up Fishing Charters
          </h1>
          <p style={{ fontSize: "1.3rem", lineHeight: 1.6 }}>
            Explore the waters of Holden Beach, Oak Island, and Southport with Captain Josh — a trusted local guide with 14 years of experience and deep roots in the fishing community.
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              marginTop: "2rem",
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button onClick={() => nav("/booking")} className="btn-primary">
              Book Now
            </button>
            <button onClick={() => nav("/about")} className="btn-secondary">
              Meet the Captain
            </button>
          </div>

          {/* Why Fish with Captain Josh */}
          <div
            style={{
              marginTop: "3rem",
              color: "#FF5CA2",
              maxWidth: "100%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <h2 style={{ fontSize: "1.9rem", marginBottom: "1rem" }}>
              Why Fish with Captain Josh?
            </h2>
            <p style={{ fontSize: "1.4rem", lineHeight: 1.6 }}>
              A lifelong resident and respected figure in the coastal Carolina fishing scene, Captain Josh brings not only skill, but unmatched local insight. Whether you're chasing redfish, trout, or flounder — you'll be in the right place at the right time.
            </p>
          </div>

          <TestimonialCarousel />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2.2rem !important;
          }
          .hero p {
            font-size: 1.1rem !important;
          }
          .hero h2 {
            font-size: 1.5rem !important;
          }
        }
      `}</style>
    </>
  );
}
