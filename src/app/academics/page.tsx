export const metadata = {
  title: 'Academics | Inspire Public School',
  description: 'Explore our academic programs and curriculum',
};

export default function Academics() {
  return (
    <main className="bg-white">
      <section className="bg-gradient-to-r from-blue-900 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold">Academic Excellence</h1>
          <p className="text-xl text-cyan-300 mt-4">Comprehensive curriculum designed for holistic development</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Curriculum Sections */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-blue-900 mb-8 text-center">Our Curriculum</h2>
          <p className="text-center text-slate-600 text-lg mb-12 max-w-3xl mx-auto">
            We follow a well-designed curriculum that combines traditional learning with modern pedagogical approaches to develop curious and creative minds.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Primary (Grades 1-5)',
                subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Art & Craft', 'Physical Education', 'Music', 'Computer'],
              },
              {
                title: 'Middle School (Grades 6-8)',
                subjects: ['English', 'Mathematics', 'Science', 'History', 'Geography', 'Civics', 'ICT', 'Arts', 'Sports', 'General Knowledge'],
              },
              {
                title: 'Secondary (Grades 9-10)',
                subjects: ['English', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'History', 'Geography', 'Civics', 'Computer Science'],
              },
              {
                title: 'Senior Secondary (Grades 11-12)',
                subjects: ['Science Stream', 'Commerce Stream', 'Humanities Stream', 'English', 'Advanced Mathematics', 'Specialized Subjects'],
              },
            ].map((section) => (
              <div key={section.title} className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition border-t-4 border-blue-500">
                <h3 className="text-2xl font-bold mb-6 text-blue-900">{section.title}</h3>
                <ul className="space-y-3">
                  {section.subjects.map((subject) => (
                    <li key={subject} className="flex items-center text-slate-700 text-lg">
                      <span className="text-cyan-400 mr-3 font-bold">✓</span>
                      {subject}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Special Programs */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Special Programs & Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🌍',
                title: 'International Exchange',
                description: 'Cultural exchange programs allowing students to study and learn from international peers, broadening their global perspective.',
              },
              {
                icon: '💻',
                title: 'Technology & Coding',
                description: 'Advanced computer science curriculum including programming, web development, AI basics, and digital literacy.',
              },
              {
                icon: '🎨',
                title: 'Arts & Culture',
                description: 'Dedicated programs in music, classical dance, performing arts, and visual arts to nurture creative talents.',
              },
              {
                icon: '🏃',
                title: 'Sports Excellence',
                description: 'Professional-level coaching in cricket, basketball, football, badminton, athletics, and martial arts.',
              },
              {
                icon: '🔬',
                title: 'Science & Research',
                description: 'Hands-on experiments, research projects, and science fairs with participation in national competitions.',
              },
              {
                icon: '📚',
                title: 'Debate & Public Speaking',
                description: 'Develop communication skills through debates, elocution, and presentations in competitive forums.',
              },
            ].map((program) => (
              <div key={program.title} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition border-l-4 border-blue-500">
                <div className="text-5xl mb-4">{program.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{program.title}</h3>
                <p className="text-slate-600 leading-relaxed">{program.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Academic Excellence Metrics */}
        <section className="bg-gradient-to-r from-blue-900 to-slate-900 text-white p-12 rounded-xl mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Academic Track Record</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition">
              <div className="text-5xl font-bold mb-2">98%</div>
              <p className="text-xl text-cyan-300">Pass Rate</p>
              <p className="text-sm text-cyan-300 mt-2">All board exams</p>
            </div>
            <div className="text-center p-8 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition">
              <div className="text-5xl font-bold mb-2">92%</div>
              <p className="text-xl text-cyan-300">Average Score</p>
              <p className="text-sm text-cyan-300 mt-2">Across subjects</p>
            </div>
            <div className="text-center p-8 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition">
              <div className="text-5xl font-bold mb-2">1200+</div>
              <p className="text-xl text-cyan-300">College Admissions</p>
              <p className="text-sm text-cyan-300 mt-2">Top institutions</p>
            </div>
            <div className="text-center p-8 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition">
              <div className="text-5xl font-bold mb-2">100+</div>
              <p className="text-xl text-cyan-300">Scholarships</p>
              <p className="text-sm text-cyan-300 mt-2">Merit-based awards</p>
            </div>
          </div>
        </section>

        {/* Teaching Methodology */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Our Teaching Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl border-l-4 border-blue-500 hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">🎯 Personalized Learning</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Each student is unique. We tailor learning experiences to match individual learning styles, pace, and interests.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li>• Individual attention and mentoring</li>
                <li>• Customized learning paths</li>
                <li>• Regular progress monitoring</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl border-l-4 border-blue-500 hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">💡 Active Learning</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                We believe learning by doing. Students engage in experiments, projects, group work, and real-world applications.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li>• Project-based learning</li>
                <li>• Laboratory experiments</li>
                <li>• Collaborative work</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl border-l-4 border-blue-500 hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">🌐 Technology Integration</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Modern learning requires technological skills. Our smart classrooms prepare students for a digital future.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li>• Smart classroom technology</li>
                <li>• Online learning platforms</li>
                <li>• Digital literacy programs</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl border-l-4 border-blue-500 hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">🏆 Excellence Focus</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                We maintain high academic standards while encouraging creativity and critical thinking skills.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li>• Rigorous curriculum</li>
                <li>• Regular assessments</li>
                <li>• Continuous improvement</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}


