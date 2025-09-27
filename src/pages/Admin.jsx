import { useState } from "react";
import AdminLogin from "../components/AdminLogin";
import AdminGallery from "../components/AdminGallery";

export default function Admin() {
  const [authed, setAuthed] = useState(false);

  if (!authed) {
    return (
      <main className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-4">Admin Login</h1>
        <AdminLogin onLogin={() => setAuthed(true)} />
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
        <button
          className="px-3 py-2 rounded border border-violet-200 text-gray-800 hover:text-violet-700 hover:bg-violet-50 hover:border-violet-300 shadow-sm hover:shadow-md transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-violet-500"
          onClick={() => setAuthed(false)}
        >
          Logout
        </button>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-medium">All Images</h2>
        <p className="text-sm text-gray-600">Upload, filter, move between categories, and remove images. Stored locally for now.</p>
        <AdminGallery categories={["Portraits", "Weddings", "Events", "Product", "Brand"]} />
      </section>
    </main>
  );
}
