export const metadata = {
  title: 'Admissions | Inspire Public School',
  description: 'Apply to Inspire Public School - admission process, requirements, and guidelines',
};

export default function Admissions() {
  return (
    <main className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-4">Admissions</h1>
          <p className="text-xl text-slate-600">Join Inspire Public School and begin your journey to excellence</p>
        </div>

        {/* Application Info */}
        <section className="mb-16 bg-gradient-to-r from-blue-50 to-slate-100 p-12 rounded-xl border-l-4 border-blue-500">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">How to Apply</h2>
          <p className="text-lg text-slate-700 mb-4">
            We welcome students from diverse backgrounds who are passionate about learning. Our admissions process is designed to identify students who will thrive in our academic community.
          </p>
          <p className="text-lg text-slate-700">
            Applications are accepted year-round for admission to all grades. Early applications are encouraged to secure your place.
          </p>
        </section>

        {/* Admission Requirements */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Admission Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition border-t-4 border-blue-500">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">For Primary Grades (1-5)</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 text-2xl font-bold mt-1">✓</span>
                  <span className="text-slate-700">Age appropriate for the grade</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 text-2xl font-bold mt-1">✓</span>
                  <span className="text-slate-700">Birth Certificate</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 text-2xl font-bold mt-1">✓</span>
                  <span className="text-slate-700">Previous school report card (if applicable)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 text-2xl font-bold mt-1">✓</span>
                  <span className="text-slate-700">Entrance assessment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 text-2xl font-bold mt-1">✓</span>
                  <span className="text-slate-700">Parent interview</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition border-t-4 border-blue-500">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">For Secondary & Senior Secondary (6-12)</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 text-2xl font-bold mt-1">✓</span>
                  <span className="text-slate-700">Last two years mark sheets</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 text-2xl font-bold mt-1">✓</span>
                  <span className="text-slate-700">Character certificate from previous school</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 text-2xl font-bold mt-1">✓</span>
                  <span className="text-slate-700">Entrance examination</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 text-2xl font-bold mt-1">✓</span>
                  <span className="text-slate-700">Personal interview</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 text-2xl font-bold mt-1">✓</span>
                  <span className="text-slate-700">Proof of identity and residence</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Application Process</h2>
          <div className="space-y-8">
            {[
              {
                step: '1',
                title: 'Submit Application',
                description: 'Fill out and submit the online application form with all required documents.',
              },
              {
                step: '2',
                title: 'Take Entrance Exam',
                description: 'Students will complete an entrance examination to assess their aptitude and skills.',
              },
              {
                step: '3',
                title: 'Personal Interview',
                description: 'Selected candidates will be invited for an interview with our admissions team.',
              },
              {
                step: '4',
                title: 'Admission Decision',
                description: 'Admission results are communicated within 7-10 days of the interview.',
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 hover:bg-blue-50 p-6 rounded-lg transition">
                <div className="flex-shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-2xl shadow-lg">
                    {item.step}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-lg">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Fee Structure */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Fee Structure</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="border border-cyan-400 px-6 py-4 text-left font-bold">Grade Level</th>
                  <th className="border border-cyan-400 px-6 py-4 text-left font-bold">Annual Tuition</th>
                  <th className="border border-cyan-400 px-6 py-4 text-left font-bold">Registration</th>
                  <th className="border border-cyan-400 px-6 py-4 text-left font-bold">Activities Fee</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { grade: 'Primary (1-5)', tuition: '5,000', registration: '200', activities: '400' },
                  { grade: 'Middle School (6-8)', tuition: '6,500', registration: '250', activities: '500' },
                  { grade: 'Secondary (9-10)', tuition: '7,500', registration: '300', activities: '600' },
                  { grade: 'Senior Secondary (11-12)', tuition: '8,500', registration: '350', activities: '700' },
                ].map((row, idx) => (
                  <tr key={row.grade} className={`hover:bg-blue-50 transition ${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                    <td className="border border-cyan-400 px-6 py-4 font-bold text-slate-800">{row.grade}</td>
                    <td className="border border-cyan-400 px-6 py-4 text-slate-700">R{row.tuition}</td>
                    <td className="border border-cyan-400 px-6 py-4 text-slate-700">R{row.registration}</td>
                    <td className="border border-cyan-400 px-6 py-4 text-slate-700">R{row.activities}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-gradient-to-r from-blue-900 to-slate-900 text-white p-12 rounded-xl shadow-xl">
          <h2 className="text-4xl font-bold mb-4">Ready to Join Inspire Public School?</h2>
          <p className="text-xl mb-8 text-cyan-300">Start your application today and become part of our excellence-driven community!</p>
          <a href="/application" className="inline-block bg-white text-blue-600 px-10 py-4 rounded-lg font-bold hover:bg-blue-50 transition transform hover:scale-105 shadow-lg text-lg">
            Start Application →
          </a>
        </section>
      </div>
    </main>
  );
}


