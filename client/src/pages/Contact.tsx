import { Navigation } from "@/components/Navigation";
import { Input } from "@/components/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertMessageSchema, type InsertMessage } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<InsertMessage>({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: InsertMessage) => {
    // EMPTY FIELD VALIDATION
    if (!data.name || !data.email || !data.message) {
      toast({
        title: "Fields are empty ❗",
        description: "Please fill all fields before sending the message.",
        variant: "destructive",
      });
      return;
    }

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        "YOUR_PUBLIC_KEY"
      );

      toast({
        title: "Message Sent 🎉",
        description: "Thanks for reaching out. I’ll get back to you soon.",
      });

      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="pt-32 px-6 lg:px-24 pb-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display font-bold text-6xl md:text-8xl leading-none mb-8">
              SAY <br /> <span className="text-primary">HELLO.</span>
            </h1>

            <p className="font-body text-xl text-muted-foreground max-w-md">
              Available for freelance projects and open to full-time opportunities.
              Let's build something unforgettable.
            </p>

            <div className="mt-16 space-y-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-1">
                  Email
                </span>
                <a
                  href="mailto:vaibhavpandey.engineer@gmail.com"
                  className="font-display text-2xl hover:text-primary transition-colors"
                >
                  vaibhavpandey.engineer@gmail.com
                </a>
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-1">
                  Socials
                </span>
                <div className="flex gap-6 font-display text-lg">
                  <a
                    href="https://github.com/Vaibhaw-P"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    GitHub
                  </a>

                  <a
                    href="https://www.linkedin.com/in/vaibhavpandeydev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card/5 backdrop-blur-sm p-8 md:p-12 border border-border/50"
          >
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
              <Input
                label="Your Name"
                placeholder="John Doe"
                {...form.register("name")}
              />

              <Input
                label="Email Address"
                type="email"
                placeholder="john@example.com"
                {...form.register("email")}
              />

              <div className="w-full group">
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2 group-focus-within:text-primary transition-colors">
                  Message
                </label>

                <textarea
                  {...form.register("message")}
                  rows={4}
                  className="w-full bg-transparent border-b-2 border-muted py-4 text-xl font-body text-foreground focus:outline-none focus:border-primary resize-none placeholder:text-muted-foreground/20 transition-all duration-300"
                  placeholder="Tell me about your project..."
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="group flex items-center gap-4 text-4xl font-display font-bold uppercase tracking-tight hover:text-primary transition-colors"
                >
                  Send Message
                  <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
