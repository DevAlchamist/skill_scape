"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Loader2, BrainCircuit, Hammer, Compass } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useHubStore } from "@/store/hubStore";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export default function IdeaProcessorPage() {
  const [mode, setMode] = useState("");
  const [idea, setIdea] = useState("");
  const { createHub, loading } = useHubStore();
  const [isGenerating, setIsGenerating] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isGenerating) {
      const slug = slugify(idea);
      const timeout = setTimeout(() => {
        if (mode === "learning") {
          router.push(`/hubs/${slug}`);
        } else if (mode === "interview") {
          router.push(`/interview?topic=${slug}`);
        }
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [isGenerating, idea, mode, router]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!idea.trim() || !mode) return;
    if (mode === "learning") {
      await createHub(idea); // Send the prompt to createHub only for learning mode
    }

    setIsGenerating(true);
  };

  return (
    <div className="h-screen flex items-center justify-center px-4">
      {!loading ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full max-w-xl space-y-6 text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-bold"
          >
            Turn Your Idea into a Plan
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground"
          >
            Describe your goal and we’ll generate a customized plan for you.
          </motion.p>

          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <Select onValueChange={setMode}>
              <SelectTrigger>
                <SelectValue placeholder="Choose what you want to generate" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="learning">Learning Hub</SelectItem>
                <SelectItem value="interview">Interview Prep</SelectItem>
              </SelectContent>
            </Select>

            <Textarea
              rows={4}
              placeholder="e.g., I want to become a backend developer..."
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              className="resize-none"
            />

            <Button
              type="submit"
              disabled={!idea.trim() || !mode}
              className="w-full"
            >
              Generate Plan
            </Button>
          </form>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center gap-6 text-center"
        >
          <div className="flex gap-4 animate-pulse text-primary">
            <BrainCircuit className="h-10 w-10" />
            <Hammer className="h-10 w-10" />
            <Compass className="h-10 w-10" />
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl font-semibold"
          >
            Building your personalized resources...
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-muted-foreground"
          >
            Fetching data, aligning content, setting up your hub 🚀
          </motion.p>
          <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
        </motion.div>
      )}
    </div>
  );
}
