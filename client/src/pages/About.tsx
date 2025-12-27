import { Navigation } from "@/components/Navigation";
import { CursorLightImage } from "@/components/CursorLightImage";
import { motion } from "framer-motion";
import profilePic from "@assets/Profile_Pic1_1766817024951.JPG";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-32 px-6 lg:px-24 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display font-bold text-5xl md:text-6xl leading-[0.9] mb-10">
              VAIBHAV<br />
              FULLSTACK <span className="text-stroke text-transparent hover:text-primary transition-colors duration-300">DEVELOPER</span>
            </h1>
            
            {/* Cursor light effect image */}
            <CursorLightImage
              src={profilePic}
              alt="Vaibhav profile"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center space-y-12"
          >
            <div className="space-y-6">
              <h3 className="font-body text-xs uppercase tracking-widest text-primary">My Approach</h3>
              <p className="font-body text-xl md:text-2xl leading-relaxed text-muted-foreground">
                I build web applications that are both beautiful and functional. I specialize in creating responsive interfaces with modern web technologies, focusing on user experience and clean code. I transform ideas into interactive digital experiences.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="font-body text-xs uppercase tracking-widest text-primary">Technical Arsenal</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 font-display text-xl font-bold">
                <div className="flex items-center gap-3 border-b border-border py-2 group hover:text-primary transition-colors">
                  <span className="text-sm opacity-50 font-body">01</span> HTML
                </div>
                <div className="flex items-center gap-3 border-b border-border py-2 group hover:text-primary transition-colors">
                  <span className="text-sm opacity-50 font-body">02</span> CSS
                </div>
                <div className="flex items-center gap-3 border-b border-border py-2 group hover:text-primary transition-colors">
                  <span className="text-sm opacity-50 font-body">03</span> JavaScript
                </div>
                <div className="flex items-center gap-3 border-b border-border py-2 group hover:text-primary transition-colors">
                  <span className="text-sm opacity-50 font-body">04</span> React
                </div>
                <div className="flex items-center gap-3 border-b border-border py-2 group hover:text-primary transition-colors">
                  <span className="text-sm opacity-50 font-body">05</span> Java
                </div>
                <div className="flex items-center gap-3 border-b border-border py-2 group hover:text-primary transition-colors">
                  <span className="text-sm opacity-50 font-body">06</span> Python
                </div>
                <div className="flex items-center gap-3 border-b border-border py-2 group hover:text-primary transition-colors">
                  <span className="text-sm opacity-50 font-body">07</span> Node.js
                </div>
                <div className="flex items-center gap-3 border-b border-border py-2 group hover:text-primary transition-colors">
                  <span className="text-sm opacity-50 font-body">08</span> MySQL
                </div>
                <div className="flex items-center gap-3 border-b border-border py-2 group hover:text-primary transition-colors">
                  <span className="text-sm opacity-50 font-body">09</span> GitHub
                </div>
                <div className="flex items-center gap-3 border-b border-border py-2 group hover:text-primary transition-colors">
                  <span className="text-sm opacity-50 font-body">10</span> LaTeX
                </div>
                <div className="flex items-center gap-3 border-b border-border py-2 group hover:text-primary transition-colors">
                  <span className="text-sm opacity-50 font-body">11</span> DSA
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="font-body text-xs uppercase tracking-widest text-primary">Education</h3>
              <div className="space-y-8">
                <div className="group">
                  <span className="text-sm opacity-50 font-body block mb-2">B.Tech in Computer Science and Engineering</span>
                  <h4 className="font-display text-2xl font-bold group-hover:text-primary transition-colors">Galgotias University</h4>
                  <p className="text-muted-foreground font-body">Greater Noida</p>
                </div>
                <div className="group">
                  <span className="text-sm opacity-50 font-body block mb-2">12th Grade</span>
                  <h4 className="font-display text-2xl font-bold group-hover:text-primary transition-colors">St. Anthony's Inter College</h4>
                  <p className="text-muted-foreground font-body">Pratapgarh, U.P.</p>
                </div>
                <div className="group">
                  <span className="text-sm opacity-50 font-body block mb-2">10th Grade</span>
                  <h4 className="font-display text-2xl font-bold group-hover:text-primary transition-colors">Sangam International School</h4>
                  <p className="text-muted-foreground font-body">Pratapgarh</p>
                </div>
              </div>
            </div>

            <div className="pt-12 space-y-8">
              <a href="/contact" className="inline-block px-12 py-6 border border-foreground font-display font-bold text-xl hover:bg-primary hover:text-background hover:border-primary transition-all duration-300">
                LET'S WORK TOGETHER
              </a>
            </div>
          </motion.div>

        </div>
      </main>
    </div>
  );
}
