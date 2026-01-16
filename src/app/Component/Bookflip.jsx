"use client";
import { useState } from "react";

export default function BookDetailPage() {
  const [page, setPage] = useState(0);

  const bookTitle = "Fun Learning for Kids";
  const bookDescription =
    "An interactive book that makes learning fun and engaging for children with activities and exercises.";

  const pages = [
    {
      title: "Index",
      content: (
        <ul className="space-y-2 text-gray-700">
          <li>• Introduction</li>
          <li>• Learning Objectives</li>
          <li>• Activities</li>
          <li>• Practice Pages</li>
          <li>• Fun Exercises</li>
        </ul>
      ),
    },
    {
      title: "Introduction",
      content:
        "This book is designed to build strong foundational skills in a fun and engaging way. Children learn through pictures, activities, and simple explanations.",
    },
    {
      title: "Learning Through Play",
      content:
        "Activities in this book help children develop thinking skills, creativity, and confidence through playful learning methods.",
    },
    {
      title: "Practice & Fun",
      content:
        "Each section includes practice pages and fun exercises to reinforce learning in an enjoyable manner.",
    },
  ];

  const nextPage = () => {
    if (page < pages.length - 1) setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 0) setPage(page - 1);
  };

  return (
    <section
      className="min-h-screen flex flex-col items-center px-6 py-12"
      style={{ backgroundColor: "#DDD6CB" }}
    >
      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-800 mb-2 text-center">
        {bookTitle}
      </h1>
      <p className="text-gray-600 mb-10 text-center max-w-2xl">
        {bookDescription}
      </p>

      {/* Book Container */}
      <div
        className="relative w-[720px] h-[500px] flex"
        style={{ perspective: "2200px" }}
      >
        {/* Left click area */}
        <div
          className="absolute left-0 w-1/2 h-full z-50 cursor-pointer"
          onClick={prevPage}
        ></div>

        {/* Right click area */}
        <div
          className="absolute right-0 w-1/2 h-full z-50 cursor-pointer"
          onClick={nextPage}
        ></div>

        {/* LEFT SIDE (stacked pages) */}
        <div className="w-1/2 h-full relative">
          <div
            className="absolute inset-0 rounded-l-xl shadow-inner"
            style={{
              backgroundColor: "#FAF8F3",
              backgroundImage:
                "radial-gradient(circle, rgba(230,224,210,0.6) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          ></div>

          {pages.map((_, i) => {
            if (i < page) {
              return (
                <div
                  key={i}
                  className="absolute inset-0 rounded-l-xl"
                  style={{
                    backgroundColor: "#F0ECE3",
                    boxShadow: "inset 0 0 12px rgba(0,0,0,0.05)",
                    zIndex: i,
                  }}
                ></div>
              );
            }
          })}

          {/* Left arrow always visible */}
          <div
            className="absolute top-1/2 left-3 -translate-y-1/2 transition-transform duration-300 hover:animate-bounce"
            style={{
              fontSize: "32px",
              color: "rgba(32, 30, 30, 0.25)",
              fontWeight: "bold",
              pointerEvents: "auto",
            }}
          >
            ❮
          </div>
        </div>

        {/* RIGHT SIDE (flipping pages) */}
        <div className="w-1/2 h-full relative">
          {pages.map((p, i) => {
            const isFlipped = i < page;
            const isCurrent = i === page;

            return (
              <div
                key={i}
                className="absolute w-full h-full"
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "left",
                  zIndex: pages.length - i,
                  transform: isFlipped ? "rotateY(-180deg)" : "rotateY(0deg)",
                  transition: "transform 0.75s ease",
                }}
              >
                {/* FRONT SIDE */}
                <div
                  style={{
                    backfaceVisibility: "hidden",
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    padding: "2rem",
                    borderRadius: "0 1rem 1rem 0",
                    backgroundColor: "#FEFDFB",
                    backgroundImage: `
                      radial-gradient(circle, rgba(175,170,160,0.5) 0.8px, transparent 0.8px),
                      linear-gradient(to right, #FEFDFB 95%, rgba(0,0,0,0.06) 100%)
                    `,
                    backgroundSize: "26px 26px, 100% 100%",
                    boxShadow: isCurrent
                      ? "8px 0 22px rgba(0,0,0,0.22)"
                      : "0 5px 14px rgba(0,0,0,0.14)",
                  }}
                >
                  <h2 className="text-2xl font-bold text-purple-700 mb-4">
                    {p.title}
                  </h2>

                  <div className="text-gray-700 leading-relaxed">{p.content}</div>

                  <span className="absolute bottom-4 right-6 text-sm text-gray-400">
                    Page {i + 1}
                  </span>

                  {/* Right arrow always visible */}
                  <div
                    className="absolute top-1/2 right-3 -translate-y-1/2 transition-transform duration-300 hover:animate-bounce"
                    style={{
                      fontSize: "32px",
                      color: "rgba(0,0,0,0.25)",
                      fontWeight: "bold",
                      pointerEvents: "auto",
                    }}
                  >
                    ❯
                  </div>
                </div>

                {/* BACK SIDE */}
                <div
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    borderRadius: "0 1rem 1rem 0",
                    backgroundColor: "#EFEADF",
                    boxShadow: "inset 0 0 20px rgba(0,0,0,0.05)",
                  }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Instruction */}
      <p className="text-gray-500 mt-6 text-center">
        Click the right side to go forward, left side to go back
      </p>
    </section>
  );
}
