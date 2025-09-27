export default function About() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10 space-y-14 text-gray-800 dark:text-gray-200">
      {/* Hero / Banner */}
      <section className="rounded-2xl border overflow-hidden bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <div className="h-44 md:h-60 w-full bg-gradient-to-r from-indigo-50 via-white to-indigo-50 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900" />
        <div className="p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-gray-900 dark:text-white">About Our Studio</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl">
            We help people and brands tell their stories with timeless imagery and thoughtful visuals.
            From intimate portraits to full-scale productions, our team delivers with heart and craft.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="grid md:grid-cols-2 gap-6">
        <div className="rounded-xl border p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 dark:text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Our Vision</h2>
          <p className="text-gray-600 dark:text-gray-300">
            To be the most trusted creative partner for meaningful, human-centered storytelling—
            crafting visuals that inspire, connect, and endure.
          </p>
        </div>
        <div className="rounded-xl border p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 dark:text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-300">
            We capture authentic moments and elevate brands by blending artistic direction with
            technical excellence—delivering consistent quality and a seamless client experience.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">What We Value</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { 
              title: "Creativity", 
              desc: "We push ideas forward with curiosity and taste.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 dark:text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              )
            },
            { 
              title: "Craft", 
              desc: "Attention to detail at every step of production.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 dark:text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              )
            },
            { 
              title: "Care", 
              desc: "Respectful collaboration with clients and team.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 dark:text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              )
            },
            { 
              title: "Reliability", 
              desc: "Clear communication and on-time delivery.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 dark:text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              )
            },
          ].map((v, i) => (
            <div key={i} className="rounded-xl border p-5 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-3">
                {v.icon}
              </div>
              <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">{v.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team teaser */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Meet the Team</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { name: "Alex", role: "Creative Director" },
            { name: "Sam", role: "Lead Photographer" },
            { name: "Jordan", role: "Producer" },
          ].map((m, i) => (
            <div key={i} className="rounded-xl border p-5 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 flex items-center gap-4 hover:shadow-md dark:hover:shadow-gray-800/30 transition-shadow">
              <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-600 flex-shrink-0" />
              <div>
                <div className="font-medium text-gray-900 dark:text-white">{m.name}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{m.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border p-8 md:p-10 bg-gradient-to-br from-indigo-50 to-white dark:from-gray-800 dark:to-gray-900 text-center border-gray-200 dark:border-gray-700">
        <div className="w-16 h-16 mx-auto rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600 dark:text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900 dark:text-white">Let's work together</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg max-w-2xl mx-auto">Tell us about your project—we'll tailor a package for you.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="/booking" 
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
            </svg>
            Start a Booking
          </a>
          <a 
            href="tel:+919876543210" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 font-medium transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Call us
          </a>
        </div>
      </section>
    </main>
  );
}
