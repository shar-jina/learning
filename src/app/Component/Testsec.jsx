"use client";
import { FileText, PlayCircle } from "lucide-react";

export default function TestSection() {
  return (
    <section className="bg-purple-50 py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-6">
          Take a Quick Test
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Check your knowledge and understanding with fun, interactive tests designed for young learners.  
          Learn and practice in an engaging way!
        </p>

        {/* Test Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-3xl mx-auto">
          <div className="flex flex-col items-center gap-6">
            
            {/* Test Icon */}
            <div className="w-20 h-20 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 animate-pulse">
              <FileText size={40} />
            </div>

            <h3 className="text-2xl font-semibold text-purple-600">
              Take the Test
            </h3>

            <p className="text-gray-600 text-center">
              Practice what you've learned with our simple and interactive tests.  
              Click the button below to start!
            </p>

            {/* Button */}
            <a
              href="/test" // replace with your test page route
              className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-full hover:bg-purple-700 transition"
            >
              <PlayCircle size={22} />
              Start Test
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
