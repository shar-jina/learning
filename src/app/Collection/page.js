"use client";

export default function GalleryPage() {
  // Example book data
  const books = [
    {
      title: "Fun Learning for Kids",
      cover: "/images/book1.jpeg", 
    },
    {
      title: "Alphabet Adventures",
      cover: "/images/book2.jpeg",
    },
    {
      title: "Math is Fun",
      cover: "/images/book3.jpeg",
    },
    {
      title: "Stories & Activities",
      cover: "/images/book4.jpeg",
    },
    {
      title: "Creative Learning",
      cover: "/images/book5.jpeg",
    },
    {
      title: "Creative Learning",
      cover: "/images/book6.jpeg",
    },
    {
      title: "Creative Learning",
      cover: "/images/book7.jpeg",
    },
    {
      title: "Creative Learning",
      cover: "/images/book8.jpeg",
    },
    {
      title: "Creative Learning",
      cover: "/images/book9.jpeg",
    },
    {
      title: "Creative Learning",
      cover: "/images/book10.jpeg",
    },
    {
      title: "Creative Learning",
      cover: "/images/book11.jpeg",
    },
  ];

  return (
    <main className="min-h-screen bg-purple-50 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-purple-600 mb-8 text-center">
          Our Book Gallery
        </h1>
        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Explore our collection of educational books designed for young learners. 
          Click on any book to learn more or preview its content.
        </p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {books.map((book, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition hover:scale-105"
            >
              <img
                src={book.cover}
                alt={book.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold text-purple-600">
                  {book.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
