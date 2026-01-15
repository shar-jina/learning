export default function ContactSection() {
  return (
    <section id="contact" className="bg-purple-600 py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        
        {/* Text */}
        <div className="text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let’s Build a Love for Learning Together
          </h2>
          <p className="text-purple-100 leading-relaxed mb-8">
            Have questions about our books, study materials, or publishing
            services? Reach out to us — we’re happy to help parents, schools,
            and institutions.
          </p>

          <div className="space-y-3 text-purple-100">
            <p>📧 info@kidslearningbooks.com</p>
            <p>📞 +91 98765 43210</p>
            <p>📍 Kerala, India</p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <form className="space-y-5 ">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border text-black rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border text-black rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border text-black rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-full hover:bg-purple-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
