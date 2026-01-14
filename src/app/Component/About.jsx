"use client";
import Image from "next/image";
import { BookOpen, Star, Smile } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative pt-64 pb-24 bg-gray-50 z-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        {/* Image */}
        <div className="relative w-full h-[420px] rounded-3xl overflow-hidden shadow-xl">
          <Image
            src="/images/about1.jpg"
            alt="Children reading books"
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-6">
            About Our Publisher
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            We are a children’s book publisher dedicated to creating magical stories
            that spark imagination and creativity. Our books combine beautiful illustrations
            with engaging narratives to inspire young readers.
          </p>

          <p className="text-gray-600 leading-relaxed mb-8">
            Our collection focuses on entertaining while teaching valuable lessons,
            encouraging children to love reading and explore their creativity.
          </p>

          {/* Highlights */}
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                <BookOpen size={24} />
              </div>
              <p className="text-gray-600">Creative storytelling that inspires children.</p>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                <Star size={24} />
              </div>
              <p className="text-gray-600">Award-winning authors crafting memorable stories.</p>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                <Smile size={24} />
              </div>
              <p className="text-gray-600">Fun, educational, and engaging content for all ages.</p>
            </div>
          </div>

          <button className="bg-purple-600 text-white px-7 py-3 rounded-full hover:bg-purple-700 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

