export default function Booking() {
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    alert(`Booking requested!\nName: ${data.name}\nEmail: ${data.email}\nType: ${data.type}\nDate: ${data.date}`);
    form.reset();
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-10 space-y-12 text-gray-800 dark:text-gray-200">
      {/* Hero */}
      <section className="rounded-2xl border overflow-hidden bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <div className="h-28 md:h-40 w-full bg-gradient-to-r from-violet-50 via-white to-violet-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800" />
        <div className="p-6 md:p-8 flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">Book Your Session</h1>
            <p className="text-gray-600 dark:text-gray-300">Select a date and tell us a little about your vision.</p>
          </div>
          <a href="/our-work" className="text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300 hover:underline transition-colors">
            See our work →
          </a>
        </div>
      </section>

      {/* Perks */}
      <section className="grid md:grid-cols-3 gap-5">
        {[
          { t: "Flexible scheduling", d: "Weekday and weekend slots available." },
          { t: "Pro team & gear", d: "Lighting, lenses, and backup equipment." },
          { t: "Fast delivery", d: "Curated selects within 72 hours." },
        ].map((p, i) => (
          <div key={i} className="rounded-xl border p-5 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-md dark:hover:shadow-gray-800/30 transition-shadow">
            <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">{p.t}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{p.d}</p>
          </div>
        ))}
      </section>

      {/* Form + Sidebar */}
      <section className="grid lg:grid-cols-3 gap-8">
        <form onSubmit={handleSubmit} className="lg:col-span-2 grid gap-3 rounded-xl border p-5 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
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
          <div className="grid sm:grid-cols-3 gap-3">
            <label className="grid gap-1 text-sm">
              <span>Session Type</span>
              <select name="type" required className="border rounded px-3 py-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <option value="portrait">Portrait</option>
                <option value="wedding">Wedding</option>
                <option value="event">Event</option>
                <option value="product">Product</option>
                <option value="brand">Brand</option>
              </select>
            </label>
            <label className="grid gap-1 text-sm">
              <span>Date</span>
              <input type="date" name="date" required className="border rounded px-3 py-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
            </label>
            <label className="grid gap-1 text-sm">
              <span>Time</span>
              <input type="time" name="time" className="border rounded px-3 py-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
            </label>
          </div>
          <label className="grid gap-1 text-sm">
            <span>Message</span>
            <textarea 
              name="message" 
              rows={5} 
              className="border rounded px-3 py-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
              placeholder="Tell us about location, vibe, references…" 
            />
          </label>
          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            <input 
              id="agree" 
              type="checkbox" 
              required 
              className="rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-violet-500 dark:focus:ring-violet-600" 
            />
            <label htmlFor="agree">I agree to the terms and privacy policy.</label>
          </div>
          <div className="flex gap-3 flex-wrap">
            <button 
              type="submit" 
              className="bg-violet-600 text-white rounded-lg px-4 py-2 hover:bg-violet-700 transition-colors"
            >
              Request Booking
            </button>
            <a 
              href="mailto:hello@example.com" 
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Email us
            </a>
          </div>
        </form>

        <aside className="grid gap-5">
          <div className="rounded-xl border p-5 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Packages</h3>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
              <li>• Portrait Mini — from ₹4,999</li>
              <li>• Event Half‑Day — from ₹24,999</li>
              <li>• Wedding Full‑Day — from ₹79,999</li>
            </ul>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Custom quotes available for brand/product shoots.</p>
          </div>
          <div className="rounded-xl border p-5 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">FAQs</h3>
            <details className="text-sm">
              <summary className="cursor-pointer select-none text-gray-800 dark:text-gray-200">How long does delivery take?</summary>
              <p className="mt-1 text-gray-600 dark:text-gray-300">Preview selects in 72 hours. Full gallery in 1–2 weeks depending on scope.</p>
            </details>
            <details className="text-sm mt-2">
              <summary className="cursor-pointer select-none">Do you travel?</summary>
              <p className="mt-1 text-gray-600">Yes, travel within Chennai included. Outside city billed at cost.</p>
            </details>
          </div>
        </aside>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border p-8 md:p-10 text-center bg-gradient-to-br from-violet-50 to-white dark:from-gray-800 dark:to-gray-900 border-gray-200 dark:border-gray-700">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900 dark:text-white">Have questions before booking?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">Share your ideas—we'll help shape the perfect session.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-violet-600 hover:bg-violet-700 text-white font-medium transition-colors"
            >
              Contact us
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
