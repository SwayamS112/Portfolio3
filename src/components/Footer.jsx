export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/10 text-center text-sm text-slate-400">
      <p>
        © {new Date().getFullYear()} Swayam Sood. Built with React & Tailwind.
      </p>
    </footer>
  );
}
