"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Book,
  GitFork,
  Star,
  Users,
  Clock,
  Bookmark,
  VideoIcon,
} from "lucide-react";
import Sidebar from "@/components/sideBar_nav";
import LearningContent from "@/components/prevNext_nav";
import { usePathname } from "next/navigation";
import { useHubStore } from "@/store/hubStore";

export default function RepoPage() {
  const [selectedSection, setSelectedSection] = useState("");
  const pathname = usePathname();

  const getSlugFromPath = (path: string) => {
    const parts = path.split("/");
    return parts[parts.length - 1] || null;
  };
  const slugId = getSlugFromPath(pathname);

  const { selectedHub, fetchHubById, loading, error }: any = useHubStore();

  useEffect(() => {
    fetchHubById(slugId);
  }, []);

  if (loading) return <p className="text-center py-10">Loading hubs...</p>;
  if (error)
    return <p className="text-red-500 text-center py-10">Error: {error}</p>;

  const topicData = selectedHub?.[0];

  return (
    <div className="px-4 py-8  ">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="rounded-lg mb-10 p-6 border shadow-sm"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-muted rounded-lg">
              <Book className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold mb-1">{topicData?.title}</h1>
              <p className="text-muted-foreground">{topicData?.description}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Bookmark className="mr-2 h-4 w-4" />
              Watch
            </Button>
            <Button variant="outline">
              <Star className="mr-2 h-4 w-4" />
              Star
            </Button>
            <Button variant="outline">
              <GitFork className="mr-2 h-4 w-4" />
              Fork
            </Button>
          </div>
        </div>

        <div className="flex gap-6 text-sm text-muted-foreground mt-4">
          <div className="flex items-center">
            <Star className="mr-2 h-4 w-4" />
            <span className="font-semibold">5</span> stars
          </div>
          <div className="flex items-center">
            <GitFork className="mr-2 h-4 w-4" />
            <span className="font-semibold">5</span> forks
          </div>
          <div className="flex items-center">
            <Users className="mr-2 h-4 w-4" />
            <span className="font-semibold">1.2k</span> learners
          </div>
        </div>
      </motion.div>

      {/* MAIN CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* LEFT - Sidebar + LearningContent */}
        <div className="lg:col-span-9 flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-64">
            <Sidebar
              data={topicData?.aiContent}
              selectedSection={selectedSection}
              setSelectedSection={setSelectedSection}
            />
          </div>
          <main className="flex-1">
            <LearningContent
              data={topicData?.aiContent}
              section={selectedSection}
            />
          </main>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="lg:col-span-3"
        >
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle className="text-lg">Resources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {topicData?.aiContent.modules[0].resources === 0 ? (
                <p className="text-sm text-muted-foreground">
                  No resources available.
                </p>
              ) : (
                topicData?.aiContent.modules[0].resources.map(
                  (res: any, idx: any) => (
                    <a
                      key={idx}
                      href={res.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start space-x-3 hover:bg-muted/50 p-2 rounded-md transition"
                    >
                      <VideoIcon className="h-5 w-5 text-blue-500 mt-1" />
                      <span className="text-sm text-blue-600 underline">
                        {res.title}
                      </span>
                    </a>
                  )
                )
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
