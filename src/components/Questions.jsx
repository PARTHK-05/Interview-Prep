import React, { useState, useEffect } from "react";
import { textToSpeech } from "../utils/speechToText";
import ProgressBar from "./ProgressBar";

const Questions = () => {
  const questions = [
    "What is your name?",
    "Tell me about yourself.",
    "Why do you want this job?",
    "What are your strengths and weaknesses?",
    "Where do you see yourself in five years?",
    "Do you have any questions for us?",
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    textToSpeech(questions[currentQuestionIndex]);
  }, [currentQuestionIndex]);

  const repeat = () => {
    textToSpeech(questions[currentQuestionIndex]);
  };

  const nextQuestion = () => {
    setCurrentQuestionIndex((prev) => Math.min(questions.length - 1, prev + 1));
  };

  const prevQuestion = () => {
    setCurrentQuestionIndex((prev) => Math.max(0, prev - 1));
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-full gap-5">
      <div className="w-full h-[40%] bg-gray-50 rounded-2xl shadow-md flex justify-evenly items-center flex-col gap-2 border border-gray-300 p-5">
        <div className="w-full flex justify-between items-center px-5">
          <h1 className="font-bold text-3xl text-blue-700">
            Question {currentQuestionIndex + 1}/{questions.length}
          </h1>
          <button
            onClick={repeat}
            className="px-4 py-1 border-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition duration-200"
          >
            Repeat
          </button>
        </div>

        <div className="w-full text-2xl text-left p-5 text-gray-800">
          {questions[currentQuestionIndex]}
        </div>
      </div>

      <div className="w-full h-[60%] rounded-xl flex flex-col justify-center items-center gap-5">
        <ProgressBar
          currentQuestionIndex={currentQuestionIndex}
          totalQuestions={questions.length}
        />

        <div className="flex gap-4">
          <button
            onClick={prevQuestion}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Previous
          </button>
          <button
            onClick={nextQuestion}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Questions;
