// components/SocialFeed.jsx
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";

// Sample data for social posts
const SAMPLE_SOCIAL_POSTS = [
  {
    id: 1,
    user: {
      avatar: "/avatars/shubhanshu.png",
      name: "Shubhanshu Nayak",
      time: "1 hour ago",
    },
    post: "Learning Web Development! 🚀 Excited to dive into React.",
    likes: 45,
    comments: 10,
    shares: 5,
  },
  {
    id: 2,
    user: {
      avatar: "/avatars/pixie.png",
      name: "Pixie",
      time: "2 hours ago",
    },
    post: "Just completed a section on JavaScript! 💡 It feels great!",
    likes: 38,
    comments: 5,
    shares: 3,
  },
];

export default function SocialFeed() {
  return (
    <div className="flex flex-col gap-6 pb-20">
      {SAMPLE_SOCIAL_POSTS.map((post, index) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Card>
            <CardHeader className="flex flex-row items-start gap-4">
              <Image
                src={post.user.avatar}
                alt={post.user.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="flex-1">
                <CardTitle className="text-base">{post.user.name}</CardTitle>
                <CardDescription className="text-xs text-muted-foreground">
                  {post.user.time}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm">{post.post}</p>
              <div className="flex gap-4 text-xs text-muted-foreground">
                <span>{post.likes} Likes</span>
                <span>{post.comments} Comments</span>
                <span>{post.shares} Shares</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
