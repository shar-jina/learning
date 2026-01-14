"use client";
import Image from "next/image";
import { useState } from "react";

export default function OurBooks() {
 const books = [
    {
      title: "I Love Nature",
      author: "Soave Diare",
      image: "/images/book2.jpg",
    },
    {
      title: "We are Moving Away",
      author: "Nina Nill",
      image: "/images/book3.jpg",
    },
    {
      title: "The Stories Of God",
      author: "Dave Connis",
      image: "/images/book4.jpg",
    },
    {
      title: "Tonya and her Perfect Tea",
      author: "Alina Slyshik",
      image: "/images/book5.jpg",
    },
    {
      title: "I can Be All Three",
      author: "Salima Alikhan",
      image: "/images/book6.jpg",
    },
    {
      title: "No One Owns The Color",
      author: "Gianna Davy",
      image: "/images/book7.jpg",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
    setTimeout(() => setActiveIndex(null), 200); // reset after animation
  };

  return (
    <section id="books" className="relative py-24 bg-gray-50 z-10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-12 text-center">
          Our Books
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {books.map((book, index) => (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden 
                          transition-transform duration-200 cursor-pointer 
                          hover:shadow-2xl
                          ${activeIndex === index ? "scale-105" : "scale-100"}`}
            >
              <div className="relative h-64 w-full">
                <Image
                  src={book.image}
                  alt={book.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-purple-600 mb-2">
                  {book.title}
                </h3>
                <p className="text-gray-500 mb-4">{book.author}</p>
                <button className="bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700 transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
