import React from 'react';

export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    alert(`Thanks ${data.name}! We will reach out to ${data.email}.`);
    form.reset();
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-10 space-y-12 text-gray-800 dark:text-gray-200">
      {/* Hero */}
      <section className="rounded-2xl border overflow-hidden bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <div className="h-24 md:h-36 w-full bg-gradient-to-r from-indigo-50 via-white to-indigo-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800" />
        <div className="p-6 md:p-8 flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">Contact Us</h1>
            <p className="text-gray-600 dark:text-gray-300">We’d love to hear from you. Send a note and we’ll reply soon.</p>
          </div>
          <a href="/booking" className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 hover:underline transition-colors">
            Prefer to book? →
          </a>
        </div>
      </section>

      {/* Contact cards */}
      <section className="grid md:grid-cols-3 gap-5">
        {[{ t: "Email", v: "hello@example.com", href: "mailto:hello@example.com" },
          { t: "Phone", v: "+1 (234) 567‑890", href: "tel:+1234567890" },
          { t: "Address", v: "123 Studio Ave, Erode, IN" }]
          .map((c, i) => (
            <a
              key={i}
              href={c.href}
              className={`rounded-xl border p-5 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 block hover:shadow-md dark:hover:shadow-gray-800/30 transition-all ${c.href ? 'hover:-translate-y-0.5' : 'pointer-events-none'}`}
            >
              <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">{c.t}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{c.v}</p>
            </a>
          ))}
      </section>

      {/* Map */}
      <section className="rounded-2xl border overflow-hidden bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        {(() => {
          const mapsKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
          const place = encodeURIComponent("123 Studio Ave, Erode, IN");
          const src = `https://www.google.com/maps/embed/v1/place?key=${mapsKey}&q=${place}`;
          return mapsKey ? (
            <iframe
              src={src}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-64 md:h-96"
              title="Studio Location"
            ></iframe>
          ) : (
            <div className="w-full h-64 md:h-80 bg-gray-100 dark:bg-gray-800 grid place-items-center text-gray-600 dark:text-gray-400">
              Set VITE_GOOGLE_MAPS_API_KEY in your .env to show the map.
            </div>
          );
        })()}
      </section>

      {/* Form */}
      <section className="grid lg:grid-cols-3 gap-8">
        <form onSubmit={handleSubmit} className="lg:col-span-2 grid gap-4 rounded-xl border p-5 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <div className="grid sm:grid-cols-2 gap-3">
            <label className="grid gap-1 text-sm">
              <span>Name</span>
              <input name="name" required className="border rounded px-3 py-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
            </label>
            <label className="grid gap-1 text-sm">
              <span>Email</span>
              <input type="email" name="email" required className="border rounded px-3 py-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
            </label>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            <label className="grid gap-1 text-sm">
              <span>Subject</span>
              <input name="subject" className="border rounded px-3 py-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="How can we help?" />
            </label>
            <label className="grid gap-1 text-sm">
              <span>Reason</span>
              <select name="reason" className="border rounded px-3 py-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <option value="general">General</option>
                <option value="booking">Booking</option>
              </select>
            </label>
          </div>
          <label className="grid gap-1 text-sm">
            <span>Message</span>
            <textarea 
              name="message" 
              rows={6} 
              required 
              className="border rounded px-3 py-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
              placeholder="Tell us more about your inquiry…" 
            />
          </label>
          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            <input 
              id="copy" 
              type="checkbox" 
              className="rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-indigo-500 dark:focus:ring-indigo-600" 
            />
            <label htmlFor="copy">Send me a copy of this message</label>
          </div>
          <div className="flex gap-3 flex-wrap">
            <button 
              type="submit" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg px-5 py-2.5 transition-colors"
            >
              Send Message
            </button>
            <button 
              type="reset" 
              className="px-5 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Clear
            </button>
          </div>
        </form>

        <aside className="grid gap-5">
          <div className="rounded-xl border p-5 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold mb-2 flex items-center gap-2 text-gray-900 dark:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-indigo-600 dark:text-indigo-400">
                <path d="M6 2h12a1 1 0 0 1 1 1v3a5 5 0 0 1-2.293 4.188l-.9.6a1 1 0 0 0 0 1.724l.9.6A5 5 0 0 1 19 17v3a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-3a5 5 0 0 1 2.293-4.188l.9-.6a1 1 0 0 0 0-1.724l-.9-.6A5 5 0 0 1 5 6V3a1 1 0 0 1 1-1Zm1 2v2a3 3 0 0 0 1.376 2.55l.9.6a3 3 0 0 1 0 5.1l-.9.6A3 3 0 0 0 7 19v2h10v-2a3 3 0 0 0-1.376-2.55l-.9-.6a3 3 0 0 1 0-5.1l.9-.6A3 3 0 0 0 17 6V4H7Z"/>
              </svg>
              Response time
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">We aim to respond within 24–48 hours on business days.</p>
          </div>
          <div className="rounded-xl border p-5 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold mb-2 flex items-center gap-2 text-gray-900 dark:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-indigo-600 dark:text-indigo-400">
                <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8Zm.75-12h-1.5v5l4.25 2.55.75-1.23-3.5-2.07Z"/>
              </svg>
              Business hours
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Mon–Fri: 9am–6pm IST<br />Weekends: Closed</p>
          </div>
        </aside>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border p-8 md:p-10 text-center bg-gradient-to-br from-indigo-50 to-white dark:from-gray-800 dark:to-gray-900 border-gray-200 dark:border-gray-700">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900 dark:text-white">Looking to get started?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">Tell us about your project—we'll tailor a package for you.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/booking" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors"
            >
              Book a session
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
        </div>
      </section>
    </main>
  );
}
