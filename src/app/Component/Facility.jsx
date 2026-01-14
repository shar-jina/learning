import { BookOpen, Users, ShieldCheck } from "lucide-react";

export default function FacilitiesSection() {
  const facilities = [
    {
      title: "Interactive Learning",
      description:
        "Engaging activities, games, and visual content that make learning fun and effective for children.",
      icon: <BookOpen size={40} />,
    },
    {
      title: "Qualified Mentors",
      description:
        "Experienced and caring educators who guide children with patience, creativity, and modern teaching methods.",
      icon: <Users size={40} />,
    },
    {
      title: "Safe & Friendly Environment",
      description:
        "A secure, child-friendly learning space that encourages confidence, curiosity, and growth.",
      icon: <ShieldCheck size={40} />,
    },
  ];

  return (
    <div className="relative z-30">
      {/* Hero Overlay for Desktop */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl px-6">
        <div className="bg-white rounded-3xl shadow-2xl p-10">
          <div className="grid md:grid-cols-3 gap-8">
            {facilities.map((item, index) => (
              <div
                key={index}
                className="text-center px-6 py-8 rounded-2xl hover:bg-purple-100 transition shadow-sm"
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

      {/* Mobile / Tablet version (stacked below Hero) */}
      <div className="block md:hidden mt-12 px-6">
        <div className="bg-white rounded-3xl shadow-2xl p-6">
          <div className="grid gap-6">
            {facilities.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-2xl hover:bg-purple-50 transition shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-600 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Spacer to push AboutSection down for desktop overlay */}
      <div className="hidden md:block h-[350px]"></div>
    </div>
  );
}

