"use client";

import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils"; // optional utility to combine classes
import { Plus, PlusCircle } from "lucide-react";
import { useHubStore } from "@/store/hubStore";
import { useEffect } from "react";

export default function LearningHubSidebar() {
  const pathname = usePathname();
  const { hubs, fetchHubs, loading, error } = useHubStore();

  useEffect(() => {
    fetchHubs();
  }, [fetchHubs]);

  if (loading) return <p>Loading hubs...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;
  return (
    <aside className="w-full md:w-64 border-r border-border bg-background">
      <div className="w-full border-b py-1.5 text-center bg-blue-600 hover:bg-blue-700 transition duration-200 border-border">
        <Link href="/create" className="w-full py-2 px-4 ">
          <Plus size={20} className="inline mr-2" />
          Create Hub
        </Link>
      </div>
      <div className="px-4 py-3 border-b border-border">
        <Input placeholder="Find a hub..." className="h-8" />
      </div>

      <ScrollArea className="h-[calc(100vh-3.5rem)]">
        <div className="px-4 pt-4 pb-2 text-xs font-semibold text-muted-foreground">
          LEARNING HUBS
        </div>
        <nav className="px-2 pb-4">
          {hubs.map((hub) => (
            <Link
              key={hub._id}
              href={`/hubs/${hub.slug}`}
              className={cn(
                "block px-3 py-2 text-sm rounded-md",
                pathname === `/hubs/${hub.slug}`
                  ? "bg-muted font-semibold text-foreground"
                  : "hover:bg-muted text-muted-foreground"
              )}
            >
              {hub.title}
            </Link>
          ))}
        </nav>
      </ScrollArea>
    </aside>
  );
}
