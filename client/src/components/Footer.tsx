import { Link } from "wouter";
import { Github, Linkedin, Twitter, Heart } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-background py-12 mt-auto">
      <div className="container px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <Link href="/" className="font-display text-2xl font-bold tracking-tight mb-4 inline-block">
              Portfolio<span className="text-primary">.</span>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Crafting digital experiences with code and passion. 
              Let's build something amazing together.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Social</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-secondary/50 text-muted-foreground hover:bg-primary hover:text-white transition-all">
                <Github size={20} />
              </a>
              <a href="#" className="p-2 rounded-full bg-secondary/50 text-muted-foreground hover:bg-primary hover:text-white transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2 rounded-full bg-secondary/50 text-muted-foreground hover:bg-primary hover:text-white transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {year} Portfolio. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart size={14} className="text-red-500 fill-red-500" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
