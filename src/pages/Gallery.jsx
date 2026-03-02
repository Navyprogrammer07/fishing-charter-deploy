import React from "react";

const photos = [
  "/images/Bentley1.jpg",
  "/images/Jason1.jpg",
  "/images/Jason2.jpg",
  "/images/Josh1.jpg",
  "/images/Josh2.png",
  "/images/JK.png",
  "/images/fish.png",
  "/images/customer3.jpeg",
  "/images/fish2.png",
  "/images/customer1.jpeg",
  "/images/customer2.jpeg",
  "/images/customer4.jpeg"
];

export default function Gallery() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #d4f0f0 0%, #a6d9d9 100%)",
        padding: "3rem 1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          borderRadius: "12px",
          padding: "2rem",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "2rem",
            color: "#004d40",
            fontSize: "2.5rem",
          }}
        >
          Gallery
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1rem",
          }}
        >
          {photos.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Fishing trip photo ${i + 1}`}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
                objectFit: "cover",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              }}
            />
          ))}
        </div>
      </div>

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
