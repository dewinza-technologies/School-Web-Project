export const metadata = {
  title: 'Announcements | Inspire Public School',
  description: 'Latest announcements, news, and updates from Inspire Public School',
};

export default function Announcements() {
  const announcements = [
    {
      id: 1,
      title: 'Mid-Term Examinations Schedule Released',
      date: 'March 10, 2026',
      category: 'Academic',
      content: 'The mid-term examination schedule for all grades has been released. Students are encouraged to prepare well and manage their time effectively.',
    },
    {
      id: 2,
      title: 'Annual Sports Day - March 25, 2026',
      date: 'March 8, 2026',
      category: 'Event',
      content: 'Our Annual Sports Day will be held on March 25. All students are invited to participate in various sporting events. Registration closing soon!',
    },
    {
      id: 3,
      title: 'New Science Lab Opening',
      date: 'March 5, 2026',
      category: 'Facility',
      content: 'We are pleased to announce the opening of our state-of-the-art Science Lab with modern equipment for hands-on learning experiences.',
    },
    {
      id: 4,
      title: 'Parent-Teacher Conference Schedule',
      date: 'February 28, 2026',
      category: 'Academic',
      content: 'Parent-Teacher Conferences for all grades will be held on April 2-4, 2026. Slots are available online through the parent portal.',
    },
    {
      id: 5,
      title: 'Scholarship Program Announced',
      date: 'February 25, 2026',
      category: 'Opportunity',
      content: 'We are offering merit-based scholarships for excellent students. Application deadline is March 31, 2026. More details available in the admissions office.',
    },
    {
      id: 6,
      title: 'School Trip to Science Museum',
      date: 'February 20, 2026',
      category: 'Event',
      content: 'Grades 5-7 are invited for an educational trip to the Science Museum on April 15, 2026. Permission slips to be submitted by March 20.',
    },
  ];

  return (
    <main className="bg-white">
      <section className="bg-gradient-to-r from-blue-900 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold">Announcements & News</h1>
          <p className="text-xl text-cyan-300 mt-4">Stay updated with latest news and important announcements</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <p className="text-lg text-slate-600 mb-12 text-center max-w-2xl mx-auto">Stay informed about important updates, events, and opportunities at Inspire Public School.</p>

        {/* Filter Buttons */}
        <div className="mb-12 flex flex-wrap gap-3 justify-center">
          {['All', 'Academic', 'Event', 'Facility', 'Opportunity'].map((category) => (
            <a
              key={category}
              href={category === 'All' ? '/announcements' : `/announcements?category=${category.toLowerCase()}`}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                category === 'All'
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-blue-100 text-blue-900 hover:bg-blue-200'
              }`}
            >
              {category}
            </a>
          ))}
        </div>

        {/* Announcements List */}
        <div className="space-y-6 mb-16">
          {announcements.map((announcement) => (
            <div key={announcement.id} className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl hover:scale-105 transition border-l-4 border-blue-500">
              <div className="md:flex">
                <div className="md:w-1/4 bg-gradient-to-br from-blue-900 to-slate-900 text-white p-8 flex flex-col justify-center">
                  <div className="text-sm opacity-90 mb-2">📅</div>
                  <p className="font-bold text-lg">{announcement.date}</p>
                  <span className="mt-4 inline-block bg-white text-blue-600 px-4 py-1 rounded-full text-xs font-semibold w-fit">
                    {announcement.category}
                  </span>
                </div>

                <div className="p-8 md:w-3/4">
                  <h3 className="text-2xl font-bold mb-3 text-blue-900">{announcement.title}</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{announcement.content}</p>
                  <a href={`/announcements/${announcement.id}`} className="text-blue-600 font-semibold hover:text-blue-900 transition hover:underline inline-block">
                    Read More →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <section className="bg-gradient-to-r from-blue-900 to-slate-900 text-white p-12 rounded-xl shadow-lg">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-cyan-300 mb-8 text-lg">Get the latest announcements and updates delivered to your inbox every week.</p>
            <div className="flex gap-3 flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 font-medium"
              />
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition transform hover:scale-105 shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}


