export const startSpeechToText = (onTranscript) => {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = "en-US";
  recognition.continuous = true;
  recognition.interimResults = false;

  recognition.onresult = (event) => {
      const transcript = event.results[event.results.length - 1][0].transcript;
      console.log("Detected Speech:", transcript);
      onTranscript(transcript);
  };

  recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
  };

  recognition.start();
  return recognition; // Return to stop later if needed
};


export const textToSpeech = (text) => {
  if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US"; // Set language
      speechSynthesis.speak(utterance);
  } else {
      console.error("Text-to-Speech is not supported in this browser.");
  }
};