import { useEffect, useState } from "react";

const sections = ["home", "about", "portfolio", "contact"];

const accentMap = {
  home: "from-purple-400 to-indigo-400",
  about: "from-sky-400 to-indigo-400",
  portfolio: "from-indigo-400 to-violet-400",
  contact: "from-violet-400 to-purple-400",
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sectionElements = sections
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        // Get all visible sections
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => ({
            id: entry.target.id,
            top: entry.boundingClientRect.top,
          }));

        if (visibleSections.length > 0) {
          // Pick the section closest to the top of viewport
          const closestSection = visibleSections.reduce((prev, curr) =>
            Math.abs(curr.top) < Math.abs(prev.top) ? curr : prev
          );

          setActive(closestSection.id);
        }
      },
      {
        root: null,
        rootMargin: "-30% 0px -60% 0px",
        threshold: 0,
      }
    );

    sectionElements.forEach((el) => observer.observe(el));

    const onScroll = () => setScrolled(window.scrollY > 80);

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-black/55 border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-10 py-6 flex items-center justify-between">
        {/* NAME */}
        <a
          href="#home"
          className="text-2xl md:text-3xl font-bold tracking-wide
          bg-gradient-to-r from-purple-400 to-indigo-400
          bg-clip-text text-transparent"
        >
          Swayam Sood
        </a>

        {/* LINKS */}
        <ul className="hidden md:flex gap-14 text-lg font-medium">
          {sections.map((sec) => {
            const isActive = active === sec;

            return (
              <li key={sec} className="relative">
                <a
                  href={`#${sec}`}
                  className={`capitalize transition-colors duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {sec}
                </a>

                {isActive && (
                  <span
                    className={`absolute -bottom-4 left-0 w-full h-[3px]
                    bg-gradient-to-r ${accentMap[sec]}
                    rounded-full transition-all duration-500`}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
