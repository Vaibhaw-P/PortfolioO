import { Navigation } from "@/components/Navigation";
import { useProjects } from "@/hooks/use-projects";
import { AddProjectDialog } from "@/components/AddProjectDialog";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Work() {
  const { data: projects, isLoading } = useProjects();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-32 px-6 lg:px-24 pb-24">
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="font-display font-bold text-6xl md:text-9xl mb-24 text-primary"
        >
          SELECTED <br /> WORK
        </motion.h1>

        {isLoading ? (
          <div className="w-full h-64 flex items-center justify-center font-body text-muted-foreground animate-pulse">
            LOADING PROJECTS...
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-y-32">
            {projects?.map((project, index) => (
              <motion.article 
                key={project.id}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8 }}
                className="group relative border-t border-border pt-12 md:grid md:grid-cols-12 gap-8"
              >
                <div className="md:col-span-4 mb-8 md:mb-0">
                  <div className="flex items-start justify-between">
                    <span className="font-body text-xs uppercase tracking-widest text-primary mb-4 block">
                      0{index + 1} — {project.category}
                    </span>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="md:hidden w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-background transition-colors"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                  <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 group-hover:text-primary transition-colors">
                    {project.title}
                  </h2>
                  <p className="font-body text-muted-foreground max-w-sm">
                    {project.description}
                  </p>
                  
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hidden md:inline-flex items-center gap-2 mt-8 text-sm uppercase tracking-widest hover:text-primary transition-colors group/link"
                  >
                    View Project 
                    <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </a>
                </div>

                <div className="md:col-span-8 relative overflow-hidden aspect-video bg-muted group-hover:scale-[1.02] transition-transform duration-700 ease-out">
                  {project.imageUrl ? (
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground font-display text-4xl">
                      {project.title[0]}
                    </div>
                  )}
                  
                  {/* Overlay sheen effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                </div>
              </motion.article>
            ))}

            {projects?.length === 0 && (
              <div className="col-span-full text-center py-24 text-muted-foreground font-body">
                No projects found. Use the + button to add one.
              </div>
            )}
          </div>
        )}
      </main>

      <AddProjectDialog />
    </div>
  );
}
