"use client";
import { BookOpen, Star, Smile } from "lucide-react";

export default function Highlights() {
  const highlights = [
    {
      title: "Engaging Stories",
      description:
        "Books filled with adventure, magic, and lessons that children love.",
      icon: <BookOpen size={40} />,
    },
    {
      title: "Award-Winning Authors",
      description:
        "Stories crafted by talented authors recognized for excellence in children's literature.",
      icon: <Star size={40} />,
    },
    {
      title: "Fun & Educational Content",
      description:
        "Books that entertain while helping kids learn and grow creatively.",
      icon: <Smile size={40} />,
    },
  ];

  return (
    <div className="relative z-30 -mt-40 pointer-events-none">
      {/* Card */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-full max-w-7xl px-6 pointer-events-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-10">
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="text-center px-6 py-8 rounded-2xl hover:bg-purple-100 transition shadow-sm transition-transform transform hover:scale-105 cursor-pointer "
              >
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-purple-600 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Spacer to prevent overlap with next section */}
      <div className="h-[450px]"></div>
    </div>
  );
}

