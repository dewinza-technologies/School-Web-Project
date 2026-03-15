'use client';

import { useParams } from 'next/navigation';

interface AnnouncementDetail {
  id: number;
  title: string;
  date: string;
  category: string;
  author: string;
  content: string;
  fullContent: string;
  relatedLinks: string[];
}

export default function AnnouncementDetail() {
  const params = useParams();
  const announcementId = parseInt(params.id as string) || 1;

  const announcementDetails: Record<number, AnnouncementDetail> = {
    1: {
      id: 1,
      title: 'Mid-Term Examinations Schedule Released',
      date: 'March 10, 2026',
      category: 'Academic',
      author: 'Academic Department',
      content: 'The mid-term examination schedule for all grades has been released. Students are encouraged to prepare well and manage their time effectively.',
      fullContent: `
        The mid-term examination schedule for all grades has been officially released. This is an important assessment period where students will be evaluated on their understanding and application of concepts taught in the current term.

        **Examination Details:**
        - Duration: 5 days (March 20-24, 2026)
        - All examinations will be conducted in the morning session (9:00 AM - 12:00 PM)
        - Detailed question paper format has been provided to all students
        - Mock papers are available for practice

        **Important Guidelines:**
        1. Students must report 15 minutes before the scheduled time
        2. Calculators are allowed only for Mathematics and Science
        3. All required stationery should be carried by students
        4. Mobile phones are strictly prohibited in examination halls
        5. Attendance is mandatory for all scheduled examinations

        **Preparation Tips:**
        - Start preparation well in advance
        - Focus on weak areas while revising
        - Practice previous years' question papers
        - Maintain a healthy sleep schedule
        - Balance study with physical activity and rest

        For any queries regarding the examination schedule or arrangements, please contact the Academic Department or your class teacher.
      `,
      relatedLinks: ['/academics', '/contact'],
    },
    2: {
      id: 2,
      title: 'Annual Sports Day - March 25, 2026',
      date: 'March 8, 2026',
      category: 'Event',
      author: 'Sports Department',
      content: 'Our Annual Sports Day will be held on March 25. All students are invited to participate in various sporting events. Registration closing soon!',
      fullContent: `
        We are excited to announce our Annual Sports Day, one of the most anticipated events of the academic year! This is a platform where students from all grades can showcase their athletic talents and competitive spirit.

        **Event Details:**
        - Date: March 25, 2026
        - Time: 9:00 AM - 4:00 PM
        - Venue: School Grounds
        - Guest Chief Guest: District Sports Officer

        **Sports Included:**
        - Track and Field (100m, 200m, 400m, 1500m, relay races, long jump, high jump)
        - Team Sports (Cricket, Football, Volleyball, Badminton, Basketball)
        - Individual Sports (Gymnastics, Swimming, Table Tennis)
        - Group Events (March Pass, Tug of War, Fun Races)

        **How to Register:**
        - Registration deadline: March 18, 2026
        - Register through your house captain or PE teacher
        - Limited slots available for some events
        - Each student can participate in maximum 3 events

        **What to Bring:**
        - Proper sports attire and shoes
        - Water bottle for hydration
        - Sunscreen and hat (optional but recommended)
        - Any specific equipment needed for your event

        **Awards:**
        - Gold, Silver, and Bronze medals for top 3 positions
        - House Cup based on overall performance
        - Recognition for personal bests

        Parents and guardians are welcome to attend and cheer for our students!
      `,
      relatedLinks: ['/events', '/registration'],
    },
    3: {
      id: 3,
      title: 'New Science Lab Opening',
      date: 'March 5, 2026',
      category: 'Facility',
      author: 'School Administration',
      content: 'We are pleased to announce the opening of our state-of-the-art Science Lab with modern equipment for hands-on learning experiences.',
      fullContent: `
        We are thrilled to announce the grand opening of our new state-of-the-art Science Laboratory! This facility represents our commitment to providing the best learning environment for our students.

        **Lab Features:**
        - Modern equipment and apparatus
        - Safety standards compliant with international guidelines
        - Capacity for 40+ students per batch
        - Well-ventilated and ergonomically designed workstations
        - Digital displays for demonstrations
        - Computerized recording systems

        **Available Facilities:**
        - Physics Lab: Equipped for mechanics, optics, electricity experiments
        - Chemistry Lab: Complete setup for organic and inorganic chemistry
        - Biology Lab: Microscopes, preserved specimens, growing cultures
        - General Science Lab: Multidisciplinary experiments

        **Benefits:**
        - Enhanced hands-on learning experience
        - Better understanding of theoretical concepts
        - Development of practical skills
        - Preparation for competitive examinations
        - Safe and controlled learning environment

        **Lab Schedule:**
        - Classes: Monday to Friday, 10:00 AM - 4:00 PM
        - Evening Sessions: Available for senior classes (4:00 PM - 6:00 PM)
        - Weekend Workshops: First and third Saturday of each month

        **Safety Rules:**
        - Mandatory safety gear (goggles, gloves, apron)
        - Adherence to standard operating procedures
        - No eating or drinking in the lab
        - Safe disposal of chemical waste
        - Immediate reporting of accidents or spills

        For booking lab sessions or special demonstrations, please contact the Science Department.
      `,
      relatedLinks: ['/academics', '/contact'],
    },
    4: {
      id: 4,
      title: 'Parent-Teacher Conference Schedule',
      date: 'February 28, 2026',
      category: 'Academic',
      author: 'School Administration',
      content: 'Parent-Teacher Conferences for all grades will be held on April 2-4, 2026. Slots are available online through the parent portal.',
      fullContent: `
        We are organizing Parent-Teacher Conferences to facilitate better communication between teachers and parents regarding student progress and development.

        **Conference Details:**
        - Dates: April 2-4, 2026
        - Duration: 3 days
        - Time Slots: 9:00 AM - 5:00 PM (15-minute slots)
        - Location: School Building

        **Purpose:**
        - Discuss academic performance and progress
        - Share observations about student behavior
        - Identify strengths and areas for improvement
        - Plan collaborative strategies for student development
        - Address any concerns or queries

        **How to Register:**
        - Visit the Parent Portal (parentportal.inspireschool.edu)
        - Login with your credentials
        - Select your preferred date and time slot
        - Confirm your appointment
        - Registration opens from March 15, 2026

        **Important Notes:**
        - Each slot is limited to 15 minutes
        - Teachers will meet parents in classrooms or designated areas
        - Come prepared with any questions or concerns
        - Parents of multiple children can schedule back-to-back meetings
        - Priority given on first-come-first-served basis

        **Virtual Option:**
        - Video conference option available for parents unable to visit
        - Request virtual meeting while booking your slot

        For technical support with the parent portal, contact the school office at (555) 234-5678 or admissions@inspireschool.edu
      `,
      relatedLinks: ['/contact'],
    },
    5: {
      id: 5,
      title: 'Scholarship Program Announced',
      date: 'February 25, 2026',
      category: 'Opportunity',
      author: 'Admissions Department',
      content: 'We are offering merit-based scholarships for excellent students. Application deadline is March 31, 2026. More details available in the admissions office.',
      fullContent: `
        We are proud to announce our comprehensive Scholarship Program designed to support academically excellent and talented students.

        **Scholarship Categories:**

        1. **Merit Scholarship:**
           - Based on academic performance in previous exams
           - Available for Grades 2-12
           - Up to 50% of tuition fee waived
           - GPA requirement: 3.8+/4.0

        2. **Sports Scholarship:**
           - For students with exceptional sporting talent
           - Recognition at national or state level
           - Up to 40% of tuition fee waived
           - Requirements: Track record of achievements

        3. **Arts & Culture Scholarship:**
           - For students talented in music, dance, drama, fine arts
           - Up to 40% of tuition fee waived
           - Demonstration of talent through audition/portfolio

        4. **Needs-Based Scholarship:**
           - For financially deserving students with good academics
           - Up to 75% of tuition fee waived
           - Income verification required

        5. **Sibling Scholarship:**
           - 15% discount on tuition fee
           - Available when multiple siblings are enrolled
           - Applicable immediately upon second sibling enrollment

        **Eligibility Criteria:**
        - Current good standing in school
        - Minimum attendance of 90%
        - No disciplinary issues in the past 2 years
        - Parent meeting income limits (varies by category)

        **Application Process:**
        1. Obtain application form from admissions office
        2. Complete all sections with required documents
        3. Submit by March 31, 2026
        4. Participate in assessment/interview if selected
        5. Results announced by April 15, 2026

        **Required Documents:**
        - Previous year mark sheets
        - Achievement certificates
        - Income tax returns (for needs-based)
        - Letters of recommendation
        - Proof of talent/achievements

        For more information and to apply, visit the Admissions Office or call (555) 234-5678.
      `,
      relatedLinks: ['/admissions', '/application'],
    },
    6: {
      id: 6,
      title: 'School Trip to Science Museum',
      date: 'February 20, 2026',
      category: 'Event',
      author: 'School Administration',
      content: 'Grades 5-7 are invited for an educational trip to the Science Museum on April 15, 2026. Permission slips to be submitted by March 20.',
      fullContent: `
        An exciting educational trip has been planned for students of Grades 5-7 to the Science Museum!

        **Trip Details:**
        - Date: April 15, 2026
        - Time: 9:30 AM - 3:30 PM
        - Destination: National Science Museum
        - Grade Levels: 5, 6, and 7
        - Transportation: School buses provided

        **What to Expect:**
        - Guided tours of various exhibits
        - Interactive demonstrations
        - Hands-on science experiments
        - IMAX movie screening
        - Planetarium show
        - Souvenir shopping at museum shop

        **Learning Outcomes:**
        - Understanding of scientific principles through interactive exhibits
        - Appreciation for technological advancements
        - Career exploration in STEM fields
        - Team building and social skills development
        - Real-world application of theoretical concepts

        **What to Bring:**
        - Water bottle and light snacks
        - Notebook for observations
        - Comfortable walking shoes
        - Sunscreen and hat
        - Camera (optional)
        - Copy of permission slip

        **Cost & Payments:**
        - Trip cost: Rs. 500 per student
        - Includes: Transportation, entry fee, lunch
        - Payment deadline: March 25, 2026
        - Payment method: Through school office or payment portal

        **Permission & Consent:**
        - Permission slips must be signed by parents
        - Submission deadline: March 20, 2026
        - Medical information forms required
        - Emergency contact details mandatory

        **Supervision:**
        - Certified teachers will accompany students
        - 1 teacher for every 10 students
        - First aid kit and medical support on standby
        - Safety briefing before departure

        For any questions or clarifications, contact the school office or your class teacher.
      `,
      relatedLinks: ['/events', '/contact'],
    },
  };

  const announcement: AnnouncementDetail = announcementDetails[announcementId] || announcementDetails[1];

  return (
    <main className="bg-white">
      <section className="bg-gradient-to-r from-blue-900 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{announcement.title}</h1>
          <div className="flex flex-wrap gap-4 items-center text-cyan-300">
            <span>📅 {announcement.date}</span>
            <span>•</span>
            <span className="bg-white/20 px-4 py-2 rounded-full font-semibold">{announcement.category}</span>
            <span>•</span>
            <span>By {announcement.author}</span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <article className="prose prose-lg max-w-none">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-wrap">
                  {announcement.fullContent}
                </p>
              </div>
            </article>

            {/* Related Links */}
            {announcement.relatedLinks.length > 0 && (
              <section className="mt-12">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Related Pages</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {announcement.relatedLinks.map((link, idx) => {
                    const linkLabel = link === '/academics' ? 'Academics' : 
                                     link === '/events' ? 'Events' :
                                     link === '/contact' ? 'Contact Us' :
                                     link === '/admissions' ? 'Admissions' :
                                     link === '/application' ? 'Apply Now' :
                                     link === '/registration' ? 'Event Registration' : 'Learn More';
                    return (
                      <a
                        key={idx}
                        href={link}
                        className="bg-blue-100 hover:bg-blue-100 text-blue-900 p-4 rounded-lg font-semibold transition border-l-4 border-blue-500"
                      >
                        → {linkLabel}
                      </a>
                    );
                  })}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div>
            {/* Info Card */}
            <div className="bg-gradient-to-br from-blue-900 to-slate-900 text-white p-8 rounded-xl shadow-lg mb-8 sticky top-20">
              <h3 className="text-2xl font-bold mb-6">📰 Announcement Info</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-cyan-300 text-sm mb-1">Category</p>
                  <p className="font-bold text-lg">{announcement.category}</p>
                </div>
                <div className="border-t border-blue-500 pt-4">
                  <p className="text-cyan-300 text-sm mb-1">Published</p>
                  <p className="font-bold">{announcement.date}</p>
                </div>
                <div className="border-t border-blue-500 pt-4">
                  <p className="text-cyan-300 text-sm mb-1">By</p>
                  <p className="font-bold">{announcement.author}</p>
                </div>
              </div>

              <a
                href="/contact"
                className="block w-full mt-8 bg-white text-blue-600 py-3 rounded-lg font-bold hover:bg-blue-50 transition text-center"
              >
                Contact Us
              </a>
            </div>

            {/* Share Section */}
            <div className="bg-blue-50 p-8 rounded-xl border-l-4 border-blue-500">
              <h3 className="text-lg font-bold text-blue-700 mb-4">📢 Share This</h3>
              <p className="text-gray-700 text-sm mb-4">Share this important announcement with other students and parents.</p>
              <div className="space-y-2">
                <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition font-semibold">
                  Share on Facebook
                </button>
                <button className="w-full bg-blue-400 text-white py-2 rounded hover:bg-blue-500 transition font-semibold">
                  Share on Twitter
                </button>
                <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition font-semibold">
                  Share on WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
