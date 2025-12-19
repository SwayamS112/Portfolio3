export default function ImageModal({ src, onClose }) {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
    >
      <img
        src={src}
        alt="Full View"
        className="max-w-[90%] max-h-[90%] rounded-xl"
      />
    </div>
  );
}
