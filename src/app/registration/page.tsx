'use client';

import { useState } from 'react';

export default function Registration() {
  const events = [
    { id: 1, name: 'Annual Sports Day', date: 'March 25, 2026', limit: '500 students' },
    { id: 2, name: 'Science Exhibition 2026', date: 'April 5-6, 2026', limit: '200 students' },
    { id: 3, name: 'Annual Day Function', date: 'April 20, 2026', limit: 'Limited spaces' },
    { id: 4, name: 'Inter-House Quiz Competition', date: 'April 12, 2026', limit: '100 students' },
    { id: 5, name: 'Mothers Day Celebration', date: 'May 10, 2026', limit: 'Open' },
    { id: 6, name: 'Educational Trip - Science Museum', date: 'April 15, 2026', limit: '150 students' },
    { id: 7, name: 'Mathematics Olympiad', date: 'April 19, 2026', limit: 'Unlimited' },
    { id: 8, name: 'Graduation Ceremony 2026', date: 'May 25, 2026', limit: 'Grade 12 only' },
  ];

  const [formData, setFormData] = useState({
    event: '',
    firstName: '',
    lastName: '',
    grade: '',
    rollNumber: '',
    email: '',
    contact: '',
    requirements: '',
    terms: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [selectedEventName, setSelectedEventName] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.terms && formData.event && formData.firstName && formData.lastName) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      setFormData({
        event: '',
        firstName: '',
        lastName: '',
        grade: '',
        rollNumber: '',
        email: '',
        contact: '',
        requirements: '',
        terms: false,
      });
    } else {
      alert('Please fill all required fields and accept the terms');
    }
  };

  const handleEventChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const eventId = e.target.value;
    const event = events.find(ev => ev.id === parseInt(eventId));
    setFormData(prev => ({ ...prev, event: eventId }));
    setSelectedEventName(event ? event.name : '');
  };

  return (
    <main className="bg-white">
      <section className="bg-gradient-to-r from-blue-900 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Event Registration</h1>
          <p className="text-xl text-cyan-300">Register for exciting events and activities at Inspire Public School</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Registration Info */}
        <div className="mb-12 bg-gradient-to-r from-blue-50 to-blue-50 p-8 rounded-xl border-l-4 border-blue-500">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">📋 How to Register</h2>
          <ol className="list-decimal list-inside space-y-2 text-slate-700">
            <li>Select the event you wish to attend from the list below</li>
            <li>Fill out the registration form with your details</li>
            <li>You will receive a confirmation email with event details</li>
            <li>Show your confirmation at the event venue</li>
            <li>Contact your class teacher if you have any questions</li>
          </ol>
        </div>

        {/* Available Events */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">📅 Available Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition border-l-4 border-blue-500"
              >
                <h3 className="text-2xl font-bold text-blue-900 mb-3">{event.name}</h3>
                <div className="space-y-2 mb-4">
                  <p className="text-slate-700 font-semibold">
                    <span className="text-xl">📅</span> {event.date}
                  </p>
                  <p className="text-slate-600">
                    <span className="text-lg">👥</span> Capacity: {event.limit}
                  </p>
                </div>
                <button 
                  type="button"
                  onClick={() => {
                    const target = document.querySelector('#registration-form');
                    if (target) target.scrollIntoView({ behavior: 'smooth' });
                    setFormData(prev => ({ ...prev, event: event.id.toString() }));
                    setSelectedEventName(event.name);
                  }}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition transform hover:scale-105">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Registration Form */}
        <section className="max-w-2xl mx-auto" id="registration-form">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">📝 Registration Form</h2>
          {submitted && (
            <div className="mb-8 bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-green-800 mb-2">✓ Registration Successful!</h3>
              <p className="text-green-700">Thank you for registering for <strong>{selectedEventName}</strong>. You will receive a confirmation email shortly.</p>
            </div>
          )}
          <form onSubmit={handleSubmit} className="bg-white shadow-lg p-12 rounded-xl space-y-6">
            <div>
              <label className="block text-slate-700 font-bold mb-2">
                Select Event <span className="text-red-500">*</span>
              </label>
              <select 
                name="event"
                value={formData.event}
                onChange={handleEventChange}
                className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-slate-900 bg-white appearance-none cursor-pointer" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%228%22 viewBox=%220 0 12 8%22%3E%3Cpath fill=%22%23111827%22 d=%22M0 0l6 8 6-8z%22/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem center', backgroundSize: '1.5em 1.5em', paddingRight: '2.5rem'}}>
                <option value="">Choose an event</option>
                {events.map((event) => (
                  <option key={event.id} value={event.id}>
                    {event.name} - {event.date}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-slate-700 font-bold mb-2">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-slate-900 bg-white"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label className="block text-slate-700 font-bold mb-2">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-slate-900 bg-white"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-slate-700 font-bold mb-2">
                  Grade <span className="text-red-500">*</span>
                </label>
              <select 
                name="grade"
                value={formData.grade}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-slate-900 bg-white appearance-none cursor-pointer" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%228%22 viewBox=%220 0 12 8%22%3E%3Cpath fill=%22%23111827%22 d=%22M0 0l6 8 6-8z%22/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem center', backgroundSize: '1.5em 1.5em', paddingRight: '2.5rem'}}>
                  <option value="">Select Grade</option>
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((grade) => (
                    <option key={grade} value={grade}>
                      Grade {grade}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-slate-700 font-bold mb-2">
                  Roll Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="rollNumber"
                  value={formData.rollNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-slate-900 bg-white"
                  placeholder="Enter your roll number"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-700 font-bold mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-slate-900 bg-white"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label className="block text-slate-700 font-bold mb-2">
                Contact Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-slate-900 bg-white"
                placeholder="Enter your contact number"
              />
            </div>

            <div>
              <label className="block text-slate-700 font-bold mb-2">Special Requirements / Dietary Preferences</label>
              <textarea
                name="requirements"
                value={formData.requirements}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-slate-900 bg-white"
                placeholder="Any special requirements for the event"
                rows={3}
              ></textarea>
            </div>

            <label className="flex items-start gap-3 cursor-pointer bg-blue-50 p-4 rounded-lg border border-blue-300">
              <input 
                type="checkbox" 
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                className="mt-1 w-4 h-4 border border-gray-300 rounded focus:ring-cyan-400" 
              />
              <span className="text-slate-700">
                I agree to the event terms and conditions and understand the event schedule and requirements.
              </span>
            </label>

            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 bg-blue-600 text-white py-4 rounded-lg font-bold hover:bg-blue-700 transition transform hover:scale-105 shadow-lg text-lg"
              >
                ✓ Register
              </button>
              <button
                type="reset"
                className="flex-1 bg-gray-400 text-white py-4 rounded-lg font-bold hover:bg-gray-500 transition transform hover:scale-105 shadow-lg text-lg"
              >
                Clear
              </button>
            </div>
          </form>
        </section>

        {/* Contact Info */}
        <section className="mt-16 bg-gradient-to-r from-blue-50 to-slate-100 p-8 rounded-xl border-l-4 border-blue-500">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">📞 Need Help with Registration?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-slate-700">
            <div>
              <p className="font-bold mb-1">📧 Email:</p>
              <p>events@inspireschool.edu</p>
            </div>
            <div>
              <p className="font-bold mb-1">📞 Phone:</p>
              <p>(555) 234-5678</p>
            </div>
            <div>
              <p className="font-bold mb-1">🏢 Office:</p>
              <p>Student Affairs Office</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}


