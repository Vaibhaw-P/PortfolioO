import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "../lib/supabase";

export function useProjects() {
  return useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("work_projects")
        .select("*")
        .order("id", { ascending: false });

      if (error) throw error;

      return data.map((p) => ({
        ...p,
        imageUrl: p.image_url,
      }));
    },
  });
}

export function useCreateProject() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (project: any) => {
      const { error } = await supabase.from("work_projects").insert([
        {
          title: project.title,
          description: project.description,
          link: project.link,
          category: project.category,
          image_url: project.imageUrl,
        },
      ]);

      if (error) throw error;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });
}
