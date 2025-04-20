"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter, Star, BookOpen, Users, Award } from "lucide-react";

const SAMPLE_USERS = [
  {
    id: 1,
    name: "David Chen",
    expertise: ["React", "Node.js", "TypeScript"],
    contributions: 156,
    rating: 4.8,
    hubs: 12,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    expertise: ["Python", "Machine Learning", "Data Science"],
    contributions: 89,
    rating: 4.6,
    hubs: 8,
  },
];

const SAMPLE_HUBS = [
  {
    id: 1,
    title: "Advanced Machine Learning",
    author: "Dr. Emily White",
    quality: 98,
    learners: 1234,
    rating: 4.9,
  },
];

export default function ResearcherPanel() {
  const [activeTab, setActiveTab] = useState("users");

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Researcher Panel</h1>
          <p className="text-muted-foreground mt-2">Analyze user data and learning patterns</p>
        </div>
        <Button>Generate Report</Button>
      </div>

      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,456</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Learning Hubs</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">189</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Rating</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.7</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Certifications</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">856</div>
          </CardContent>
        </Card>
      </div>

      <div className="flex gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input className="pl-10" placeholder="Search users or hubs..." />
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filters
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="hubs">Learning Hubs</TabsTrigger>
        </TabsList>
        <TabsContent value="users" className="space-y-4">
          {SAMPLE_USERS.map((user) => (
            <Card key={user.id}>
              <CardContent className="flex items-center justify-between p-6">
                <div className="space-y-2">
                  <h3 className="font-semibold">{user.name}</h3>
                  <div className="flex gap-2">
                    {user.expertise.map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{user.contributions} contributions</span>
                    <span>{user.hubs} hubs created</span>
                    <span>{user.rating} rating</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline">View Profile</Button>
                  <Button>Recommend</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        <TabsContent value="hubs" className="space-y-4">
          {SAMPLE_HUBS.map((hub) => (
            <Card key={hub.id}>
              <CardContent className="flex items-center justify-between p-6">
                <div className="space-y-2">
                  <h3 className="font-semibold">{hub.title}</h3>
                  <p className="text-sm text-muted-foreground">Created by {hub.author}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>Quality Score: {hub.quality}%</span>
                    <span>{hub.learners} active learners</span>
                    <span>{hub.rating} rating</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline">View Details</Button>
                  <Button>Feature</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}