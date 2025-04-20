"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageCircle, Users, BookOpen, Clock } from "lucide-react";

const SAMPLE_MENTEES = [
  {
    id: 1,
    name: "John Smith",
    hub: "Web Development Mastery",
    progress: 65,
    lastActive: "2 hours ago",
    status: "active",
  },
  {
    id: 2,
    name: "Emma Wilson",
    hub: "Data Science Fundamentals",
    progress: 42,
    lastActive: "1 day ago",
    status: "stuck",
  },
];

const SAMPLE_REQUESTS = [
  {
    id: 1,
    name: "Alice Brown",
    hub: "Machine Learning Basics",
    message: "Looking for guidance in neural networks and deep learning concepts.",
    date: "2024-03-20",
  },
];

export default function MentorDashboard() {
  const [activeTab, setActiveTab] = useState("mentees");

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Mentor Dashboard</h1>
          <p className="text-muted-foreground mt-2">Guide and support your mentees</p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline">
            <Clock className="mr-2 h-4 w-4" />
            Schedule Session
          </Button>
          <Button>
            <Users className="mr-2 h-4 w-4" />
            View Requests
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Mentees</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Sessions</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">48</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Learning Hubs</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Messages</CardTitle>
            <MessageCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="mentees">Current Mentees</TabsTrigger>
          <TabsTrigger value="requests">Mentorship Requests</TabsTrigger>
        </TabsList>
        <TabsContent value="mentees" className="space-y-4">
          {SAMPLE_MENTEES.map((mentee) => (
            <Card key={mentee.id}>
              <CardContent className="flex items-center justify-between p-6">
                <div className="space-y-2">
                  <h3 className="font-semibold">{mentee.name}</h3>
                  <p className="text-sm text-muted-foreground">{mentee.hub}</p>
                  <div className="flex items-center gap-2">
                    <Badge variant={mentee.status === "active" ? "default" : "destructive"}>
                      {mentee.status === "active" ? "Active" : "Needs Help"}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      Last active: {mentee.lastActive}
                    </span>
                  </div>
                </div>
                <div className="space-y-4 min-w-[200px]">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Progress</span>
                      <span>{mentee.progress}%</span>
                    </div>
                    <Progress value={mentee.progress} />
                  </div>
                  <Button variant="outline" className="w-full">View Details</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        <TabsContent value="requests" className="space-y-4">
          {SAMPLE_REQUESTS.map((request) => (
            <Card key={request.id}>
              <CardContent className="flex items-center justify-between p-6">
                <div className="space-y-2">
                  <h3 className="font-semibold">{request.name}</h3>
                  <p className="text-sm text-muted-foreground">{request.hub}</p>
                  <p className="text-sm">{request.message}</p>
                  <p className="text-sm text-muted-foreground">Requested on: {request.date}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <Button>Accept</Button>
                  <Button variant="outline">Decline</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}