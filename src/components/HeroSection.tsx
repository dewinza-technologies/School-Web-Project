import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Professional background - Clean gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"></div>
      
      {/* Subtle accent stripe */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"></div>
      
      {/* Large subtle shapes for depth - Professional and minimal */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-600 rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-600 rounded-full opacity-5 blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8 text-white">
            {/* Badge */}
            <div className="inline-block">
              <span className="text-sm font-semibold text-blue-300 border border-blue-400 rounded-full px-4 py-2 bg-blue-900/30">
                Inspire Public School
              </span>
            </div>

            {/* Main heading */}
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-4 text-white">
                Excellence in 
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                  Education
                </span>
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed max-w-lg">
                Empowering students to achieve their dreams through quality education, character development, and innovative learning experiences.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                href="/admissions" 
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl text-center"
              >
                Apply Now
              </Link>
              <Link 
                href="/about" 
                className="border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-400/10 px-8 py-3 rounded-lg font-semibold transition-all duration-300 text-center"
              >
                Learn More
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-700">
              <div>
                <div className="text-3xl font-bold text-white">1500+</div>
                <p className="text-sm text-slate-400">Students</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">98%</div>
                <p className="text-sm text-slate-400">Success Rate</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">16+</div>
                <p className="text-sm text-slate-400">Years Legacy</p>
              </div>
            </div>
          </div>

          {/* Right side - Professional card */}
          <div className="hidden lg:block">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-xl hover:border-slate-600 transition-colors duration-300">
              <div className="grid grid-cols-2 gap-6">
                {/* Excellence */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="text-4xl mb-3">🏆</div>
                  <h3 className="font-bold mb-1">Excellence</h3>
                  <p className="text-sm text-blue-100">Best standards</p>
                </div>

                {/* Innovation */}
                <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-xl p-6 text-white text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="text-4xl mb-3">💡</div>
                  <h3 className="font-bold mb-1">Innovation</h3>
                  <p className="text-sm text-cyan-100">Modern approach</p>
                </div>

                {/* Learning */}
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="text-4xl mb-3">📚</div>
                  <h3 className="font-bold mb-1">Learning</h3>
                  <p className="text-sm text-blue-100">Quality education</p>
                </div>

                {/* Growth */}
                <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl p-6 text-white text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="text-4xl mb-3">🚀</div>
                  <h3 className="font-bold mb-1">Growth</h3>
                  <p className="text-sm text-cyan-100">Student success</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
