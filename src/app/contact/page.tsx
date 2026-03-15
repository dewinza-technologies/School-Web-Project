'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Here you would normally send the form data to a backend server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <main className="bg-white">
      <section className="bg-gradient-to-r from-blue-900 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold">Contact Us</h1>
          <p className="text-xl text-cyan-300 mt-4">We're here to help! Get in touch with us anytime</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Contact Info Cards */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-slate-100 p-8 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition border-l-4 border-blue-500">
              <h3 className="text-3xl font-bold mb-4 text-blue-900">📍 Address</h3>
              <p className="text-slate-700 text-lg leading-relaxed">
                456 Education Lane<br />
                Knowledge City, KC 45678<br />
                India
              </p>
              <p className="mt-4 text-sm text-blue-600 font-semibold">Main Campus</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-slate-100 p-8 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition border-l-4 border-blue-500">
              <h3 className="text-3xl font-bold mb-4 text-blue-900">📞 Phone</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-blue-900">Main Line</p>
                  <p className="text-slate-700 text-lg">(555) 234-5678</p>
                </div>
                <div>
                  <p className="font-semibold text-blue-900">Admissions</p>
                  <p className="text-slate-700 text-lg">(555) 234-5679</p>
                </div>
                <div>
                  <p className="font-semibold text-blue-900">Emergency</p>
                  <p className="text-slate-700 text-lg">(555) 999-0000</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-slate-100 p-8 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition border-l-4 border-blue-500">
              <h3 className="text-3xl font-bold mb-4 text-blue-900">📧 Email</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-blue-900">General Queries</p>
                  <p className="text-slate-700 text-lg">info@inspireschool.edu</p>
                </div>
                <div>
                  <p className="font-semibold text-blue-900">Admissions</p>
                  <p className="text-slate-700 text-lg">admissions@inspireschool.edu</p>
                </div>
                <div>
                  <p className="font-semibold text-blue-900">Support</p>
                  <p className="text-slate-700 text-lg">support@inspireschool.edu</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-8 text-center">Send us a Message</h2>
          <div className="bg-gradient-to-br from-blue-50 to-white shadow-xl rounded-xl p-10 border-t-4 border-blue-500">
            {submitted && (
              <div className="mb-6 p-6 bg-blue-100 border-l-4 border-blue-500 rounded-lg">
                <p className="text-blue-900 font-bold text-lg">✓ Thank you! Your message has been sent successfully.</p>
                <p className="text-blue-900">We'll get back to you within 24 hours.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-700 font-bold mb-3 text-lg">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-400 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-cyan-300 transition text-lg text-slate-900 bg-white"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-bold mb-3 text-lg">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-400 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-cyan-300 transition text-lg text-slate-900 bg-white"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-700 font-bold mb-3 text-lg">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-400 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-cyan-300 transition text-lg text-slate-900 bg-white"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-bold mb-3 text-lg">Subject *</label>
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-400 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-cyan-300 transition text-lg text-slate-900 bg-white"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="admissions">Admissions Inquiry</option>
                    <option value="academic">Academic Question</option>
                    <option value="event">Event Information</option>
                    <option value="fees">Fees & Payment</option>
                    <option value="complaint">Complaint/Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-3 text-lg">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-400 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-cyan-300 transition text-lg text-slate-900 bg-white"
                  rows={8}
                  placeholder="Your message here... (Please provide details)"
                  required
                ></textarea>
              </div>

              <div className="flex items-center">
                <input type="checkbox" id="terms" className="mr-3 w-5 h-5 accent-cyan-400" required />
                <label htmlFor="terms" className="text-slate-700">
                  I agree to the privacy policy and terms of service
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-900 to-slate-900 text-white font-bold py-4 rounded-lg hover:from-blue-900 hover:to-slate-900 transition transform hover:scale-105 text-lg shadow-lg"
              >
                Send Message →
              </button>
            </form>
          </div>
        </section>

        {/* Office Hours */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-8 text-center">Office Hours</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">⏰ School Days</h3>
              <div className="space-y-3 text-slate-700 text-lg">
                <p><strong>Monday - Friday:</strong></p>
                <p className="ml-4">8:00 AM - 4:00 PM</p>
                <hr className="my-3" />
                <p><strong>Admissions Office:</strong></p>
                <p className="ml-4">9:00 AM - 3:00 PM</p>
                <hr className="my-3" />
                <p><strong>Lunch Break:</strong></p>
                <p className="ml-4">12:30 PM - 1:15 PM</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">📅 Holidays</h3>
              <div className="space-y-3 text-slate-700 text-lg">
                <p><strong>Summer Break:</strong></p>
                <p className="ml-4">May - June</p>
                <hr className="my-3" />
                <p><strong>Winter Break:</strong></p>
                <p className="ml-4">December - January</p>
                <hr className="my-3" />
                <p><strong>National Holidays:</strong></p>
                <p className="ml-4">As per govt. calendar</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">🚗 Directions</h3>
              <div className="space-y-3 text-slate-700 text-lg">
                <p><strong>Location:</strong></p>
                <p className="ml-4">Knowledge City, KC 45678</p>
                <hr className="my-3" />
                <p><strong>How to Reach:</strong></p>
                <ul className="ml-4 space-y-2 text-sm">
                  <li>• Main Road Access</li>
                  <li>• Public Transport</li>
                  <li>• Parking Available</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Map placeholder */}
        <section>
          <h2 className="text-4xl font-bold text-blue-900 mb-8 text-center">Find Us Here</h2>
          <div className="bg-gradient-to-r from-blue-50 to-slate-100 rounded-xl p-8 text-center">
            <div className="bg-white rounded-lg p-12">
              <p className="text-slate-600 text-lg mb-4">📍 Map Integration Coming Soon</p>
              <p className="text-slate-500">456 Education Lane, Knowledge City, KC 45678</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}


