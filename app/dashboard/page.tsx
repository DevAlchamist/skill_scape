"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter } from "lucide-react";
import LearningHubSidebar from "@/components/learningSidebar";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import useAuthStore from "@/store/authStore";
import SocialFeed from "@/components/socialFeed";
import ExploreHubs from "@/components/homeExplore";
import { useHubStore } from "@/store/hubStore";
const SAMPLE_HUBS = [
  {
    id: 1,
    title: "Web Development Mastery",
    description: "Complete path to becoming a full-stack developer",
    category: "Programming",
    difficulty: "Intermediate",
    users: 1234,
    user: {
      name: "Shubhanshu Nayak",
      avatar: "/avatars/shubhanshu.png",
      update: "Started learning full-stack dev today! Let’s gooo! 🚀",
      progress: 5,
      time: "2h ago",
    },
  },
  {
    id: 2,
    title: "React Native Basics",
    description: "Build mobile apps with React Native",
    category: "Mobile",
    difficulty: "Beginner",
    users: 821,
    user: {
      name: "Pixie",
      avatar: "/avatars/pixie.png",
      update: "Just crossed 40% of this course! 💪",
      progress: 42,
      time: "1d ago",
    },
  },
  {
    id: 3,
    title: "DevOps Essentials",
    description: "Deploy apps the pro way",
    category: "DevOps",
    difficulty: "Intermediate",
    users: 1052,
    user: {
      name: "CodeWizard",
      avatar: "/avatars/codewizard.png",
      update: "Loving the Docker section 🔥",
      progress: 78,
      time: "3d ago",
    },
  },
];

export default function ExplorePage() {
  const [selectedView, setSelectedView] = useState("social"); // Track the selected view

  // Handle click events to toggle between social feed and explore hubs
  const handleViewChange = (view: string) => {
    setSelectedView(view);
  };
  const { fetchCurrentUser, loading } = useAuthStore();
  const { hubs } = useHubStore();

  useEffect(() => {
    fetchCurrentUser(); // Fetch user on component mount (reload)
  }, [fetchCurrentUser]);
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="w-64 h-full sticky top-0 hidden md:block border-r"
      >
        <LearningHubSidebar />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex-1 overflow-y-auto px-4 py-8"
      >
        {/* Search + Filters */}
        <div className="flex flex-col md:flex-row gap-4 items-center mb-8">
          <div className="relative flex-1">
            <input className="pl-10" placeholder="Search posts or users..." />
          </div>
          <Button variant="outline">Filters</Button>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mb-6">
          <Button
            variant="default"
            className="w-full md:w-auto"
            onClick={() => handleViewChange("social")}
          >
            Go Social
          </Button>
          <Button
            variant="secondary"
            className="w-full md:w-auto"
            onClick={() => handleViewChange("hubs")}
          >
            Explore Other Hubs
          </Button>
        </div>

        {/* Conditional Rendering based on selected view */}
        {selectedView === "social" && <SocialFeed />}
        {selectedView === "hubs" && <ExploreHubs hubs={hubs} />}
      </motion.div>{" "}
    </div>
  );
}
