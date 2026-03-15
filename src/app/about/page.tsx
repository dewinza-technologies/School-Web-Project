export const metadata = {
  title: 'About Us | Inspire Public School',
  description: 'Learn about Inspire Public School - our mission, vision, and values',
};

export default function About() {
  return (
    <main className="bg-white">
      <section className="bg-gradient-to-r from-blue-900 to-slate-900 text-white py-16 border-b border-blue-700">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold">About Inspire Public School</h1>
          <p className="text-xl text-cyan-300 mt-4">Empowering students to achieve their fullest potential</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Mission & Vision */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-slate-100 p-12 rounded-xl shadow-lg hover:shadow-xl transition border-l-4 border-blue-500">
              <h2 className="text-4xl font-bold mb-4 text-blue-900">🎯 Our Mission</h2>
              <p className="text-slate-700 text-lg leading-relaxed">
                To provide transformative quality education that develops intellectually curious, emotionally intelligent, and socially responsible individuals who can contribute meaningfully to society and excel in a competitive global world.
              </p>
              <div className="mt-6 p-4 bg-blue-200 rounded-lg">
                <p className="font-semibold text-blue-900">"Inspiring Young Minds for a Brighter Tomorrow"</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-slate-100 p-12 rounded-xl shadow-lg hover:shadow-xl transition border-l-4 border-blue-500">
              <h2 className="text-4xl font-bold mb-4 text-blue-900">🌟 Our Vision</h2>
              <p className="text-slate-700 text-lg leading-relaxed">
                To be the most trusted educational institution known for academic excellence, innovation, and holistic development. We aspire to nurture confident leaders and change-makers who positively transform the world around them.
              </p>
              <div className="mt-6 p-4 bg-blue-200 rounded-lg">
                <p className="font-semibold text-blue-900">"Building Leaders, Creating Futures"</p>
              </div>
            </div>
          </div>
        </section>

        {/* History & Heritage */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-blue-900 mb-8 text-center">Our Journey</h2>
          <div className="bg-blue-50 p-12 rounded-xl">
            <div className="flex items-start gap-4 mb-6">
              <span className="text-4xl">📜</span>
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-2">Heritage & Tradition</h3>
                <p className="text-slate-700 leading-relaxed text-lg">
                  Founded in 2010, Inspire Public School has emerged as one of the leading educational institutions in the region. Starting with a vision to provide world-class education with a personal touch, we have grown exponentially while maintaining our core values and commitment to excellence.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition">
                <div className="text-4xl mb-2">2010</div>
                <p className="font-bold text-blue-900">Founded</p>
                <p className="text-sm text-slate-600 mt-2">Start of our journey</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition">
                <div className="text-4xl mb-2">1500+</div>
                <p className="font-bold text-blue-900">Students Today</p>
                <p className="text-sm text-slate-600 mt-2">Across all grades</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition">
                <div className="text-4xl mb-2">75+</div>
                <p className="font-bold text-blue-900">Faculty Members</p>
                <p className="text-sm text-slate-600 mt-2">Highly qualified</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition">
                <div className="text-4xl mb-2">5000+</div>
                <p className="font-bold text-blue-900">Alumni Network</p>
                <p className="text-sm text-slate-600 mt-2">Global success</p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-blue-900 mb-8 text-center">Core Values</h2>
          <p className="text-center text-slate-600 text-lg mb-12 max-w-3xl mx-auto">
            These values form the foundation of everything we do at Inspire Public School. They guide our decisions, shape our culture, and inspire our community.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '✨', title: 'Integrity', description: 'We uphold the highest standards of honesty, ethical conduct, and transparency in all our actions and decisions.' },
              { icon: '🏆', title: 'Excellence', description: 'We pursue excellence relentlessly in academics, character, and every aspect of student development.' },
              { icon: '🌍', title: 'Inclusivity', description: 'We celebrate diversity and ensure every student feels valued, respected, and included in our community.' },
              { icon: '💡', title: 'Innovation', description: 'We embrace creative thinking and modern pedagogical approaches to keep education relevant and engaging.' },
              { icon: '❤️', title: 'Compassion', description: 'We foster empathy, kindness, and care towards all members of our extended school community.' },
              { icon: '📚', title: 'Discipline', description: 'We maintain high standards of discipline while respecting individual dignity and fostering self-regulation.' },
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition border-t-4 border-blue-500">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-blue-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership Team */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Dr. Rajesh Kumar', title: 'Principal', icon: '👨‍💼', bio: 'Ed.D in Educational Leadership with 20+ years of experience in school administration' },
              { name: 'Mrs. Priya Sharma', title: 'Vice Principal - Academics', icon: '👩‍🏫', bio: 'M.Ed with expertise in curriculum development and teacher training' },
              { name: 'Mr. Arun Patel', title: 'Vice Principal - Administration', icon: '👨‍💼', bio: 'Expert in school operations and student welfare programs' },
            ].map((member) => (
              <div key={member.name} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition border-b-4 border-blue-500">
                <div className="text-6xl mb-4 text-center">{member.icon}</div>
                <h3 className="text-2xl font-bold text-blue-900 text-center mb-2">{member.name}</h3>
                <p className="text-center font-semibold text-blue-600 mb-4">{member.title}</p>
                <p className="text-slate-600 text-center leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-gradient-to-r from-blue-900 to-slate-900 text-white p-12 rounded-xl shadow-lg">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Parents Choose Inspire Public School</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <span className="text-4xl flex-shrink-0">✓</span>
              <div>
                <h3 className="text-xl font-bold mb-2">Proven Academic Excellence</h3>
                <p className="text-cyan-300">Consistently high scores and successful university admissions of our students</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-4xl flex-shrink-0">✓</span>
              <div>
                <h3 className="text-xl font-bold mb-2">Dedicated Faculty</h3>
                <p className="text-cyan-300">Qualified teachers who are passionate about nurturing young minds</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-4xl flex-shrink-0">✓</span>
              <div>
                <h3 className="text-xl font-bold mb-2">Modern Infrastructure</h3>
                <p className="text-cyan-300">State-of-the-art facilities including smart classrooms and advanced laboratories</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-4xl flex-shrink-0">✓</span>
              <div>
                <h3 className="text-xl font-bold mb-2">Holistic Development</h3>
                <p className="text-cyan-300">Focus on academics, sports, arts, and character education</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-4xl flex-shrink-0">✓</span>
              <div>
                <h3 className="text-xl font-bold mb-2">Safe & Supportive Environment</h3>
                <p className="text-cyan-300">Secure campus with trained counselors and student support services</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-4xl flex-shrink-0">✓</span>
              <div>
                <h3 className="text-xl font-bold mb-2">Strong Community</h3>
                <p className="text-cyan-300">Active parent involvement and strong alumni network</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}


