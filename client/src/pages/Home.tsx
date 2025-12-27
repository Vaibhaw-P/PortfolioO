import { Navigation } from "@/components/Navigation";
import { LargeLink } from "@/components/LargeLink";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navigation />
      
      <main className="h-screen flex flex-col justify-center px-6 lg:px-24">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-32 right-6 lg:right-24 text-right hidden md:block"
        >
          <p className="font-display font-bold text-2xl text-foreground uppercase tracking-wider leading-tight">
            Vaibhav <br /> <span className="text-sm font-body text-muted-foreground tracking-widest font-normal">Fullstack Developer</span>
          </p>
        </motion.div>

        <div className="flex flex-col space-y-[-2vw] z-10">
          <LargeLink href="/work" delay={0.2}>Design</LargeLink>
          <LargeLink href="/about" delay={0.3}>Develop</LargeLink>
          <LargeLink href="/contact" delay={0.4}>Deploy</LargeLink>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-6 lg:left-24 max-w-md"
        >
          <p className="font-body text-muted-foreground">
            Creating memorable digital experiences through bold typography and kinetic interactions.
          </p>
        </motion.div>
      </main>
      
      {/* Background grain texture effect */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0 mix-blend-overlay" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
      }}></div>
    </div>
  );
}
