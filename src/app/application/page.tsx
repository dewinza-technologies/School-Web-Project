export const metadata = {
  title: 'Application Form | Inspire Public School',
  description: 'Submit your application to Inspire Public School',
};

export default function Application() {
  return (
    <main className="bg-white">
      <section className="bg-gradient-to-r from-blue-900 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Student Application Form</h1>
          <p className="text-xl text-cyan-300">Join our excellence-driven community today</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 bg-gradient-to-r from-blue-50 to-blue-50 p-8 rounded-xl border-l-4 border-blue-500">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">📝 Application Instructions</h2>
            <p className="text-slate-700 leading-relaxed">Please fill out all fields carefully. Required fields are marked with an asterisk (*). You will receive a confirmation email after submission. For queries, contact admissions@inspireschool.edu</p>
          </div>

          <form className="space-y-6 bg-white shadow-lg p-12 rounded-xl">
            {/* Personal Information */}
            <fieldset className="pb-8 border-b-2 border-gray-200">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-700 font-bold mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
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
                    className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-slate-900 bg-white"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="block text-slate-700 font-bold mb-2">
                    Date of Birth <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-slate-900 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-bold mb-2">
                    Gender <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-slate-900 bg-white appearance-none cursor-pointer" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%228%22 viewBox=%220 0 12 8%22%3E%3Cpath fill=%22%23111827%22 d=%22M0 0l6 8 6-8z%22/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem center', backgroundSize: '1.5em 1.5em', paddingRight: '2.5rem'}}>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-slate-700 font-bold mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-slate-900 bg-white"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="mt-6">
                <label className="block text-slate-700 font-bold mb-2">
                  Contact Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-slate-900 bg-white"
                  placeholder="Enter your contact number"
                />
              </div>
            </fieldset>

            {/* Academic Information */}
            <fieldset className="pb-8 border-b-2 border-gray-200">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Academic Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-700 font-bold mb-2">
                    Applying For Grade <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-slate-900 bg-white appearance-none cursor-pointer" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%228%22 viewBox=%220 0 12 8%22%3E%3Cpath fill=%22%23111827%22 d=%22M0 0l6 8 6-8z%22/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem center', backgroundSize: '1.5em 1.5em', paddingRight: '2.5rem'}}>
                    <option value="">Select Grade</option>
                    <option value="1">Grade 1</option>
                    <option value="2">Grade 2</option>
                    <option value="3">Grade 3</option>
                    <option value="4">Grade 4</option>
                    <option value="5">Grade 5</option>
                    <option value="6">Grade 6</option>
                    <option value="7">Grade 7</option>
                    <option value="8">Grade 8</option>
                    <option value="9">Grade 9</option>
                    <option value="10">Grade 10</option>
                    <option value="11">Grade 11</option>
                    <option value="12">Grade 12</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-700 font-bold mb-2">
                    Previous School <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-slate-900 bg-white"
                    placeholder="Enter your previous school name"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-slate-700 font-bold mb-2">
                  Last Year Percentage <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-slate-900 bg-white"
                  placeholder="Enter your percentage"
                />
              </div>
            </fieldset>

            {/* Parent Information */}
            <fieldset className="pb-8 border-b-2 border-gray-200">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Parent/Guardian Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-700 font-bold mb-2">
                    Father's Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-slate-900 bg-white"
                    placeholder="Enter father's name"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-bold mb-2">
                    Mother's Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-slate-900 bg-white"
                    placeholder="Enter mother's name"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-slate-700 font-bold mb-2">
                  Parent Contact Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-slate-900 bg-white"
                  placeholder="Enter parent's contact number"
                />
              </div>

              <div className="mt-6">
                <label className="block text-slate-700 font-bold mb-2">
                  Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-slate-900 bg-white"
                  placeholder="Enter your complete address"
                  rows={3}
                ></textarea>
              </div>
            </fieldset>

            {/* Declaration */}
            <fieldset className="pb-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Declaration</h3>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="mt-1 w-4 h-4 border border-gray-300 rounded focus:ring-cyan-400"
                />
                <span className="text-slate-700">
                  I declare that the information provided above is true and correct to the best of my knowledge.
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer mt-4">
                <input
                  type="checkbox"
                  className="mt-1 w-4 h-4 border border-gray-300 rounded focus:ring-cyan-400"
                />
                <span className="text-slate-700">
                  I agree to the terms and conditions of Inspire Public School.
                </span>
              </label>
            </fieldset>

            <div className="flex gap-4 pt-8">
              <button
                type="submit"
                className="flex-1 bg-blue-600 text-white py-4 rounded-lg font-bold hover:bg-blue-700 transition transform hover:scale-105 shadow-lg text-lg"
              >
                ✓ Submit Application
              </button>
              <button
                type="reset"
                className="flex-1 bg-gray-400 text-white py-4 rounded-lg font-bold hover:bg-gray-500 transition transform hover:scale-105 shadow-lg text-lg"
              >
                Clear Form
              </button>
            </div>
          </form>

          <div className="mt-12 bg-gradient-to-r from-blue-50 to-slate-100 p-8 rounded-xl border-l-4 border-blue-500">
            <h3 className="text-xl font-bold text-blue-700 mb-4">❓ Need Help?</h3>
            <p className="text-slate-700 mb-4">If you have any questions about the application process, please contact our admissions office:</p>
            <div className="space-y-2 text-slate-700">
              <p><strong>📧 Email:</strong> admissions@inspireschool.edu</p>
              <p><strong>📞 Phone:</strong> (555) 234-5678</p>
              <p><strong>🕐 Office Hours:</strong> Monday - Friday, 9:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}


