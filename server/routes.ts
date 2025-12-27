import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.get(api.projects.list.path, async (req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });

  app.post(api.projects.create.path, async (req, res) => {
    try {
      const input = api.projects.create.input.parse(req.body);
      const project = await storage.createProject(input);
      res.status(201).json(project);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
           message: err.errors[0].message,
           field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  app.post(api.messages.create.path, async (req, res) => {
    try {
      const input = api.messages.create.input.parse(req.body);
      const message = await storage.createMessage(input);
      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
           message: err.errors[0].message,
           field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Seed data if empty
  const existingProjects = await storage.getProjects();
  if (existingProjects.length === 0) {
    await storage.createProject({
      title: "Neon Dreams",
      description: "A cyberpunk-inspired web experience with kinetic typography.",
      link: "#",
      category: "Web Design",
      imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f"
    });
    await storage.createProject({
      title: "Mono Minimal",
      description: "Strictly black and white portfolio for a minimalist architect.",
      link: "#",
      category: "Branding",
      imageUrl: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85"
    });
    await storage.createProject({
      title: "Type Force",
      description: "Experimental typography project exploring variable fonts.",
      link: "#",
      category: "Typography",
      imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5"
    });
  }

  return httpServer;
}
