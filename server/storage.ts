import { db } from "./db";
import { projects, messages, type InsertProject, type InsertMessage } from "@shared/schema";

export interface IStorage {
  getProjects(): Promise<typeof projects.$inferSelect[]>;
  createProject(project: InsertProject): Promise<typeof projects.$inferSelect>;
  createMessage(message: InsertMessage): Promise<typeof messages.$inferSelect>;
}

export class DatabaseStorage implements IStorage {
  async getProjects() {
    return await db.select().from(projects);
  }

  async createProject(project: InsertProject) {
    const [newProject] = await db.insert(projects).values(project).returning();
    return newProject;
  }

  async seedData() {
    const existingProjects = await db.select().from(projects);
    if (existingProjects.length === 0) {
      await db.insert(projects).values([
        {
          title: "Chatssssss",
          description: "A high-performance real-time messaging application with instant delivery. Experience seamless connectivity and modern UI for all your communication needs.",
          link: "https://Chatssssss.netlify.app/",
          category: "Real-time Communication",
          imageUrl: "/assets/generated_images/modern_abstract_chat_application_interface_mockup.png"
        },
        {
          title: "Portfolio",
          description: "A professional showcase of my technical journey and creative projects. Built with kinetic typography and responsive design principles.",
          link: "https://my-prtflio.netlify.app/",
          category: "Personal Showcase",
          imageUrl: "/assets/generated_images/sleek_digital_portfolio_website_preview.png"
        }
      ]);
    }
  }

  constructor() {
    this.seedData();
  }
}

export const storage = new DatabaseStorage();
