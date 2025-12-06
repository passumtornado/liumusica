// components/Header.tsx
import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Team", href: "/team" },
  { name: "Features", href: "/features" }, // NEW COMBINED PAGE
  { name: "Instructions", href: "/instructions" },
];

export default function HeaderPage() {
  return (
    <header className="bg-blue-900 shadow-xl sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-extrabold text-white tracking-wider"
        >
          LIU <span className="text-blue-300">MuSiCa</span>
        </Link>
        <div className="space-x-8 hidden md:flex items-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white hover:text-blue-300 font-medium transition duration-150"
            >
              {item.name}
            </Link>
          ))}
          {/* GitHub Link added to nav bar */}
          <a
            href="[Your GitHub Repository URL]"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-300 transition duration-150"
            aria-label="GitHub Repository"
          >
            {/* Placeholder for GitHub Icon (use an actual SVG or component like Lucide's Github) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3-0.5 6-1.5 6-6.5a5.4 5.4 0 0 0-1.2-3.8 5 5 0 0 0 0-4.8c0.2-1.2 0.7-3 0.7-3S17 2 16 3.5c-1.3-0.4-2.7-0.6-4-0.6s-2.7 0.2-4 0.6c-1 1.5-1 1.5-1 1.5S7 6.2 7 7.2c0 2.2-0.5 4-1.2 4.8-1 0.8-1.8 1.8-1.8 2.8 0 1 0.8 2 1.8 2.8C5.5 18 6 18.2 6.5 18.5a4.8 4.8 0 0 0 1 3.5v4" />
              <path d="M12 2v-2" />
            </svg>
          </a>
        </div>
      </nav>
    </header>
  );
}
