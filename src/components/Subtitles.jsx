import React, { useEffect, useState } from "react";
import { startSpeechToText } from "../utils/speechToText";

const Subtitles = () => {
  const [transcript, setTranscript] = useState("");

  useEffect(() => {
    const recognition = startSpeechToText((newTranscript) => {
      setTranscript(newTranscript);
    });

    return () => {
      if (recognition) {
        recognition.stop();
      }
    };
  }, []);

  return (
    <div className="text-gray-800 text-lg font-semibold p-4 w-full bg-white border border-gray-300 rounded-xl shadow-md overflow-y-auto">
      {transcript || "Listening..."}
    </div>
  );
};

export default Subtitles;