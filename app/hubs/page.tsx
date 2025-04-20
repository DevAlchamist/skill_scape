"use client";
import { Button } from "@/components/ui/button";
import { Github, Plus } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const HubsPage = () => {
  const [hubs, setHubs] = useState([
    {
      id: 1,
      name: "React",
      description:
        "React.js - A JavaScript library for building user interfaces.",
    },
    {
      id: 2,
      name: "Next.js",
      description: "Next.js - A React framework for production.",
    },
    {
      id: 3,
      name: "TailwindCSS",
      description: "TailwindCSS - A utility-first CSS framework.",
    },
  ]);

  const handleCreateHub = () => {
    // Logic for creating a new hub (this could open a modal or navigate to a new page)
    alert("Create a new hub!");
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 p-6">
        <div className=" space-b-6">
          <Link
            href="/create"
            className="w-full py-2 px-4 bg-blue-600 rounded-md hover:bg-blue-700 transition duration-200"
            onClick={handleCreateHub}
          >
            <Plus size={20} className="inline mr-2" />
            Create Hub
          </Link>

          <div className="mt-6 text-sm font-medium text-gray-400">Explore</div>
          <ul className="space-y-2 mt-4">
            <li>
              <a href="#" className="hover:text-gray-300">
                All Hubs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Trending
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                New Hubs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                My Contributions
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-semibold mb-6">Forked Hubs</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {hubs.map((hub) => (
            <div
              key={hub.id}
              className="bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-700 transition duration-200"
            >
              <h2 className="text-xl font-semibold mb-2">{hub.name}</h2>
              <p className="text-gray-400 text-sm">{hub.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HubsPage;
