const tabs = [
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "tech", label: "Tech Stack" },
];

export default function PortfolioTabs({ active, setActive }) {
  return (
    <div className="mt-16 max-w-4xl mx-auto
      rounded-2xl bg-white/5 backdrop-blur-xl
      border border-white/10 p-2 flex">

      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActive(tab.id)}
          className={`flex-1 py-4 rounded-xl
            transition-all duration-500
            ${
              active === tab.id
                ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg"
                : "text-slate-400 hover:text-white"
            }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
