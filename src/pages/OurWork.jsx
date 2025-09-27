import { useEffect, useMemo, useState } from "react";
import portrait1 from "../images/portrait-1.jpeg";
import portrait2 from "../images/portrait-2.jpeg";
import product1 from "../images/product-1.jpeg";
import product2 from "../images/product-2.jpeg";
import event1 from "../images/event-1.jpeg";
import event2 from "../images/event-2.jpeg";
import brand1 from "../images/brand-1.jpeg";
import brand2 from "../images/brand-2.jpeg";
import wedding1 from "../images/Wedding-1.jpeg";
import wedding2 from "../images/Wedding-2.jpeg";

const CATEGORIES = [
  "All",
  "Portraits",
  "Weddings",
  "Events",
  "Product",
  "Brand",
];

// Use local images found under src/images/
const LOCAL_ITEMS = [
  { id: 1, src: portrait1, alt: "Portrait 1", category: "Portraits" },
  { id: 2, src: portrait2, alt: "Portrait 2", category: "Portraits" },
  { id: 3, src: product1, alt: "Product 1", category: "Product" },
  { id: 4, src: product2, alt: "Product 2", category: "Product" },
  { id: 5, src: event1, alt: "Event 1", category: "Events" },
  { id: 6, src: event2, alt: "Event 2", category: "Events" },
  { id: 7, src: brand1, alt: "Brand 1", category: "Brand" },
  { id: 8, src: brand2, alt: "Brand 2", category: "Brand" },
  { id: 9, src: wedding1, alt: "Wedding 1", category: "Weddings" },
  { id: 10, src: wedding2, alt: "Wedding 2", category: "Weddings" },
];

export default function OurWork() {
  const [active, setActive] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const [galleryItems, setGalleryItems] = useState([]);

  // Small inline icon component for process steps
  const Icon = ({ step }) => {
    const common = "w-5 h-5";
    switch (step) {
      case 1: // Discovery
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={common}>
            <path d="M10 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm0 2a6 6 0 1 0 0 12A6 6 0 0 0 10 4Zm10.707 16.293-3.387-3.386a10 10 0 0 1-1.414 1.414l3.386 3.387a1 1 0 1 0 1.415-1.415Z"/>
          </svg>
        );
      case 2: // Pre-Prod (Clipboard)
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={common}>
            <path d="M9 2h6a2 2 0 0 1 2 2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2-2Zm0 2v2h6V4H9Zm-1 6h8v2H8V10Zm0 4h6v2H8v-2Z"/>
          </svg>
        );
      case 3: // Production (Camera)
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={common}>
            <path d="M7 6h2l1.2-1.8A2 2 0 0 1 12 3h0a2 2 0 0 1 1.8 1.2L15 6h2a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3Zm5 3.5A4.5 4.5 0 1 0 16.5 14 4.5 4.5 0 0 0 12 9.5Zm0 2A2.5 2.5 0 1 1 9.5 14 2.5 2.5 0 0 1 12 11.5Z"/>
          </svg>
        );
      case 4: // Delivery (Check)
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={common}>
            <path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm4.3 7.3-5.3 5.4-2.3-2.3-1.4 1.4 3.7 3.6 6.7-6.8-1.4-1.3Z"/>
          </svg>
        );
    }
  };

  // Load Admin-managed gallery from localStorage (if any)
  useEffect(() => {
    function loadFromStorage() {
      try {
        const raw = localStorage.getItem("siteGalleryByCategory");
        const data = raw ? JSON.parse(raw) : {};
        // flatten to [{src, category, alt, id}]
        const flat = [];
        Object.entries(data || {}).forEach(([cat, arr]) => {
          if (!Array.isArray(arr)) return;
          arr.forEach((src, i) => flat.push({ id: `${cat}-${i}`, src, alt: `${cat} ${i + 1}`, category: cat }));
        });
        setGalleryItems(flat);
      } catch {
        setGalleryItems([]);
      }
    }
    loadFromStorage();
    // keep in sync if storage changes (another tab)
    function onStorage(e) {
      if (e.key === "siteGalleryByCategory") loadFromStorage();
    }
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const sourceItems = useMemo(() => {
    return galleryItems && galleryItems.length ? galleryItems : LOCAL_ITEMS;
  }, [galleryItems]);

  const items = useMemo(() => (
    active === "All" ? sourceItems : sourceItems.filter((x) => x.category === active)
  ), [active, sourceItems]);

  function openLightbox(idx) {
    setLightboxIndex(idx);
  }
  function closeLightbox() {
    setLightboxIndex(-1);
  }
  function next() {
    setLightboxIndex((i) => (i + 1) % items.length);
  }
  function prev() {
    setLightboxIndex((i) => (i - 1 + items.length) % items.length);
  }

  useEffect(() => {
    function onKey(e) {
      if (lightboxIndex < 0) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, items.length]);

  return (
    <main className="max-w-6xl mx-auto px-4 py-10 space-y-10">
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">Our Work</h1>
        <p className="text-gray-600 dark:text-gray-300">A selection of our recent photography work</p>
      </header>

      {/* Controls */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActive(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              active === category
                ? 'bg-violet-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid: exactly 3 items per row on md+ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            onClick={() => openLightbox(index)}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <span className="text-white font-medium">{item.alt}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Case Studies removed per request */}

      {/* Our Process */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Our Process</h2>
        <ol className="grid md:grid-cols-4 gap-5">
          {[
            { step: 1, title: "Discovery", desc: "Understand goals, audience, and style preferences." },
            { step: 2, title: "Pre‑Prod", desc: "Moodboards, shot lists, logistics, and scheduling." },
            { step: 3, title: "Production", desc: "On‑site/studio shoot with direction and lighting." },
            { step: 4, title: "Delivery", desc: "Retouching, color, edits, and on‑time delivery." },
          ].map((p) => (
            <li key={p.step} className="rounded-xl border p-5 bg-white dark:bg-gray-800">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 grid place-items-center rounded-full bg-violet-600 text-white text-sm">{p.step}</div>
                <div className="w-8 h-8 grid place-items-center rounded-full bg-violet-50 text-violet-700 border border-violet-100">
                  <Icon step={p.step} />
                </div>
              </div>
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{p.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border p-6 md:p-8 bg-gradient-to-br from-violet-50 to-white dark:from-gray-800 dark:to-gray-900 text-center">
        <h2 className="text-2xl font-bold mb-2">Have a brief in mind?</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">Share your goals and we’ll propose the best approach.</p>
        <a href="/contact" className="inline-flex items-center justify-center px-5 py-2.5 rounded bg-violet-600 text-white hover:bg-violet-700">Talk to us</a>
      </section>

      {/* Lightbox */}
      {lightboxIndex >= 0 && (
        <div className="fixed inset-0 bg-black/95 dark:bg-gray-900/95 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            aria-label="Close lightbox"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Previous image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="max-w-4xl w-full">
            <img
              src={items[lightboxIndex]?.src}
              alt={items[lightboxIndex]?.alt}
              className="max-h-[80vh] w-auto mx-auto object-contain"
            />
            <p className="text-white text-center mt-3 text-sm md:text-base">{items[lightboxIndex]?.alt}</p>
          </div>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Next image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </main>
  );
}
