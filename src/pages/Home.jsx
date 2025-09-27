import portrait1 from "../images/portrait-1.jpeg";
import portrait2 from "../images/portrait-2.jpeg";
import product1 from "../images/product-1.jpeg";
import product2 from "../images/product-2.jpeg";
import event1 from "../images/event-1.jpeg";
import event2 from "../images/event-2.jpeg";
import brand1 from "../images/brand-1.jpeg";
import brand2 from "../images/brand-2.jpeg";

const IMAGES = [portrait1, portrait2, product1, product2, event1, event2, brand1, brand2];

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10 space-y-14">
      {/* Hero */}
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white">
            Capture. Create. Celebrate.
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Premium photography and videography for people and brands. Book your session and let's make something unforgettable.
          </p>
          <div className="flex gap-3">
            <a
              href="/booking"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded bg-violet-600 text-white hover:bg-violet-700 shadow-sm hover:shadow-md transition transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-violet-500"
            >
              Book Now
            </a>
            <a
              href="/our-work"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded border border-violet-200 dark:border-violet-800 text-gray-800 dark:text-gray-200 hover:text-violet-700 dark:hover:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-900/30 hover:border-violet-300 dark:hover:border-violet-700 shadow-sm hover:shadow-md transition transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-violet-500"
            >
              View Our Work
            </a>
          </div>
        </div>
        <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-violet-50 to-white dark:from-violet-900/20 dark:to-gray-800 aspect-video md:aspect-auto md:h-80 overflow-hidden grid place-items-center">
          <div className="w-full h-full grid grid-cols-3 gap-2 p-2">
            {IMAGES.concat(IMAGES).slice(0, 3).map((src, i) => (
              <div key={i} className="relative rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden transition shadow-sm hover:shadow-md hover:-translate-y-0.5 bg-white dark:bg-gray-800">
                <img
                  src={src}
                  alt={`Hero ${i + 1}`}
                  className="w-full h-full object-cover transition duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">What We Offer</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              title: "Portraits",
              desc: "Personal and professional portraits with studio lighting.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-violet-600 transition-colors duration-200 group-hover:text-violet-700">
                  <path d="M12 2a5 5 0 1 1-5 5 5 5 0 0 1 5-5Zm0 9a7 7 0 0 0-7 7v2h14v-2a7 7 0 0 0-7-7Z"/>
                </svg>
              ),
            },
            {
              title: "Events",
              desc: "Weddings, corporate events, and celebrations captured candidly.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-violet-600 transition-colors duration-200 group-hover:text-violet-700">
                  <path d="M7 2h2v3h6V2h2v3h3a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3V2Zm13 0a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V9Z"/>
                </svg>
              ),
            },
            {
              title: "Product",
              desc: "High-quality product shots for e‑commerce and campaigns.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-violet-600 transition-colors duration-200 group-hover:text-violet-700">
                  <path d="M3 7l9-4 9 4-9 4L3 7Zm0 3 9 4 9-4v7a2 2 0 0 1-1.2 1.82L12 22l-7.8-3.18A2 2 0 0 1 3 17v-7Z"/>
                </svg>
              ),
            },
            {
              title: "Brand",
              desc: "Visual storytelling for brands across platforms.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-violet-600 transition-colors duration-200 group-hover:text-violet-700">
                  <path d="M12 2 9.5 8H3l5.5 4-2 6L12 14l5.5 4-2-6L21 8h-6.5L12 2Z"/>
                </svg>
              ),
            },
            {
              title: "Family",
              desc: "Lifestyle sessions to preserve your family’s milestones.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-violet-600 transition-colors duration-200 group-hover:text-violet-700">
                  <path d="M7 6a3 3 0 1 1-3 3 3 3 0 0 1 3-3Zm10 0a3 3 0 1 1-3 3 3 3 0 0 1 3-3ZM2 19a5 5 0 0 1 5-5h1a5 5 0 0 1 5 5v1H2v-1Zm10 1v-1a6 6 0 0 1 6-6h1a3 3 0 0 1 3 3v4h-10Z"/>
                </svg>
              ),
            },
            {
              title: "Video",
              desc: "Short-form edits and highlights with cinematic flair.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-violet-600 transition-colors duration-200 group-hover:text-violet-700">
                  <path d="M3 6a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v2l4-2v12l-4-2v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm13 0a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V6Z"/>
                </svg>
              ),
            },
          ].map((card, idx) => (
            <div key={idx} className="group rounded-xl border p-5 bg-white dark:bg-gray-800 transition shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:ring-2 hover:ring-violet-200">
              <div className="flex items-center gap-2 mb-1">
                {card.icon}
                <h3 className="font-semibold text-gray-900 dark:text-white">{card.title}</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Gallery */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Featured Work</h2>
          <a href="/our-work" className="text-violet-600 dark:text-violet-400 hover:text-violet-800 dark:hover:text-violet-300 text-sm font-medium transition-colors">
            View All →
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="relative rounded-lg border overflow-hidden aspect-[4/5]">
              <img src={IMAGES[i % IMAGES.length]} alt={`Featured ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">What Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {["They captured our day perfectly!", "Professional and creative—highly recommend.", "Exceptional quality and quick turnaround."].map((quote, i) => (
            <blockquote key={i} className="rounded-xl border p-5 bg-white dark:bg-gray-800">
              <p className="text-gray-700 dark:text-gray-300">“{quote}”</p>
              <footer className="mt-3 text-sm text-gray-500 dark:text-gray-400">— Happy Client</footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-violet-50 dark:bg-violet-900/20 rounded-2xl border border-violet-100 dark:border-violet-900/30">
        <div className="max-w-3xl mx-auto text-center space-y-6 px-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Ready to capture your moments?</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Book a session with us and let's create something amazing together.
          </p>
          <a href="/booking" className="inline-flex items-center justify-center px-5 py-2.5 rounded bg-violet-600 text-white hover:bg-violet-700">Request a Booking</a>
        </div>
      </section>
    </main>
  );
}
