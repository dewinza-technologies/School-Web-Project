'use client';

import { useParams } from 'next/navigation';

interface EventDetail {
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  icon: string;
  description: string;
  fullDescription: string;
  details: string[];
  registrationLink: string;
}

export default function EventDetails() {
  const params = useParams();
  const eventId = parseInt(params.id as string) || 1;

  const eventDetails: Record<number, EventDetail> = {
    1: {
      title: 'Annual Sports Day',
      date: 'March 25, 2026',
      time: '9:00 AM - 4:00 PM',
      location: 'School Grounds',
      category: 'Sports',
      icon: '🏃',
      description: 'A full day of athletic competitions featuring various sports and games for all grades.',
      fullDescription: 'Our Annual Sports Day is one of the most exciting events of the academic year. It brings together students from all grades to compete in various sporting events. From track and field to team sports, this day celebrates athleticism, teamwork, and school spirit. We invite all students to participate actively.',
      details: [
        'Multiple categories for different age groups',
        'Various sports: Cricket, Football, Badminton, Volleyball, Athletics',
        'Medals and certificates for winners',
        'Refreshments provided throughout the day',
        'Parents and guardians welcome to attend',
      ],
      registrationLink: '/registration',
    },
    2: {
      title: 'Science Exhibition 2026',
      date: 'April 5-6, 2026',
      time: '10:00 AM - 5:00 PM',
      location: 'School Auditorium & Halls',
      category: 'Academic',
      icon: '🔬',
      description: 'Students showcase innovative science projects, experiments, and research work.',
      fullDescription: 'The Science Exhibition is a platform for students to showcase their scientific knowledge and creativity. It features innovative projects, experiments, and research work from students across all grades. Judges from renowned institutions review projects, and outstanding ones receive special recognition and awards.',
      details: [
        'Open to all students interested in science',
        'Projects from Physics, Chemistry, Biology, and Environmental Science',
        'Expert judges from science institutions',
        'Awards for best projects in each category',
        'Public viewing on both days',
        'Networking opportunities with science enthusiasts',
      ],
      registrationLink: '/registration',
    },
    3: {
      title: 'Annual Day Function',
      date: 'April 20, 2026',
      time: '4:00 PM - 7:00 PM',
      location: 'School Auditorium',
      category: 'Cultural',
      icon: '🎭',
      description: 'Celebration of student talents with cultural programs, dance, music, and dramatic performances.',
      fullDescription: 'Annual Day is the grand celebration of the academic year where students showcase their talents in music, dance, drama, and other performing arts. This is also an occasion to felicitate academic achievers and awardees.',
      details: [
        'Dance performances by different groups',
        'Musical performances and instrumental music',
        'Dramatic presentations and skits',
        'Awards ceremony for academic toppers',
        'Recognition of sports champions',
        'Special performances by faculty',
      ],
      registrationLink: '/registration',
    },
    4: {
      title: 'Inter-House Quiz Competition',
      date: 'April 12, 2026',
      time: '2:00 PM - 5:00 PM',
      location: 'Seminar Hall',
      category: 'Academic',
      icon: '🧠',
      description: 'A competitive quiz competition between different houses covering academic subjects.',
      fullDescription: 'This is an inter-house quiz competition that tests students\' knowledge across various academic subjects. It encourages intellectual development and friendly competition among students. Selected participants from each house compete in multiple rounds.',
      details: [
        'Multiple rounds of questions',
        'Coverage of all major subjects',
        'House-wise participation',
        'Exciting prizes for winners',
        'Opportunity to showcase knowledge',
        'Friendly competitive atmosphere',
      ],
      registrationLink: '/registration',
    },
    5: {
      title: 'Mothers Day Celebration',
      date: 'May 10, 2026',
      time: '10:00 AM - 12:00 PM',
      location: 'School Auditorium',
      category: 'Celebration',
      icon: '💐',
      description: 'Special event celebrating mothers with students presenting gifts and performances.',
      fullDescription: 'Mothers Day is a special occasion where we celebrate and honor the mothers of our students. The event features artistic performances, special presentations by students, and recognition of mother figures in our school community.',
      details: [
        'Student performances and songs',
        'Gift presentations by students',
        'Special recognition for mothers',
        'Interactive sessions',
        'Refreshments and celebrations',
        'Family-friendly atmosphere',
      ],
      registrationLink: '/registration',
    },
    6: {
      title: 'Educational Trip - Science Museum',
      date: 'April 15, 2026',
      time: '09:30 AM - 03:30 PM',
      location: 'Science Museum',
      category: 'Educational',
      icon: '🎓',
      description: 'Grades 5-7 visit to explore interactive science exhibits and learn hands-on.',
      fullDescription: 'This educational trip to the Science Museum provides students with hands-on learning experiences. Students explore interactive exhibits, participate in science demonstrations, and gain deeper understanding of various scientific concepts.',
      details: [
        'For Grades 5-7 students',
        'Interactive science exhibits',
        'Guided tours by museum experts',
        'Hands-on experiments and demonstrations',
        'Lunch and refreshments provided',
        'Supervised by trained staff and teachers',
      ],
      registrationLink: '/registration',
    },
    7: {
      title: 'Mathematics Olympiad',
      date: 'April 19, 2026',
      time: '11:00 AM - 1:00 PM',
      location: 'Exam Halls',
      category: 'Academic',
      icon: '📐',
      description: 'National level mathematics competition for interested students from all grades.',
      fullDescription: 'The Mathematics Olympiad is a prestigious national-level competition that challenges mathematically gifted students. Participants solve complex problems that require creative thinking and deep understanding of mathematical concepts.',
      details: [
        'Open to all interested students',
        'Multiple rounds of competition',
        'National and international standards',
        'Cash prizes and certificates',
        'Opportunity to represent school at national level',
        'Coaching sessions provided',
      ],
      registrationLink: '/registration',
    },
    8: {
      title: 'Graduation Ceremony 2026',
      date: 'May 25, 2026',
      time: '10:00 AM - 1:00 PM',
      location: 'School Grounds',
      category: 'Celebration',
      icon: '🎓',
      description: 'Celebration of graduating class with awards, certificates, and memorable moments.',
      fullDescription: 'The Graduation Ceremony is a momentous occasion celebrating the graduating class. It honors their achievements, presents certificates and awards, and marks their transition from school to higher education.',
      details: [
        'Formal graduation ceremony',
        'Presentation of certificates and awards',
        'Recognition of academic achievers',
        'Special performances and speeches',
        'Photo opportunities',
        'Celebration of success and achievements',
      ],
      registrationLink: '/registration',
    },
  };

  const event = eventDetails[eventId] || eventDetails[1];

  return (
    <main className="bg-white">
      <section className="bg-gradient-to-r from-blue-900 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">{event.icon}</span>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold">{event.title}</h1>
              <p className="text-xl text-cyan-300 mt-2">{event.category} Event</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Event Details Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 text-center">
                <p className="text-2xl mb-2">📅</p>
                <p className="text-sm font-bold text-gray-700 leading-tight">{event.date}</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 text-center">
                <p className="text-2xl mb-2">⏰</p>
                <p className="text-sm font-bold text-gray-700 leading-tight">{event.time}</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500 text-center">
                <p className="text-2xl mb-2">📍</p>
                <p className="text-sm font-bold text-gray-700 leading-tight">{event.location}</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500 text-center">
                <p className="text-2xl mb-2">🏷️</p>
                <p className="text-sm font-bold text-gray-700 leading-tight">{event.category}</p>
              </div>
            </div>

            {/* Description */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">About This Event</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">{event.fullDescription}</p>
            </section>

            {/* Key Details */}
            <section className="mb-12 bg-gradient-to-r from-blue-50 to-blue-50 p-8 rounded-xl border-l-4 border-blue-500">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">📋 Event Highlights</h2>
              <ul className="space-y-3">
                {event.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-xl mt-1">✓</span>
                    <span className="text-gray-700 text-lg">{detail}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Quick Info */}
            <div className="bg-gradient-to-br from-blue-900 to-slate-900 text-white p-8 rounded-xl shadow-lg mb-8 sticky top-20">
              <h3 className="text-2xl font-bold mb-6">Quick Info</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-cyan-300 text-sm mb-1">📅 Date</p>
                  <p className="font-bold">{event.date}</p>
                </div>
                <div className="border-t border-blue-500 pt-4">
                  <p className="text-cyan-300 text-sm mb-1">⏰ Time</p>
                  <p className="font-bold">{event.time}</p>
                </div>
                <div className="border-t border-blue-500 pt-4">
                  <p className="text-cyan-300 text-sm mb-1">📍 Location</p>
                  <p className="font-bold">{event.location}</p>
                </div>
              </div>

              <a
                href={event.registrationLink}
                className="block w-full mt-8 bg-white text-blue-600 py-3 rounded-lg font-bold hover:bg-blue-50 transition transform hover:scale-105 text-center text-lg"
              >
                Register Now
              </a>
            </div>

            {/* Additional Info */}
            <div className="bg-blue-50 p-8 rounded-xl border-l-4 border-blue-500">
              <h3 className="text-lg font-bold text-blue-700 mb-4">❓ Have Questions?</h3>
              <p className="text-gray-700 mb-4">Contact the student affairs office for more details about this event.</p>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>📧</strong> events@inspireschool.edu</p>
                <p><strong>📞</strong> (555) 234-5678</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
