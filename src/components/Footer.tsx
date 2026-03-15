export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16 mt-0 border-t border-blue-700">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* About Section */}
          <div className="bg-white/5 p-6 rounded-xl border border-blue-700/30 hover:border-blue-500/50 transition">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-cyan-400">
              🎓 Inspire
            </h3>
            <p className="text-slate-300 leading-relaxed text-sm">Empowering young minds through quality education and holistic development since 2010. Building leaders and innovators for tomorrow's world.</p>
            <div className="mt-6 flex gap-3">
              <a href="#" className="w-10 h-10 bg-blue-600 hover:bg-cyan-600 rounded-full flex items-center justify-center transition transform hover:scale-110">f</a>
              <a href="#" className="w-10 h-10 bg-blue-600 hover:bg-cyan-600 rounded-full flex items-center justify-center transition transform hover:scale-110">𝕏</a>
              <a href="#" className="w-10 h-10 bg-blue-600 hover:bg-cyan-600 rounded-full flex items-center justify-center transition transform hover:scale-110">in</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-white/5 p-6 rounded-xl border border-blue-700/30 hover:border-blue-500/50 transition">
            <h3 className="text-lg font-bold mb-6 text-cyan-400 border-b-2 border-blue-500 pb-3">Quick Links</h3>
            <ul className="text-slate-300 space-y-3 text-sm">
              <li><a href="/" className="hover:text-cyan-400 hover:translate-x-1 transition transform inline-block">🏠 Home</a></li>
              <li><a href="/academics" className="hover:text-cyan-400 hover:translate-x-1 transition transform inline-block">📚 Academics</a></li>
              <li><a href="/admissions" className="hover:text-cyan-400 hover:translate-x-1 transition transform inline-block">🎓 Admissions</a></li>
              <li><a href="/contact" className="hover:text-cyan-400 hover:translate-x-1 transition transform inline-block">📞 Contact</a></li>
            </ul>
          </div>

          {/* Important Links */}
          <div className="bg-white/5 p-6 rounded-xl border border-blue-700/30 hover:border-blue-500/50 transition">
            <h3 className="text-lg font-bold mb-6 text-cyan-400 border-b-2 border-blue-500 pb-3">Resources</h3>
            <ul className="text-slate-300 space-y-3 text-sm">
              <li><a href="/about" className="hover:text-cyan-400 hover:translate-x-1 transition transform inline-block">ℹ️ About Us</a></li>
              <li><a href="/announcements" className="hover:text-cyan-400 hover:translate-x-1 transition transform inline-block">📢 Announcements</a></li>
              <li><a href="/events" className="hover:text-cyan-400 hover:translate-x-1 transition transform inline-block">🎉 Events</a></li>
              <li><a href="#" className="hover:text-cyan-400 hover:translate-x-1 transition transform inline-block">🔒 Privacy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="bg-white/5 p-6 rounded-xl border border-blue-700/30 hover:border-blue-500/50 transition">
            <h3 className="text-lg font-bold mb-6 text-cyan-400 border-b-2 border-blue-500 pb-3">Contact Us</h3>
            <div className="text-slate-300 space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-xl text-cyan-400">📍</span>
                <p>456 Education Lane, Knowledge City, KC 45678</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl text-cyan-400">📞</span>
                <p>(555) 234-5678</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl text-cyan-400">📧</span>
                <p>info@inspireschool.edu</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
            <div className="text-gray-400 text-sm">
              <p>© 2026 Inspire Public School. All rights reserved.</p>
            </div>
            <div className="text-gray-400 text-sm">
              <p>Privacy Policy • Terms of Service</p>
            </div>
            <div className="md:text-right text-gray-400 text-sm">
              <p>Designed for Excellence • Built for the Future</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
