import { Link } from "wouter";
import { motion } from "framer-motion";

interface LargeLinkProps {
  href: string;
  children: React.ReactNode;
  delay?: number;
}

export function LargeLink({ href, children, delay = 0 }: LargeLinkProps) {
  return (
    <Link href={href}>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
        className="cursor-pointer group relative overflow-hidden"
      >
        <h2 className="font-display font-extrabold text-[10vw] leading-[0.85] text-stroke group-hover:text-primary transition-colors duration-500 uppercase tracking-tighter">
          {children}
        </h2>
        {/* Fill effect on hover */}
        <div className="absolute top-0 left-0 w-full h-full text-[10vw] leading-[0.85] font-display font-extrabold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none uppercase tracking-tighter mix-blend-screen transform translate-y-2 translate-x-2 blur-lg">
          {children}
        </div>
      </motion.div>
    </Link>
  );
}
