import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, ThumbsUp, Search } from "lucide-react";

const SAMPLE_DISCUSSIONS = [
  {
    id: 1,
    title: "Tips for learning React hooks?",
    author: "Sarah Chen",
    category: "React",
    replies: 23,
    likes: 45,
    time: "2h ago",
  },
  // Add more sample discussions
];

export default function CommunityPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Community Forum</h1>
        <Button>Start Discussion</Button>
      </div>

      <div className="flex gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input className="pl-10" placeholder="Search discussions..." />
        </div>
      </div>

      <div className="space-y-4">
        {SAMPLE_DISCUSSIONS.map((discussion) => (
          <Card key={discussion.id} className="hover:bg-accent/50 cursor-pointer">
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <div>
                <CardTitle className="text-xl mb-1">{discussion.title}</CardTitle>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{discussion.author}</span>
                  <span>•</span>
                  <span>{discussion.time}</span>
                </div>
              </div>
              <Badge>{discussion.category}</Badge>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <MessageSquare className="h-4 w-4 mr-1" />
                  {discussion.replies} replies
                </div>
                <div className="flex items-center">
                  <ThumbsUp className="h-4 w-4 mr-1" />
                  {discussion.likes} likes
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}