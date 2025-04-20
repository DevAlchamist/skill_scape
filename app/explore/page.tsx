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
import { Checkbox } from "@/components/ui/checkbox";
import { Search, Filter } from "lucide-react";

const SAMPLE_HUBS = [
  {
    id: 1,
    title: "Web Development Mastery",
    description: "Complete path to becoming a full-stack developer",
    category: "Programming",
    difficulty: "Intermediate",
    users: 1234,
  },
  {
    id: 2,
    title: "Data Science Bootcamp",
    description: "Hands-on ML, Python, and visualization",
    category: "Data",
    difficulty: "Beginner",
    users: 980,
  },
  {
    id: 3,
    title: "React Native for Mobile Apps",
    description: "Learn to build cross-platform mobile apps",
    category: "Mobile",
    difficulty: "Intermediate",
    users: 743,
  },
  {
    id: 4,
    title: "DevOps Essentials",
    description: "CI/CD, Docker, Kubernetes, GitOps",
    category: "DevOps",
    difficulty: "Advanced",
    users: 612,
  },
];

export default function ExplorePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className=" mx-auto px-4 py-8"
    >
      {/* Search bar */}
      <div className="flex items-center gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            className="pl-10 bg-[#0d1117] border border-gray-700 text-white"
            placeholder="Search learning hubs..."
          />
        </div>
        <Button variant="outline" className="hidden md:flex border-gray-700 text-white">
          <Filter className="mr-2 h-4 w-4" />
          Filters
        </Button>
      </div>

      {/* Main layout */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar filters */}
        <aside className="w-full md:w-64 space-y-6 text-sm text-white">
          <div>
            <h2 className="font-semibold mb-2">Category</h2>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <Checkbox id="programming" />
                <span>Programming</span>
              </label>
              <label className="flex items-center gap-2">
                <Checkbox id="data" />
                <span>Data</span>
              </label>
              <label className="flex items-center gap-2">
                <Checkbox id="devops" />
                <span>DevOps</span>
              </label>
              <label className="flex items-center gap-2">
                <Checkbox id="mobile" />
                <span>Mobile</span>
              </label>
            </div>
          </div>

          <div>
            <h2 className="font-semibold mb-2">Difficulty</h2>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <Checkbox id="beginner" />
                <span>Beginner</span>
              </label>
              <label className="flex items-center gap-2">
                <Checkbox id="intermediate" />
                <span>Intermediate</span>
              </label>
              <label className="flex items-center gap-2">
                <Checkbox id="advanced" />
                <span>Advanced</span>
              </label>
            </div>
          </div>
        </aside>

        {/* Search results */}
        <section className="flex-1 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SAMPLE_HUBS.map((hub, index) => (
            <motion.div
              key={hub.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="bg-[#161b22] border border-gray-700 text-white">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{hub.title}</CardTitle>
                      <CardDescription className="text-gray-400">
                        {hub.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2 mb-4">
                    <Badge className="bg-gray-700 text-white">
                      {hub.category}
                    </Badge>
                    <Badge variant="outline">{hub.difficulty}</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {hub.users.toLocaleString()} active learners
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </section>
      </div>
    </motion.div>
  );
}
