"use client";
import { Book, Award, Users, Globe } from "lucide-react";
import { useEffect, useState, useRef } from "react";

export default function ServicesSection() {
  const services = [
    {
      title: "Book Publishing",
      description:
        "We bring imaginative children’s stories to life with vibrant illustrations and professional publishing.",
      icon: <Book size={32} />,
    },
    {
      title: "Global Distribution",
      description:
        "Our books reach kids all around the world through online and offline channels.",
      icon: <Globe size={32} />,
    },
    {
      title: "Award Winning Content",
      description:
        "We ensure quality stories that have won recognition for creativity and educational value.",
      icon: <Award size={32} />,
    },
    {
      title: "Collaborative Authors",
      description:
        "We work closely with talented authors and illustrators to create engaging stories for children.",
      icon: <Users size={32} />,
    },
  ];

  const stats = [
    { title: "Books Published", value: 120 },
    { title: "Authors Collaborated", value: 35 },
    { title: "Awards Won", value: 15 },
    { title: "Countries Reached", value: 12 },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            animateCounts();
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.3 } // trigger when 30% visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);

  const animateCounts = () => {
    const duration = 2000; // 2 seconds
    const intervalTime = 20;

    stats.forEach((stat, i) => {
      let start = 0;
      const increment = stat.value / (duration / intervalTime);
      const timer = setInterval(() => {
        start += increment;
        if (start >= stat.value) {
          start = stat.value;
          clearInterval(timer);
        }
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[i] = Math.floor(start);
          return newCounts;
        });
      }, intervalTime);
    });
  };

  return (
    <section
      id="services"
      className="relative py-24 bg-white z-10"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-12 text-center">
          Our Services & Achievements
        </h2>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-purple-200 rounded-2xl p-6 text-center hover:shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4 text-purple-600">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-purple-600 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Animated Stats Card */}
        <div className="bg-purple-600 text-white rounded-3xl shadow-2xl p-12 flex flex-col md:flex-row justify-around items-center gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-4xl font-bold">
                {counts[index]}{stat.title === "Books Published" ? "+" : ""}
              </h3>
              <p className="mt-2">{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
