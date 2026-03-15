import HeroSection from '@/components/HeroSection';

export default function Home() {
  return (
    <main className="bg-white">
      <HeroSection />

      {/* Features Section with Hover Effects */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-blue-900 mb-4">Why Choose Inspire Public School?</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">We're committed to providing the best educational experience with world-class facilities and dedicated faculty</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 border-t-4 border-blue-500 cursor-pointer">
              <div className="text-6xl mb-6">📖</div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Quality Academics</h3>
              <p className="text-slate-600 leading-relaxed">Our rigorous curriculum is designed to excel national and international standards. We focus on conceptual understanding and practical application of knowledge.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 border-t-4 border-cyan-500 cursor-pointer">
              <div className="text-6xl mb-6">🏆</div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Character Development</h3>
              <p className="text-slate-600 leading-relaxed">Building leaders with strong values. We emphasize integrity, discipline, respect, and social responsibility through various co-curricular activities.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 border-t-4 border-blue-600 cursor-pointer">
              <div className="text-6xl mb-6">🚀</div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Modern Facilities</h3>
              <p className="text-slate-600 leading-relaxed">State-of-the-art laboratories, digital classrooms, sports complexes, and a sprawling campus designed to foster excellence and innovation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition border border-blue-500/30">
              <div className="text-5xl font-bold mb-2">1500+</div>
              <p className="text-xl text-cyan-300">Happy Students</p>
              <p className="text-sm text-slate-400 mt-2">Across all grades and streams</p>
            </div>
            <div className="text-center p-8 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition border border-blue-500/30">
              <div className="text-5xl font-bold mb-2">98%</div>
              <p className="text-xl text-cyan-300">Success Rate</p>
              <p className="text-sm text-slate-400 mt-2">In board examinations</p>
            </div>
            <div className="text-center p-8 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition border border-blue-500/30">
              <div className="text-5xl font-bold mb-2">75+</div>
              <p className="text-xl text-cyan-300">Expert Faculty</p>
              <p className="text-sm text-slate-400 mt-2">Qualified and experienced teachers</p>
            </div>
            <div className="text-center p-8 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition border border-blue-500/30">
              <div className="text-5xl font-bold mb-2">16</div>
              <p className="text-xl text-cyan-300">Years Legacy</p>
              <p className="text-sm text-slate-400 mt-2">Of excellence in education</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Strengths */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-16">Our Strengths</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex gap-4 hover:bg-blue-50 p-4 rounded-lg transition">
              <div className="flex-shrink-0 text-4xl">✨</div>
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Innovative Teaching Methods</h3>
                <p className="text-slate-600">We use modern pedagogical approaches including experiential learning, project-based education, and technology integration.</p>
              </div>
            </div>
            <div className="flex gap-4 hover:bg-blue-50 p-4 rounded-lg transition">
              <div className="flex-shrink-0 text-4xl">🌟</div>
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Holistic Development</h3>
                <p className="text-slate-600">Beyond academics, we focus on sports, arts, culture, and personality development of every student.</p>
              </div>
            </div>
            <div className="flex gap-4 hover:bg-blue-50 p-4 rounded-lg transition">
              <div className="flex-shrink-0 text-4xl">🎯</div>
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Individual Attention</h3>
                <p className="text-slate-600">With a low student-teacher ratio, we ensure every student gets personalized attention and guidance.</p>
              </div>
            </div>
            <div className="flex gap-4 hover:bg-blue-50 p-4 rounded-lg transition">
              <div className="flex-shrink-0 text-4xl">🏅</div>
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Proven Track Record</h3>
                <p className="text-slate-600">Our alumni are excelling in top universities and professions globally.</p>
              </div>
            </div>
            <div className="flex gap-4 hover:bg-blue-50 p-4 rounded-lg transition">
              <div className="flex-shrink-0 text-4xl">💻</div>
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Digital Learning</h3>
                <p className="text-gray-600">Smart classrooms, online learning platforms, and cutting-edge technology for enhanced learning.</p>
              </div>
            </div>
            <div className="flex gap-4 hover:bg-blue-50 p-4 rounded-lg transition">
              <div className="flex-shrink-0 text-4xl">🤝</div>
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Supportive Community</h3>
                <p className="text-gray-600">A warm, inclusive environment where every student and parent feels valued and supported.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Join Our Community?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-cyan-300">Start your journey towards excellence. Apply now and become part of Inspire Public School family!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/admissions" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition transform hover:scale-105 text-lg">
              Apply Now →
            </a>
            <a href="/contact" className="bg-cyan-400 text-white px-8 py-4 rounded-lg font-bold hover:bg-cyan-300 transition transform hover:scale-105 text-lg">
              Get More Info
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

