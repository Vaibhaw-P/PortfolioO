import { motion } from "framer-motion";
import { useProjects } from "@/hooks/use-portfolio";
import { ProjectCard } from "@/components/ProjectCard";
import { Loader2 } from "lucide-react";

export default function Projects() {
  const { data: projects, isLoading } = useProjects();

  return (
    <div className="min-h-screen py-32">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
            My Projects
          </h1>
          <p className="text-xl text-muted-foreground">
            A showcase of my development work, personal projects, and experiments.
            Everything from full-stack applications to small utility tools.
          </p>
        </motion.div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="h-10 w-10 animate-spin text-primary" />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects?.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
            {!projects?.length && (
              <div className="col-span-full text-center py-20 bg-secondary/20 rounded-2xl border border-dashed border-white/10">
                <p className="text-muted-foreground">No projects found. Check back soon!</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
