export default function ContactSection() {
  return (
    <section id="Contact" className="bg-purple-600 py-20 scroll-mt-24">
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
            <p>📧 hallmarkpublishers@gmail.com</p>
            <p>📞 +91 9847033607</p>
            <p>📍 KRL Road, Kundannoor, Kochi</p>
          </div>
        </div>

        {/* Google Map */}
        <div className="rounded-3xl overflow-hidden shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.939574774949!2d76.32989041525968!3d9.956984293318567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d2f1c2222ef%3A0xabcdef1234567890!2sKRL%20Road%2C%20Kundannoor%2C%20Kochi!5e0!3m2!1sen!2sin!4v1678901234567!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </section>
  );
}
