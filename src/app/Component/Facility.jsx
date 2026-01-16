import { BookOpen, Users, ShieldCheck } from "lucide-react";

export default function FacilitiesSection() {
  const facilities = [
    {
      title: "Easy-to-Understand Content",
      description:
        "Simple explanations and clear layouts that help children learn independently and confidently.",
      icon: <BookOpen size={40} />,
    },
    {
      title: "Designed for Young Learners",
      description:
        "Created with child-friendly language, visuals, and activities that match early learning needs.",
      icon: <Users size={40} />,
    },
    {
      title: "Trusted Learning Quality",
      description:
        "Carefully developed books that support steady learning and positive study habits.",
      icon: <ShieldCheck size={40} />,
    },
  ];

  return (
    <div className="relative z-30">
      {/* Desktop Overlay */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl px-6">
        <div className="bg-white rounded-3xl shadow-2xl p-10">
          <div className="grid md:grid-cols-3 gap-8">
            {facilities.map((item, index) => (
              <div
                key={index}
                className="group text-center px-6 py-8 rounded-2xl
                hover:bg-purple-100 transition shadow-sm"
              >
                <div
                  className="w-16 h-16 rounded-full bg-purple-100
                  flex items-center justify-center text-purple-600 mx-auto mb-4
                  transition-transform duration-500  icon-spin"
                >
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold text-purple-600 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile / Tablet */}
      <div className="block md:hidden mt-12 px-6">
        <div className="bg-white rounded-3xl shadow-2xl p-6">
          <div className="grid gap-6">
            {facilities.map((item, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 p-4
                rounded-2xl hover:bg-purple-50 transition shadow-sm"
              >
                <div
                  className="w-12 h-12 rounded-full bg-purple-100
                  flex items-center justify-center text-purple-600
                  transition-transform duration-500
                  group-hover:rotate-[360deg]"
                >
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

      {/* Spacer */}
      <div className="hidden md:block h-[350px]"></div>
    </div>
  );
}

