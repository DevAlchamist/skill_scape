interface LearningContentProps {
  data: {
    modules: Array<{
      name: string;
      topics: Array<{
        name: string;
        content: string;
      }>;
    }>;
  };
  section: string;
}

const LearningContent = ({ data, section }: LearningContentProps) => {
  // Find the selected module or topic
  const selectedModule = data?.modules.find(
    (module) => module.name === section || module.topics.some((topic) => topic.name === section)
  );

  if (!selectedModule) {
    return <div className="text-center text-muted-foreground py-10">Select a module or topic to get started.</div>;
  }

  const isModuleLevel = selectedModule.name === section;

  return (
    <div className="space-y-6 max-w-4xl mx-auto px-4">
      <h2 className="text-2xl font-bold text-primary">{selectedModule.name}</h2>

      {isModuleLevel ? (
        // Show all topics of the selected module
        selectedModule.topics.map((topic, idx) => (
          <div key={idx} className="bg-muted/10 p-4 rounded-md">
            <h3 className="text-lg font-semibold text-blue-600">{topic.name}</h3>
            <p className="text-muted-foreground text-sm">{topic.content}</p>
          </div>
        ))
      ) : (
        // Show only the selected topic
        selectedModule.topics
          .filter((topic) => topic.name === section)
          .map((topic, idx) => (
            <div key={idx} className="bg-muted/10 p-4 rounded-md">
              <h3 className="text-lg font-semibold text-blue-600">{topic.name}</h3>
              <p className="text-muted-foreground text-sm">{topic.content}</p>
            </div>
          ))
      )}
    </div>
  );
};

export default LearningContent;
