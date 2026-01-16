"use client";
import Image from "next/image";
import { BookOpen, Star, Smile,  } from "lucide-react";
import Link from "next/link";


export default function About() {
  return (
    <section id="about" className="relative pt-64 pb-24 bg-gray-50 z-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        {/* Image */}
        <div className="relative w-full h-[420px] rounded-3xl overflow-hidden shadow-xl">
          <Image
            src="/images/about1.jpg"
            alt="Children learning with colorful books"
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-6">
            About Our Books
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            We create thoughtfully designed books that help children begin their
            learning journey with curiosity and confidence. Our content is simple,
            engaging, and visually rich to keep young minds interested.
          </p>

          <p className="text-gray-600 leading-relaxed mb-8">
            From early reading and writing to numbers, general knowledge, and
            creative activities, our books support learning through play,
            practice, and imagination.
          </p>

          {/* Highlights */}
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 icon-spin">
                <BookOpen size={24} />
              </div>
              <p className="text-gray-600">
                Simple explanations with colorful illustrations and activities.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 icon-spin">
                <Star size={24} />
              </div>
              <p className="text-gray-600">
                Learning content designed to build strong basics naturally.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 icon-spin">
                <Smile size={24} />
              </div>
              <p className="text-gray-600">
                A joyful learning experience that children enjoy every day.
              </p>
            </div>
          </div>
          <Link href='/About'>
          <button className="bg-purple-600 text-white px-7 py-3 rounded-full hover:bg-purple-700 transition">
            About More
          </button>
          </Link>
          
        </div>
      </div>
    </section>
  );
}

