// components/ExploreHubs.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";

// Sample data for other hubs
const SAMPLE_HUBS = [
  {
    id: 1,
    name: "Web Development",
    description: "A hub dedicated to learning full-stack development.",
    topic: "Development",
    learners: 1200,
  },
  {
    id: 2,
    name: "Data Science",
    description:
      "Dive into the world of data analysis, machine learning, and more.",
    topic: "AI & ML",
    learners: 850,
  },
  {
    id: 3,
    name: "Game Development",
    description: "Everything about building games, from beginner to advanced.",
    topic: "Development",
    learners: 450,
  },
];

export default function ExploreHubs(hubs: any) {
  const [selectedTopic, setSelectedTopic] = useState("All");
  console.log(hubs);
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Explore Other Hubs</h2>
      <div className="flex mb-4"></div>

      {/* Hub Listings */}
      <div className="space-y-4">
        {/* // .filter(
          //   (hub: any) => selectedTopic === "All" || hub.topic === selectedTopic
          // ) */}
        {hubs.hubs.map((hub: any) => (
          <motion.div
            key={hub._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="flex-1">
                  <CardTitle className="text-base">{hub.title}</CardTitle>
                  <CardDescription className="text-xs text-muted-foreground">
                    {hub.learners} learners
                  </CardDescription>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {hub.topic}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm">{hub.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
