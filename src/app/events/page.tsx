export const metadata = {
  title: 'Events | Inspire Public School',
  description: 'Upcoming events and activities at Inspire Public School',
};

export default function Events() {
  const events = [
    {
      id: 1,
      title: 'Annual Sports Day',
      date: 'March 25, 2026',
      time: '9:00 AM - 4:00 PM',
      location: 'School Grounds',
      description: 'A full day of athletic competitions featuring various sports and games for all grades.',
      category: 'Sports',
      icon: '🏃',
    },
    {
      id: 2,
      title: 'Science Exhibition 2026',
      date: 'April 5-6, 2026',
      time: '10:00 AM - 5:00 PM',
      location: 'School Auditorium & Halls',
      description: 'Students showcase innovative science projects, experiments, and research work.',
      category: 'Academic',
      icon: '🔬',
    },
    {
      id: 3,
      title: 'Annual Day Function',
      date: 'April 20, 2026',
      time: '4:00 PM - 7:00 PM',
      location: 'School Auditorium',
      description: 'Celebration of student talents with cultural programs, dance, music, and dramatic performances.',
      category: 'Cultural',
      icon: '🎭',
    },
    {
      id: 4,
      title: 'Inter-House Quiz Competition',
      date: 'April 12, 2026',
      time: '2:00 PM - 5:00 PM',
      location: 'Seminar Hall',
      description: 'A competitive quiz competition between different houses covering academic subjects.',
      category: 'Academic',
      icon: '🧠',
    },
    {
      id: 5,
      title: 'Mothers Day Celebration',
      date: 'May 10, 2026',
      time: '10:00 AM - 12:00 PM',
      location: 'School Auditorium',
      description: 'Special event celebrating mothers with students presenting gifts and performances.',
      category: 'Celebration',
      icon: '💐',
    },
    {
      id: 6,
      title: 'Educational Trip - Science Museum',
      date: 'April 15, 2026',
      time: '09:30 AM - 03:30 PM',
      location: 'Science Museum',
      description: 'Grades 5-7 visit to explore interactive science exhibits and learn hands-on.',
      category: 'Educational',
      icon: '🎓',
    },
    {
      id: 7,
      title: 'Mathematics Olympiad',
      date: 'April 19, 2026',
      time: '11:00 AM - 1:00 PM',
      location: 'Exam Halls',
      description: 'National level mathematics competition for interested students from all grades.',
      category: 'Academic',
      icon: '📐',
    },
    {
      id: 8,
      title: 'Graduation Ceremony 2026',
      date: 'May 25, 2026',
      time: '10:00 AM - 1:00 PM',
      location: 'School Grounds',
      description: 'Celebration of graduating class with awards, certificates, and memorable moments.',
      category: 'Celebration',
      icon: '🎓',
    },
  ];

  return (
    <main className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-4">Events & Activities</h1>
          <p className="text-xl text-slate-600">Discover the exciting events and activities happening at Inspire Public School throughout the year.</p>
        </div>

        {/* Events Gallery */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition duration-300 border-l-4 border-blue-500"
              >
                <div className="bg-gradient-to-r from-blue-900 to-slate-900 text-white p-8 flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">{event.title}</h3>
                    <p className="text-cyan-300 mt-2 font-semibold">{event.category}</p>
                  </div>
                  <div className="text-5xl opacity-60">{event.icon}</div>
                </div>

                <div className="p-8">
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-slate-700 font-semibold">
                      <span className="mr-3 text-2xl">📅</span>
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-slate-700 font-semibold">
                      <span className="mr-3 text-2xl">⏰</span>
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-slate-700 font-semibold">
                      <span className="mr-3 text-2xl">📍</span>
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <p className="text-slate-600 mb-6 leading-relaxed">{event.description}</p>

                  <a href={`/event-details/${event.id}`} className="block w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-bold transform hover:scale-105 text-center">
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Calendar View CTA */}
        <section className="mb-20 bg-gradient-to-r from-blue-50 to-slate-100 p-12 rounded-xl border-l-4 border-blue-500">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">View Full Calendar</h2>
            <p className="text-slate-700 text-lg mb-8">See all events, holidays, and important dates in our comprehensive school calendar</p>
            <a href="/calendar" className="inline-block bg-blue-600 text-white px-10 py-4 rounded-lg hover:bg-blue-700 transition font-bold text-lg transform hover:scale-105 shadow-lg">
              📅 View School Calendar
            </a>
          </div>
        </section>

        {/* Event Participation Section */}
        <section>
          <h2 className="text-4xl font-bold text-blue-900 mb-8 text-center">Register for Events</h2>
          <div className="bg-gradient-to-r from-blue-900 to-slate-900 text-white p-12 rounded-xl shadow-lg">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold mb-6 text-center">Participate in Our Programs</h3>
              <p className="text-lg mb-8 text-cyan-300 text-center leading-relaxed">
                Students interested in participating in any events, competitions, or programs should register through the student portal or contact their class teacher. We encourage all students to be active participants in our vibrant school community.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-4 bg-white/10 p-6 rounded-lg">
                  <span className="text-3xl">✓</span>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Real-time Updates</h4>
                    <p className="text-cyan-300">Get instant event information through announcements</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white/10 p-6 rounded-lg">
                  <span className="text-3xl">✓</span>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Easy Registration</h4>
                    <p className="text-cyan-300">Simple online registration and document submission</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white/10 p-6 rounded-lg">
                  <span className="text-3xl">✓</span>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Expert Coaching</h4>
                    <p className="text-cyan-300">Guidance and training for all competitions</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white/10 p-6 rounded-lg">
                  <span className="text-3xl">✓</span>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Recognition & Awards</h4>
                    <p className="text-cyan-300">Celebrate your achievements with us</p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <a href="/registration" className="inline-block bg-white text-blue-600 px-10 py-4 rounded-lg hover:bg-blue-50 transition font-bold text-lg transform hover:scale-105 shadow-lg">
                  Register Now →
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}


