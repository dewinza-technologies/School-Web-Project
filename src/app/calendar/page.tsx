export const metadata = {
  title: 'School Calendar | Inspire Public School',
  description: 'School events, holidays, and important dates for the academic year',
};

export default function Calendar() {
  const calendarEvents = [
    { date: 'March 15', title: 'Science Fair Registration Deadline', type: 'Academic' },
    { date: 'March 20', title: 'Parent-Teacher Meetings', type: 'Important' },
    { date: 'March 25', title: 'Annual Sports Day', type: 'Sports' },
    { date: 'March 31', title: 'Scholarship Applications Close', type: 'Admissions' },
    { date: 'April 2-4', title: 'Parent-Teacher Conferences', type: 'Important' },
    { date: 'April 5-6', title: 'Science Exhibition 2026', type: 'Academic' },
    { date: 'April 12', title: 'Inter-House Quiz Competition', type: 'Academic' },
    { date: 'April 15', title: 'Educational Trip - Science Museum', type: 'Excursion' },
    { date: 'April 19', title: 'Mathematics Olympiad', type: 'Academic' },
    { date: 'April 20', title: 'Annual Day Function', type: 'Celebration' },
    { date: 'May 1', title: 'Labour Day Holiday', type: 'Holiday' },
    { date: 'May 10', title: 'Mothers Day Celebration', type: 'Celebration' },
    { date: 'May 25', title: 'Graduation Ceremony 2026', type: 'Celebration' },
    { date: 'May 26-30', title: 'Final Examinations', type: 'Exams' },
    { date: 'June 1', title: 'Summer Vacation Begins', type: 'Holiday' },
  ];

  const holidays = [
    { name: 'Republic Day', date: 'January 26' },
    { name: 'Teachers Day', date: 'September 5' },
    { name: 'Independence Day', date: 'August 15' },
    { name: 'Foundation Day', date: 'May 15' },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Holiday':
        return 'bg-red-100 text-red-700 border-red-300';
      case 'Exams':
        return 'bg-orange-100 text-orange-700 border-orange-300';
      case 'Sports':
        return 'bg-blue-100 text-blue-700 border-blue-300';
      case 'Celebration':
        return 'bg-purple-100 text-purple-700 border-purple-300';
      case 'Important':
        return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      case 'Admissions':
        return 'bg-blue-100 text-blue-900 border-cyan-400';
      default:
        return 'bg-gray-100 text-slate-700 border-gray-300';
    }
  };

  return (
    <main className="bg-white">
      <section className="bg-gradient-to-r from-blue-900 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">School Calendar 2026</h1>
          <p className="text-xl text-cyan-300">Important dates and events throughout the academic year</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Legend */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Event Types</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Academic', 'Sports', 'Holiday', 'Celebration', 'Exams', 'Important'].map((type) => (
              <div key={type} className={`p-4 rounded-lg border-2 text-center font-semibold ${getTypeColor(type)}`}>
                {type}
              </div>
            ))}
          </div>
        </section>

        {/* Calendar Events */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Annual Events & Important Dates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {calendarEvents.map((event, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-xl border-l-4 shadow-md hover:shadow-lg transition ${getTypeColor(event.type)}`}
              >
                <div className="font-bold text-lg mb-2 flex items-center gap-2">
                  <span className="text-2xl">📅</span>
                  {event.date}
                </div>
                <p className="font-semibold mb-2">{event.title}</p>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-bold ${getTypeColor(event.type)}`}>
                  {event.type}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Holidays Section */}
        <section className="mb-16 bg-gradient-to-r from-red-50 to-red-100 p-12 rounded-xl border-l-4 border-red-500">
          <h2 className="text-3xl font-bold text-red-700 mb-8 text-center">🏖️ Major Holidays</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {holidays.map((holiday, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <p className="text-2xl font-bold text-red-600 mb-2">{holiday.name}</p>
                <p className="text-slate-700 text-lg font-semibold">📅 {holiday.date}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Important Notes */}
        <section className="bg-gradient-to-r from-blue-50 to-blue-100 p-12 rounded-xl border-l-4 border-blue-500">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">📌 Important Notes</h2>
          <ul className="space-y-4 text-slate-700">
            <li className="flex items-start gap-3">
              <span className="text-2xl text-blue-600 font-bold">✓</span>
              <span className="text-lg"><strong>Examination Schedule:</strong> Students should check the notice board and school portal for detailed examination dates and timings.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl text-blue-600 font-bold">✓</span>
              <span className="text-lg"><strong>Holiday Dates:</strong> The calendar is subject to change based on government announcements and unforeseen circumstances.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl text-blue-600 font-bold">✓</span>
              <span className="text-lg"><strong>Event Participation:</strong> All students are encouraged to participate in school events and competitions.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl text-blue-600 font-bold">✓</span>
              <span className="text-lg"><strong>Updates:</strong> For latest updates, check announcements page regularly or contact your class teacher.</span>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}


