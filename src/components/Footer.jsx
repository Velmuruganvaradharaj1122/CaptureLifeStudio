import { useEffect, useState } from "react";

export default function Footer() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scY = window.scrollY || document.documentElement.scrollTop;
      const docH = document.documentElement.scrollHeight;
      const winH = window.innerHeight;
      const fromBottom = docH - (scY + winH);
      // Show after user scrolls a bit, or when near bottom
      if (scY > 300 || fromBottom < 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const wrapperClasses =
    "fixed bottom-0 inset-x-0 border-t bg-gradient-to-t from-indigo-50/60 to-white/95 backdrop-blur py-3 text-sm text-gray-600 transition-all duration-300 " +
    (visible ? "translate-y-0 opacity-100 pointer-events-auto" : "translate-y-full opacity-0 pointer-events-none");

  return (
    <footer className={wrapperClasses}>
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <div className="h-6 w-6 rounded-full bg-indigo-600" aria-hidden="true" />
          <p className="truncate">© {new Date().getFullYear()} <span className="font-medium text-gray-800">Studio</span> • Crafted with care</p>
        </div>
        <div className="hidden md:flex items-center gap-6 text-xs text-gray-600">
          <div className="flex items-center gap-2">
            <span className="font-medium text-gray-800">Location:</span>
            <span>123 Studio Ave, Erode, IN</span>
          </div>
          <div className="hidden lg:flex items-center gap-2">
            <span className="font-medium text-gray-800">Hours:</span>
            <span>Mon–Sat 10:00–18:00</span>
          </div>
        </div>
        <nav className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group inline-flex items-center gap-2 px-3 py-2 rounded-full bg-indigo-600 text-white shadow-md hover:shadow-lg hover:bg-indigo-700 ring-1 ring-indigo-600/20 transition"
            title="Back to top"
            aria-label="Back to top"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5">
              <path d="M12 4l-7 7h4v9h6v-9h4z" />
            </svg>
            <span className="hidden sm:inline text-sm">Back to top</span>
          </button>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="p-2 rounded hover:bg-white/60 transition"
            title="Facebook"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M22 12a10 10 0 1 0-11.563 9.874v-6.985H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562V12h2.773l-.443 2.889h-2.33v6.985A10.002 10.002 0 0 0 22 12Z" />
            </svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="p-2 rounded hover:bg-white/60 transition"
            title="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5Zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5Zm5.75-3.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25Z" />
            </svg>
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="p-2 rounded hover:bg-white/60 transition"
            title="Twitter"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M3 3h3.6l5.1 7.2L16.7 3H21l-7.2 9.9L21 21h-3.6l-5.4-7.6L6.9 21H3l7.6-10.4L3 3Z" />
            </svg>
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="p-2 rounded hover:bg-white/60 transition"
            title="YouTube"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M23.498 6.186a3.001 3.001 0 0 0-2.113-2.12C19.532 3.5 12 3.5 12 3.5s-7.532 0-9.385.566A3.001 3.001 0 0 0 .502 6.186C0 8.05 0 12 0 12s0 3.95.502 5.814a3.001 3.001 0 0 0 2.113 2.12C4.468 20.5 12 20.5 12 20.5s7.532 0 9.385-.566a3.001 3.001 0 0 0 2.113-2.12C24 15.95 24 12 24 12s0-3.95-.502-5.814ZM9.75 15.5v-7l6 3.5-6 3.5Z"/>
            </svg>
          </a>
        </nav>
      </div>
    </footer>
  );
}
