"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const DynamicContent = () => {
    const data = {
        overview: {
          title: "Learning Path for Python Programming",
          description:
            "This personalized learning path is designed for someone with beginner level expertise in Python Programming, with 2 hours per week available to dedicate to learning. The focus will be on fundamental concepts and basic applications of Python Programming.",
          benefits: [
            "Structured approach to learning Python Programming",
            "Resources matched to your beginner level",
            "Optimized for your 2 hours per week time commitment",
            "Diverse learning materials (videos, articles, courses, community resources)",
          ],
          expertise_level: "beginner",
          time_commitment: "2 hours per week",
        },
        starting_tips: {
          learning_tips: [
            "Start with foundational concepts before advancing",
            "Practice regularly with simple exercises",
            "Don't be afraid to consult multiple resources for clarity",
            "Join online communities to ask questions",
          ],
          system_requirements: {
            hardware: "Computer with at least 8GB RAM and 10GB free storage",
            software: "Text editor or IDE suitable for Python Programming",
            downloads: [
              "Python 3.x from python.org",
              "Anaconda distribution (recommended for data science)",
              "Visual Studio Code or PyCharm IDE",
            ],
          },
        },
        resources: [
          {
            title:
              "How you can start python programming in less than a week 95311e57e9bc",
            description: "Description not available with free search",
            link: "https://medium.com/faun/how-you-can-start-python-programming-in-less-than-a-week-95311e57e9bc",
            recommended_level: "Beginner",
            source_type: "blogs",
            source_platform: "google",
          },
          {
            title: "How i mastered python basics in just a week 29311d56bf55",
            description: "Description not available with free search",
            link: "https://medium.com/python-in-plain-english/how-i-mastered-python-basics-in-just-a-week-29311d56bf55",
            recommended_level: "Advanced",
            source_type: "blogs",
            source_platform: "google",
          },
          {
            title:
              "5 tips for learning python by self study as a beginner 9156f5caf410",
            description: "Description not available with free search",
            link: "https://medium.com/@reply2muskan/5-tips-for-learning-python-by-self-study-as-a-beginner-9156f5caf410",
            recommended_level: "Beginner",
            source_type: "blogs",
            source_platform: "google",
          },
          {
            title: "Effective way to learn python in a short time 164d9c11c33a",
            description: "Description not available with free search",
            link: "https://medium.com/data-science/effective-way-to-learn-python-in-a-short-time-164d9c11c33a",
            recommended_level: "Intermediate",
            source_type: "blogs",
            source_platform: "google",
          },
          {
            title: "How i would learn python in 2024 and beyond 67e90ebcd391",
            description: "Description not available with free search",
            link: "https://medium.com/@subhayang/how-i-would-learn-python-in-2024-and-beyond-67e90ebcd391",
            recommended_level: "Intermediate",
            source_type: "blogs",
            source_platform: "google",
          },
          {
            title:
              "Nothing",
            description: "Description not available with free search",
            link: "https://www.udemy.com/course/python-complete-course-for-beginners/?srsltid=AfmBOopikpV551URovm7yJBrx6SZxwqYfj3mF2ws50dLruW6TNFC2-QX",
            recommended_level: "Intermediate",
            source_type: "courses",
            source_platform: "google",
          },
          {
            title: "Courses",
            description: "Description not available with free search",
            link: "https://www.coursera.org/courses?query=python&productDifficultyLevel=Beginner",
            recommended_level: "Beginner",
            source_type: "courses",
            source_platform: "google",
          },
          {
            title: "Python basics",
            description: "Description not available with free search",
            link: "https://www.coursera.org/learn/python-basics",
            recommended_level: "Beginner",
            source_type: "courses",
            source_platform: "google",
          },
          {
            title:
              "Google",
            description: "Description not available with free search",
            link: "https://www.udemy.com/course/learn-python-with-abdul-bari/?srsltid=AfmBOora9936EK-vSIxIaqMugK_EwNXe3TZDKJxX3_UfThgAGI09uHDD",
            recommended_level: "Intermediate",
            source_type: "courses",
            source_platform: "google",
          },
          {
            title:
              "Description",
            description: "Description not available with free search",
            link: "https://www.udemy.com/topic/python/?srsltid=AfmBOoo1uYdr3zKd09fUe7OnXeHFQgIjKXQttBdW8xg2Lbxr3JelnDD3",
            recommended_level: "Intermediate",
            source_type: "courses",
            source_platform: "google",
          },
          {
            title: "",
            description: "Description not available with free search",
            link: "https://www.reddit.com/r/learnpython/comments/10k55u9/best_resources_to_study_python/",
            recommended_level: "Intermediate",
            source_type: "reddit",
            source_platform: "google",
          },
          {
            title: "",
            description: "Description not available with free search",
            link: "https://www.reddit.com/r/PythonLearning/comments/1e9li4s/resources_to_learn_python/",
            recommended_level: "Intermediate",
            source_type: "reddit",
            source_platform: "google",
          },
          {
            title: "",
            description: "Description not available with free search",
            link: "https://www.reddit.com/r/learnpython/comments/1hg833a/which_is_th_best_resource_to_learn_python/",
            recommended_level: "Intermediate",
            source_type: "reddit",
            source_platform: "google",
          },
          {
            title: "",
            description: "Description not available with free search",
            link: "https://www.reddit.com/r/learnpython/comments/156hdib/resources_for_learning_python_for_someone_who/",
            recommended_level: "Intermediate",
            source_type: "reddit",
            source_platform: "google",
          },
          {
            title: "",
            description: "Description not available with free search",
            link: "https://www.reddit.com/r/learnpython/comments/12c41pz/what_are_the_best_online_resources_for_learning/",
            recommended_level: "Intermediate",
            source_type: "reddit",
            source_platform: "google",
          },
          {
            title: "Python for Beginners - Learn Coding with Python in 1 Hour",
            description:
              "Learn Python basics in just 1 hour! Perfect for beginners interested in AI and coding. \u26a1 Plus, get 6 months of PyCharm FREE with ...",
            link: "https://www.youtube.com/watch?v=kqtD5dpn9C8",
            recommended_level: "Beginner",
            source_type: "youtube",
            source_platform: "youtube",
            channel: "Programming with Mosh",
            thumbnail: "https://i.ytimg.com/vi/kqtD5dpn9C8/default.jpg",
          },
          {
            title: "Python Full Course for Beginners [2025]",
            description:
              "Master Python from scratch No fluff\u2014just clear, practical coding skills to kickstart your journey! \u2764\ufe0f Join this channel to get ...",
            link: "https://www.youtube.com/watch?v=K5KVEU3aaeQ",
            recommended_level: "Advanced",
            source_type: "youtube",
            source_platform: "youtube",
            channel: "Programming with Mosh",
            thumbnail: "https://i.ytimg.com/vi/K5KVEU3aaeQ/default.jpg",
          },
          {
            title: "Fastest way to learn Python #coding #python #programming",
            description:
              "Fastest way to learn Python . \u2763\ufe0f Save for later and subscribe for more! . For more content like this: ...",
            link: "https://www.youtube.com/watch?v=Sl4zqWLC9Xw",
            recommended_level: "Intermediate",
            source_type: "youtube",
            source_platform: "youtube",
            channel: "Sahil & Sarra",
            thumbnail: "https://i.ytimg.com/vi/Sl4zqWLC9Xw/default.jpg",
          },
          {
            title: "Learn Python for FREE in 2025",
            description:
              "Learn Python for FREE in 2025 #coding #compsci #python #fyp Source: TikTok (individualkex)",
            link: "https://www.youtube.com/watch?v=q2-pnQffZik",
            recommended_level: "Intermediate",
            source_type: "youtube",
            source_platform: "youtube",
            channel: "Sajjaad Khader",
            thumbnail: "https://i.ytimg.com/vi/q2-pnQffZik/default.jpg",
          },
          {
            title:
              "15 Minute Python Tutorial For Beginners In Hindi (Full &amp; Complete Python Crash Course)",
            description:
              "Source Code - https://archive.codewithharry.com/videos/learn-python-in-one-video-in-15-min-hindi \u25bbClick here to subscribe ...",
            link: "https://www.youtube.com/watch?v=fr1f84rg4Nw",
            recommended_level: "Beginner",
            source_type: "youtube",
            source_platform: "youtube",
            channel: "CodeWithHarry",
            thumbnail: "https://i.ytimg.com/vi/fr1f84rg4Nw/default.jpg",
          },
        ],
        learning_path: [
          {
            section: "Foundational Learning",
            description:
              "Start with these beginner-level resources to build your knowledge base",
            resources: [
              {
                title:
                  "How you can start python programming in less than a week 95311e57e9bc",
                description: "Description not available with free search",
                link: "https://medium.com/faun/how-you-can-start-python-programming-in-less-than-a-week-95311e57e9bc",
                recommended_level: "Beginner",
                source_type: "blogs",
                source_platform: "google",
              },
              {
                title:
                  "5 tips for learning python by self study as a beginner 9156f5caf410",
                description: "Description not available with free search",
                link: "https://medium.com/@reply2muskan/5-tips-for-learning-python-by-self-study-as-a-beginner-9156f5caf410",
                recommended_level: "Beginner",
                source_type: "blogs",
                source_platform: "google",
              },
              {
                title: "Courses",
                description: "Description not available with free search",
                link: "https://www.coursera.org/courses?query=python&productDifficultyLevel=Beginner",
                recommended_level: "Beginner",
                source_type: "courses",
                source_platform: "google",
              },
            ],
          },
          {
            section: "Video Tutorials",
            description: "Visual learning resources to help understand concepts",
            resources: [
              {
                title: "Python for Beginners - Learn Coding with Python in 1 Hour",
                description:
                  "Learn Python basics in just 1 hour! Perfect for beginners interested in AI and coding. \u26a1 Plus, get 6 months of PyCharm FREE with ...",
                link: "https://www.youtube.com/watch?v=kqtD5dpn9C8",
                recommended_level: "Beginner",
                source_type: "youtube",
                source_platform: "youtube",
                channel: "Programming with Mosh",
                thumbnail: "https://i.ytimg.com/vi/kqtD5dpn9C8/default.jpg",
              },
              {
                title: "Fastest way to learn Python #coding #python #programming",
                description:
                  "Fastest way to learn Python . \u2763\ufe0f Save for later and subscribe for more! . For more content like this: ...",
                link: "https://www.youtube.com/watch?v=Sl4zqWLC9Xw",
                recommended_level: "Intermediate",
                source_type: "youtube",
                source_platform: "youtube",
                channel: "Sahil & Sarra",
                thumbnail: "https://i.ytimg.com/vi/Sl4zqWLC9Xw/default.jpg",
              },
              {
                title: "Learn Python for FREE in 2025",
                description:
                  "Learn Python for FREE in 2025 #coding #compsci #python #fyp Source: TikTok (individualkex)",
                link: "https://www.youtube.com/watch?v=q2-pnQffZik",
                recommended_level: "Intermediate",
                source_type: "youtube",
                source_platform: "youtube",
                channel: "Sajjaad Khader",
                thumbnail: "https://i.ytimg.com/vi/q2-pnQffZik/default.jpg",
              },
              {
                title:
                  "15 Minute Python Tutorial For Beginners In Hindi (Full &amp; Complete Python Crash Course)",
                description:
                  "Source Code - https://archive.codewithharry.com/videos/learn-python-in-one-video-in-15-min-hindi \u25bbClick here to subscribe ...",
                link: "https://www.youtube.com/watch?v=fr1f84rg4Nw",
                recommended_level: "Beginner",
                source_type: "youtube",
                source_platform: "youtube",
                channel: "CodeWithHarry",
                thumbnail: "https://i.ytimg.com/vi/fr1f84rg4Nw/default.jpg",
              },
            ],
          },
          {
            section: "Articles and Guides",
            description: "In-depth reading materials to expand your knowledge",
            resources: [
              {
                title:
                  "How you can start python programming in less than a week 95311e57e9bc",
                description: "Description not available with free search",
                link: "https://medium.com/faun/how-you-can-start-python-programming-in-less-than-a-week-95311e57e9bc",
                recommended_level: "Beginner",
                source_type: "blogs",
                source_platform: "google",
              },
              {
                title:
                  "5 tips for learning python by self study as a beginner 9156f5caf410",
                description: "Description not available with free search",
                link: "https://medium.com/@reply2muskan/5-tips-for-learning-python-by-self-study-as-a-beginner-9156f5caf410",
                recommended_level: "Beginner",
                source_type: "blogs",
                source_platform: "google",
              },
              {
                title: "Effective way to learn python in a short time 164d9c11c33a",
                description: "Description not available with free search",
                link: "https://medium.com/data-science/effective-way-to-learn-python-in-a-short-time-164d9c11c33a",
                recommended_level: "Intermediate",
                source_type: "blogs",
                source_platform: "google",
              },
              {
                title: "How i would learn python in 2024 and beyond 67e90ebcd391",
                description: "Description not available with free search",
                link: "https://medium.com/@subhayang/how-i-would-learn-python-in-2024-and-beyond-67e90ebcd391",
                recommended_level: "Intermediate",
                source_type: "blogs",
                source_platform: "google",
              },
            ],
          },
          {
            section: "Structured Courses",
            description: "Comprehensive courses for systematic learning",
            resources: [
              {
                title:
                  "?srsltid=afmboopikpv551urovm7yjbrx6szxwqyfj3mf2ws50dlruw6tnfc2 qx",
                description: "Description not available with free search",
                link: "https://www.udemy.com/course/python-complete-course-for-beginners/?srsltid=AfmBOopikpV551URovm7yJBrx6SZxwqYfj3mF2ws50dLruW6TNFC2-QX",
                recommended_level: "Intermediate",
                source_type: "courses",
                source_platform: "google",
              },
              {
                title: "Courses?query=python&productdifficultylevel=beginner",
                description: "Description not available with free search",
                link: "https://www.coursera.org/courses?query=python&productDifficultyLevel=Beginner",
                recommended_level: "Beginner",
                source_type: "courses",
                source_platform: "google",
              },
              {
                title: "Python basics",
                description: "Description not available with free search",
                link: "https://www.coursera.org/learn/python-basics",
                recommended_level: "Beginner",
                source_type: "courses",
                source_platform: "google",
              },
            ],
          },
          {
            section: "Further Learning",
            description: "Resources to explore as you advance your skills",
            resources: [
              {
                title: "How i mastered python basics in just a week 29311d56bf55",
                description: "Description not available with free search",
                link: "https://medium.com/python-in-plain-english/how-i-mastered-python-basics-in-just-a-week-29311d56bf55",
                recommended_level: "Advanced",
                source_type: "blogs",
                source_platform: "google",
              },
              {
                title: "Python Full Course for Beginners [2025]",
                description:
                  "Master Python from scratch No fluff\u2014just clear, practical coding skills to kickstart your journey! \u2764\ufe0f Join this channel to get ...",
                link: "https://www.youtube.com/watch?v=K5KVEU3aaeQ",
                recommended_level: "Advanced",
                source_type: "youtube",
                source_platform: "youtube",
                channel: "Programming with Mosh",
                thumbnail: "https://i.ytimg.com/vi/K5KVEU3aaeQ/default.jpg",
              },
            ],
          },
        ],
        follow_up_procedure: {
          steps: [
            "Start with the Foundational Learning resources to build core knowledge",
            "Move through the Video Tutorials and Articles sections at your own pace",
            "Apply what you've learned through hands-on practice after each resource",
            "Consider enrolling in one of the Structured Courses for comprehensive learning",
            "Join community forums or discussion groups to ask questions and share progress",
            "Revisit resources as needed and track your progress",
            "Explore the Further Learning section once you've mastered the basics",
          ],
          success_metrics: [
            "Ability to explain core concepts to others",
            "Completion of practical projects applying the knowledge",
            "Confidence in solving problems related to the topic",
            "Creation of your own learning resources or contributions to the community",
          ],
        },
      };
  const renderContent = (content: any) => {
    if (!content) return null;

    if (typeof content === "string") {
      return <p className="text-muted-foreground text-base">{content}</p>;
    }

    if (Array.isArray(content)) {
      return (
        <ul className="list-disc pl-6 space-y-2">
          {content.map((item, idx) => (
            <li key={idx}>{renderContent(item)}</li>
          ))}
        </ul>
      );
    }

    if (typeof content === "object") {
      // Resource Object
      if ("title" in content && "link" in content) {
        return (
          <Card className="bg-muted/40 border border-muted rounded-xl p-4 hover:shadow-lg transition-all">
            <CardContent className="space-y-1 p-0">
              <a
                href={content.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-lg font-medium flex items-center gap-2 hover:underline"
              >
                {content.title}
                <ExternalLink className="w-4 h-4" />
              </a>
              {content.description && (
                <p className="text-muted-foreground text-sm">{content.description}</p>
              )}
              {content.recommended_level && (
                <p className="text-xs text-foreground/60 italic">
                  Level: {content.recommended_level}
                </p>
              )}
            </CardContent>
          </Card>
        );
      }

      return (
        <div className="space-y-4">
          {Object.entries(content).map(([key, value], idx) => (
            <div key={idx} className="space-y-1">
              <h4 className="text-lg font-semibold capitalize">{key.replace(/_/g, " ")}</h4>
              {renderContent(value)}
            </div>
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 space-y-6">
      <Accordion type="multiple" className="w-full space-y-4">
        {Object.entries(data).map(([sectionTitle, sectionData], idx) => (
          <AccordionItem
            key={idx}
            value={`section-${idx}`}
            className="border border-border rounded-xl bg-card shadow-sm"
          >
            <AccordionTrigger className="text-xl font-bold px-4 py-3 hover:no-underline">
              {sectionTitle.replace(/_/g, " ")}
            </AccordionTrigger>
            <AccordionContent className="p-4 space-y-4">
              {renderContent(sectionData)}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default DynamicContent;
