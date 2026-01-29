"use client";
import Image from "next/image";

const galleryItems = [
  {
    src: "/images/gallery1.jpeg",
    
  },
  {
    src: "/images/gallery2.jpeg",
    
  },
  {
    src: "/images/gallery3.jpeg",
    
  },
  {
    src: "/images/gallery4.jpeg",
    
  },
  {
    src: "/images/gallery5.jpeg",
    
  },
  {
    src: "/images/gallery6.jpeg",
    
  },
  {
    src: "/images/gallery7.jpeg",
    
  },
  {
    src: "/images/gallery8.jpeg",
    title: "Our Creative Team",
  },
];

export default function GalleryPage() {
  return (
    <section className="min-h-screen bg-purple-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-600 mb-4">
            Our Achievements
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A glimpse into our journey — celebrating milestones, recognitions,
            book launches, and learning moments that inspire young minds.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-xl bg-white"
            >
              {/* Image */}
              <div className="relative h-72 w-full">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-purple-700/0 group-hover:bg-purple-700/60 transition duration-500 flex items-end">
                <div className="p-6 translate-y-6 group-hover:translate-y-0 transition-all duration-500">
                  <h3 className="text-white text-lg font-semibold">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
