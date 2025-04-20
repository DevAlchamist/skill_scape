"use client";
import { useState, useEffect, useRef } from "react";

const VoiceInterviewPage = () => {
  const [transcription, setTranscription] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);

  const recognitionRef = useRef<SpeechRecognition | null>(null);

  const questions: string[] = [
    "Tell me about yourself.",
    "Why do you want to join this company?",
    "What are your strengths and weaknesses?",
    "Describe a challenge you faced and how you overcame it.",
  ];

  const question = questions[questionIndex];

  useEffect(() => {
    if (typeof window !== "undefined") {
      const SpeechRecognition =
        (window as any).SpeechRecognition ||
        (window as any).webkitSpeechRecognition;

      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = "en-US";

        recognition.onresult = (event: SpeechRecognitionEvent) => {
          const currentTranscript = Array.from(event.results)
            .map((result) => result[0].transcript)
            .join("");
          setTranscription(currentTranscript);
        };

        recognition.onerror = (event: any) => {
          console.error("Speech recognition error:", event.error);
        };

        recognitionRef.current = recognition;
      } else {
        console.warn("SpeechRecognition is not supported in this browser.");
      }
    }
  }, []);

  const startListening = () => {
    const recognition = recognitionRef.current;
    if (recognition && !isListening) {
      setIsListening(true);
      recognition.start();
    }
  };

  const stopListening = () => {
    const recognition = recognitionRef.current;
    if (recognition && isListening) {
      setIsListening(false);
      recognition.stop();
    }
  };

  const handleAnswerSubmit = () => {
    alert(`Your answer: ${transcription}`);
    setQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
    setTranscription(""); // Clear answer for next question
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-200 font-mono flex items-center justify-center px-4">
      <div className="bg-[#161b22] border border-[#30363d] rounded-xl shadow-xl w-full max-w-3xl p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">
          🎙️ Voice Interview
        </h1>

        <p className="text-center text-gray-400 text-sm mb-10">
          Answer the question by speaking into your mic.
        </p>

        <div className="mb-8">
          <h2 className="text-lg font-semibold text-white">🧠 Question:</h2>
          <p className="text-base text-gray-300 mt-2">{question}</p>
        </div>

        <div className="flex justify-center mb-6">
          <button
            className={`px-6 py-3 rounded-md text-sm font-semibold transition-all duration-300 ${
              isListening
                ? "bg-red-600 hover:bg-red-700"
                : "bg-green-600 hover:bg-green-700"
            }`}
            onClick={isListening ? stopListening : startListening}
          >
            {isListening ? "🔴 Stop Listening" : "🎤 Start Speaking"}
          </button>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold text-white">📝 Your Answer:</h2>
          <textarea
            className="w-full h-32 mt-2 bg-[#0d1117] border border-[#30363d] p-3 rounded-md text-sm text-gray-200 resize-none focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={transcription}
            readOnly
            placeholder="Your transcribed answer will appear here..."
          />
        </div>

        <div className="flex justify-center">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-sm font-semibold transition-all duration-300"
            onClick={handleAnswerSubmit}
          >
            ✅ Submit Answer
          </button>
        </div>

        <p className="text-center text-xs text-gray-500 mt-8">
          Click "Submit Answer" to go to the next question.
        </p>
      </div>
    </div>
  );
};

export default VoiceInterviewPage;
