import { Skill } from "@shared/schema";
import { motion } from "framer-motion";
import { 
  Code2, Database, Layout, Terminal, Wrench, Cpu 
} from "lucide-react";

// Helper to map icon strings to Lucide components
const IconMap: Record<string, React.ElementType> = {
  code: Code2,
  database: Database,
  layout: Layout,
  terminal: Terminal,
  wrench: Wrench,
  cpu: Cpu,
  default: Code2
};

export function SkillBadge({ skill }: { skill: Skill }) {
  const Icon = IconMap[skill.icon || "default"] || IconMap.default;

  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-3 p-4 rounded-xl bg-secondary/30 border border-white/5 hover:bg-secondary/50 hover:border-primary/20 transition-all"
    >
      <div className="p-2 rounded-lg bg-primary/10 text-primary">
        <Icon size={20} />
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center mb-1">
          <span className="font-medium text-foreground">{skill.name}</span>
          <span className="text-xs text-muted-foreground">{skill.proficiency}%</span>
        </div>
        <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.proficiency}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-primary to-purple-500 rounded-full"
          />
        </div>
      </div>
    </motion.div>
  );
}
