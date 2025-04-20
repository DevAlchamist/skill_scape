"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Trophy, Book, Clock, Target } from "lucide-react";
import Image from "next/image";

// Animation for smooth loading
const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
    },
  }),
};

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-10">
      {/* Profile Section */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex items-center gap-4">
          <Image
            src="/avatars/shubhanshu.png"
            alt="User Avatar"
            width={80}
            height={80}
            className="rounded-full"
          />
          <div>
            <h1 className="text-2xl font-bold">Shubhanshu Nayak</h1>
            <p className="text-muted-foreground text-sm">Full Stack Learner 🚀 | Exploring Dev & Beyond</p>
            <div className="flex gap-2 mt-2">
              <Button variant="outline" size="sm">Edit Profile</Button>
              <Button size="sm">Share</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Active Hubs", value: 4, icon: <Book className="h-4 w-4 text-muted-foreground" /> },
          { title: "Hours Learned", value: "32.5", icon: <Clock className="h-4 w-4 text-muted-foreground" /> },
          { title: "Achievements", value: 12, icon: <Trophy className="h-4 w-4 text-muted-foreground" /> },
          { title: "Goals Met", value: 8, icon: <Target className="h-4 w-4 text-muted-foreground" /> },
        ].map((card, i) => (
          <motion.div
            key={card.title}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={cardVariant}
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
                {card.icon}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{card.value}</div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Current Learning Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Current Learning</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Web Development Mastery</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Progress</span>
                    <span>65%</span>
                  </div>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8 }}
                  >
                    <Progress value={65} />
                  </motion.div>
                </div>
                <Button size="sm">Continue Learning</Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* User Hubs Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">User Hubs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "React Essentials", description: "Learn the basics of React.js." },
            { name: "Next.js Advanced", description: "Dive deeper into Next.js for production-ready applications." },
            { name: "TailwindCSS Mastery", description: "Master utility-first CSS with Tailwind." },
            { name: "Node.js API Design", description: "Build scalable and efficient REST APIs with Node.js." },
          ].map((hub, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-700 transition duration-200"
            >
              <h3 className="text-lg font-semibold">{hub.name}</h3>
              <p className="text-sm text-muted-foreground">{hub.description}</p>
              <Button variant="outline" size="sm" className="mt-4 w-full">
                View Hub
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
