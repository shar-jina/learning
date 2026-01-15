export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Kids Learning
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Publishing engaging books and learning materials that inspire
            curiosity, creativity, and confidence in children.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#books" className="hover:text-white">Our Books</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Publications */}
        <div>
          <h4 className="text-white font-semibold mb-4">Publications</h4>
          <ul className="space-y-2">
            <li>Story Books</li>
            <li>Study Materials</li>
            <li>GK & Activity Books</li>
            <li>Creative Learning</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-2">
            <li>📧 info@kidslearningbooks.com</li>
            <li>📞 +91 98765 43210</li>
            <li>📍 Kerala, India</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Kids Learning. All rights reserved.
      </div>
    </footer>
  );
}
