"use client";
import { Eye, Smile, Layers } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-purple-50 py-32 flex flex-col items-center gap-12">
      
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-purple-600 mb-6 text-center">
        About Our Learning Platform
      </h1>
      <p className="text-gray-600 max-w-3xl text-center mb-12">
        We create interactive and fun learning experiences for young children. 
        Our platform combines storytelling, games, videos, and activities to make learning enjoyable and engaging.
      </p>

      {/* Our Vision */}
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-3xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 animate-pulse">
            <Eye size={40} />
          </div>
          <h2 className="text-2xl font-semibold text-purple-600">Our Vision</h2>
          <p className="text-gray-600 text-center">
            To nurture young minds with knowledge, creativity and values through innovative educational resources. We aspire to empower teachers, inspire learners and contribute to build a brighter tomorrow. Childcraft Hallmark Publishers
          </p>
        </div>
      </div>

      {/* Our Mission */}
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-3xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 animate-pulse">
            <Smile size={40} />
          </div>
          <h2 className="text-2xl font-semibold text-purple-600">Our Mission</h2>
          <p className="text-gray-600 text-center">
            To touch every classroom with creativity, care and inspiration. We strive to empower teachers with effective tools and guide students on a joyful journey of discovery — making learning not just a task, but a lifelong adventure.
          </p>
        </div>
      </div>

      {/* Our Services */}
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-3xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 animate-pulse">
            <Layers size={40} />
          </div>
          <h2 className="text-2xl font-semibold text-purple-600">Our Services</h2>
          <p className="text-gray-600 text-center">
           We are dedicated to supporting schools, educators, and learners through a range of solutions. These include textbook publishing with support materials for teachers, as well as workshops and training programs to empower educators.
          </p>
        </div>
      </div>

    </main>
  );
}
