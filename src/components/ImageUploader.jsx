import { useEffect, useRef, useState } from "react";

function getOverrides() {
  try {
    return JSON.parse(localStorage.getItem("siteImageOverrides") || "{}");
  } catch {
    return {};
  }
}
function saveOverrides(data) {
  localStorage.setItem("siteImageOverrides", JSON.stringify(data));
}
function setDeep(obj, path, value) {
  const keys = path.split(".");
  let cur = obj;
  keys.forEach((k, i) => {
    if (i === keys.length - 1) cur[k] = value;
    else cur = cur[k] = cur[k] || {};
  });
}

async function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default function ImageUploader({ label, storageKey }) {
  const inputRef = useRef(null);
  const [preview, setPreview] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const overrides = getOverrides();
    const keys = storageKey.split(".");
    let cur = overrides;
    for (const k of keys) {
      if (!cur) break;
      cur = cur[k];
    }
    if (typeof cur === "string") setPreview(cur);
  }, [storageKey]);

  async function handleFileChange(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const dataUrl = await fileToDataUrl(file);
    setPreview(dataUrl);
  }

  async function handleSave() {
    if (!preview) return alert("Please choose an image first.");
    setSaving(true);
    try {
      const overrides = getOverrides();
      setDeep(overrides, storageKey, preview);
      saveOverrides(overrides);
      alert("Saved!");
    } finally {
      setSaving(false);
    }
  }

  function handleClear() {
    const overrides = getOverrides();
    setDeep(overrides, storageKey, "");
    saveOverrides(overrides);
    setPreview("");
  }

  return (
    <div className="border rounded-lg p-4 grid gap-3">
      <div className="flex items-center justify-between">
        <h3 className="font-medium">{label}</h3>
        <div className="flex items-center gap-2">
          <button onClick={() => inputRef.current?.click()} className="px-3 py-1.5 border rounded">Choose</button>
          <button onClick={handleSave} disabled={saving} className="px-3 py-1.5 rounded bg-indigo-600 text-white disabled:opacity-60">
            {saving ? "Saving…" : "Save"}
          </button>
          <button onClick={handleClear} className="px-3 py-1.5 border rounded text-red-600">Clear</button>
        </div>
      </div>
      <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
      <div className="aspect-video bg-gray-50 border rounded grid place-items-center overflow-hidden">
        {preview ? (
          <img src={preview} alt={`${label} preview`} className="w-full h-full object-cover" />
        ) : (
          <span className="text-sm text-gray-500">No image selected</span>
        )}
      </div>
    </div>
  );
}
