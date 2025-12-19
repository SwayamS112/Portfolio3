export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#020617]">
      
      {/* Gradient Blobs */}
      <div
  className="absolute -top-40 -left-40 w-[600px] h-[600px]
  bg-purple-600/20 rounded-full blur-[160px]"
  style={{ animation: "float 18s ease-in-out infinite" }}
/>

      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px]
        bg-indigo-500/20 rounded-full blur-[160px]
        animate-[float_22s_ease-in-out_infinite]" />

      <div className="absolute bottom-[-20%] left-1/3 w-[600px] h-[600px]
        bg-sky-500/15 rounded-full blur-[160px]
        animate-[float_26s_ease-in-out_infinite]" />

      {/* Grid Overlay (VERY subtle) */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}
