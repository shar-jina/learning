"use client";
import { useEffect, useState } from "react";

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      image: "/images/hero1.jpg",
      title: "Magical Stories for Young Minds",
      description: "Discover books that spark imagination and creativity.",
      button: "Browse Books",
    },
    {
      image: "/images/hero2.jpg",
      title: "Fun & Educational Adventures",
      description: "Stories that entertain while teaching valuable lessons.",
      button: "Discover Stories",
    },
    {
      image: "/images/hero3.jpg",
      title: "Inspire a Love of Reading",
      description: "Engaging books for children of all ages.",
      button: "Explore Our Collection",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${slides[current].image})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {slides[current].title}
          </h1>
          <p className="text-lg md:text-xl mb-6">{slides[current].description}</p>
          <button className="bg-purple-600 px-6 py-3 rounded-full hover:bg-purple-700 transition">
            {slides[current].button}
          </button>
        </div>
      </div>

      {/* Arrows */}
      <div className="absolute bottom-48 left-1/2 -translate-x-1/2 flex gap-6 z-20">
        <button
          onClick={prevSlide}
          className="w-14 h-14 rounded-full flex items-center justify-center
            bg-white/20 backdrop-blur-md border border-white/40
            text-white text-2xl hover:bg-white/30 transition"
        >
          &#8592;
        </button>
        <button
          onClick={nextSlide}
          className="w-14 h-14 rounded-full flex items-center justify-center
            bg-white/20 backdrop-blur-md border border-white/40
            text-white text-2xl hover:bg-white/30 transition"
        >
          &#8594;
        </button>
      </div>
    </section>
  );
}



