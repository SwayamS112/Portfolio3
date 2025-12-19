import { useState } from "react";
import ImageModal from "./ImageModal";

const certificates = [
  "/images/js.png",
  "/images/react.png",
  "/images/git.png",
];

export default function CertificateGrid() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <>
      <div className="grid md:grid-cols-3 gap-10">
        {certificates.map((src, i) => (
          <div
            key={i}
            onClick={() => setActiveImage(src)}
            className="cursor-pointer backdrop-blur-xl bg-white/5
            border border-white/10 rounded-2xl overflow-hidden
            hover:scale-105 transition"
          >
            <img src={src} alt="Certificate" className="object-cover" />
          </div>
        ))}
      </div>

      {activeImage && (
        <ImageModal src={activeImage} onClose={() => setActiveImage(null)} />
      )}
    </>
  );
}
