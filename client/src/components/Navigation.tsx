import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";

export function Navigation() {
  const [location] = useLocation();

  const links = [
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference">
      <Link href="/">
        <div className="font-display font-bold text-2xl text-white cursor-pointer hover:text-primary transition-colors">
          PORTFOLIO®
        </div>
      </Link>

      <nav className="hidden md:flex gap-12">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            <div className="relative group cursor-pointer">
              <span className={`font-body text-sm uppercase tracking-widest ${location === link.href ? 'text-primary' : 'text-white group-hover:text-primary'} transition-colors duration-300`}>
                {link.label}
              </span>
              {location === link.href && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"
                />
              )}
            </div>
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Icon would go here - keeping it simple for desktop-first statement design */}
      <div className="md:hidden text-white font-body text-sm">MENU</div>
    </header>
  );
}
