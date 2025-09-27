import { useEffect, useRef, useState } from "react";

// Local storage helpers
const GALLERY_KEY = "siteGalleryByCategory";
function loadGallery() {
  try {
    return JSON.parse(localStorage.getItem(GALLERY_KEY) || "{}");
  } catch {
    return {};
  }
}
function saveGallery(data) {
  localStorage.setItem(GALLERY_KEY, JSON.stringify(data));
}

async function filesToDataUrls(files) {
  const readers = Array.from(files).map(
    (file) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      })
  );
  return Promise.all(readers);
}

export default function CategoryImageManager({ category }) {
  const inputRef = useRef(null);
  const [images, setImages] = useState([]); // array of data URLs
  const [saving, setSaving] = useState(false);

  // Load existing on mount/category change
  useEffect(() => {
    const g = loadGallery();
    setImages(Array.isArray(g[category]) ? g[category] : []);
  }, [category]);

  function handleChoose() {
    inputRef.current?.click();
  }

  async function handleFiles(e) {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    const urls = await filesToDataUrls(files);
    setImages((prev) => [...urls, ...prev]); // newest first
    // clear input value so the same file can be selected again
    e.target.value = "";
  }

  function handleRemove(idx) {
    setImages((prev) => prev.filter((_, i) => i !== idx));
  }

  function handleClearAll() {
    if (!confirm(`Remove all images in ${category}?`)) return;
    setImages([]);
  }

  async function handleSave() {
    setSaving(true);
    try {
      const g = loadGallery();
      g[category] = images;
      saveGallery(g);
      alert("Saved!");
    } finally {
      setSaving(false);
    }
  }

  return (
    <section className="rounded-xl border p-4 bg-white">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold">{category}</h3>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleChoose}
            className="px-3 py-1.5 rounded border border-violet-200 hover:bg-violet-50 hover:border-violet-300 text-gray-800 hover:text-violet-700 transition"
          >
            Upload
          </button>
          <button
            type="button"
            onClick={handleSave}
            disabled={saving}
            className="px-3 py-1.5 rounded bg-violet-600 text-white hover:bg-violet-700 disabled:opacity-60 transition"
          >
            {saving ? "Saving…" : "Save"}
          </button>
          <button
            type="button"
            onClick={handleClearAll}
            className="px-3 py-1.5 rounded border text-red-600 hover:bg-red-50 transition"
          >
            Clear all
          </button>
        </div>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={handleFiles}
      />

      {images.length === 0 ? (
        <div className="aspect-video rounded border bg-gray-50 grid place-items-center text-sm text-gray-500">
          No images yet. Click Upload to add.
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {images.map((src, i) => (
            <div key={i} className="relative group rounded-lg overflow-hidden border bg-white">
              <img src={src} alt={`${category} ${i + 1}`} className="w-full h-32 object-cover" />
              <button
                type="button"
                onClick={() => handleRemove(i)}
                className="absolute top-1 right-1 px-2 py-1 text-xs rounded bg-white/90 border shadow opacity-0 group-hover:opacity-100 transition"
                aria-label="Remove image"
                title="Remove"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
