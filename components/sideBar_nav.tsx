import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Book, Laptop } from "lucide-react";

interface SidebarProps {
  data: {
    modules: Array<{
      name: string;
      topics: Array<{
        name: string;
      }>;
    }>;
  };
  selectedSection: string;
  setSelectedSection: (section: string) => void;
}

const Sidebar = ({ data, selectedSection, setSelectedSection }: SidebarProps) => {
  return (
    <aside className="w-full sm:w-64 border-r border-muted shadow-sm bg-background">
      <ScrollArea className="h-full p-4">
        <nav className="space-y-4">
          {data?.modules.map((module, moduleIndex) => (
            <div key={moduleIndex}>
              <button
                onClick={() => setSelectedSection(module.name)}
                className={cn(
                  "w-full text-left px-3 py-2 rounded-md font-semibold flex items-center gap-3 text-sm transition",
                  selectedSection === module.name
                    ? "bg-primary/10 text-primary"
                    : "hover:bg-muted text-muted-foreground"
                )}
              >
                <Book size={18} />
                {module.name}
              </button>

              <div className="ml-6 space-y-1 mt-2">
                {module.topics.map((topic, topicIndex) => (
                  <button
                    key={topicIndex}
                    onClick={() => setSelectedSection(topic.name)}
                    className={cn(
                      "w-full text-left px-3 py-1.5 rounded-md flex items-center gap-3 text-sm font-medium transition",
                      selectedSection === topic.name
                        ? "bg-blue-100 text-blue-600"
                        : "hover:bg-muted text-muted-foreground"
                    )}
                  >
                    <Laptop size={16} />
                    {topic.name}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </ScrollArea>
    </aside>
  );
};

export default Sidebar;
