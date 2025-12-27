import { useState } from "react";
import { useCreateProject } from "@/hooks/use-projects";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/Input";
import { Loader2, Plus } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { insertProjectSchema, type InsertProject } from "@shared/schema";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

// Re-implementing parts of Dialog manually because I need specific styling overrides
// and to ensure it's self-contained without relying on ui/ files that might not match the aesthetic perfectly

export function AddProjectDialog() {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const createProject = useCreateProject();

  const form = useForm<InsertProject>({
    resolver: zodResolver(insertProjectSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "",
      link: "",
      imageUrl: "",
    },
  });

  const onSubmit = (data: InsertProject) => {
    createProject.mutate(data, {
      onSuccess: () => {
        toast({ title: "Project created", description: "Your masterpiece has been added." });
        setOpen(false);
        form.reset();
      },
      onError: (error) => {
        toast({ title: "Error", description: error.message, variant: "destructive" });
      },
    });
  };

  return (
    <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
      <DialogPrimitive.Trigger asChild>
        <button className="
          fixed bottom-8 right-8 z-50
          w-16 h-16 rounded-full bg-primary text-background
          flex items-center justify-center
          hover:scale-110 hover:rotate-90 transition-all duration-300
          shadow-lg shadow-primary/20
        ">
          <Plus className="w-8 h-8" />
        </button>
      </DialogPrimitive.Trigger>
      
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-border bg-background p-6 shadow-2xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg">
          
          <div className="flex flex-col gap-2 text-center sm:text-left">
            <h2 className="text-2xl font-display font-bold tracking-tight text-foreground">Add Project</h2>
            <p className="text-sm text-muted-foreground">Showcase your latest work.</p>
          </div>

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-4">
            <Input 
              label="Project Title" 
              placeholder="Neon Dreams" 
              {...form.register("title")} 
            />
            
            <div className="space-y-2">
              <label className="block text-xs uppercase tracking-widest text-muted-foreground">Category</label>
              <select 
                {...form.register("category")}
                className="w-full bg-transparent border-b-2 border-muted py-4 font-display font-medium text-foreground focus:outline-none focus:border-primary"
              >
                <option value="" disabled>Select Category</option>
                <option value="Design">Design</option>
                <option value="Development">Development</option>
                <option value="Art Direction">Art Direction</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-xs uppercase tracking-widest text-muted-foreground">Description</label>
              <textarea 
                {...form.register("description")}
                rows={3}
                className="w-full bg-transparent border-b-2 border-muted py-2 font-body text-foreground focus:outline-none focus:border-primary resize-none"
                placeholder="A brief description of the project..."
              />
            </div>

            <Input 
              label="Project Link" 
              placeholder="https://..." 
              {...form.register("link")} 
            />

            <Input 
              label="Image URL" 
              placeholder="https://images.unsplash.com/..." 
              {...form.register("imageUrl")} 
            />

            <button
              type="submit"
              disabled={createProject.isPending}
              className="w-full bg-primary text-background py-4 font-bold uppercase tracking-widest hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {createProject.isPending ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 className="animate-spin" /> Adding...
                </span>
              ) : (
                "Create Project"
              )}
            </button>
          </form>

          <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
