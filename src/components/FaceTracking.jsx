import React, { useRef, useEffect } from "react";
import Webcam from "react-webcam";
import * as tf from "@tensorflow/tfjs";
import * as faceLandmarksDetection from "@tensorflow-models/face-landmarks-detection";
import { startSpeechToText } from "../utils/speechToText";

const FaceTracking = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  let recognition;

  useEffect(() => {
    let animationFrameId;

    const runFaceMesh = async () => {
      try {
        const model = await faceLandmarksDetection.createDetector(
          faceLandmarksDetection.SupportedModels.MediaPipeFaceMesh,
          {
            runtime: "tfjs",
            refineLandmarks: true,
            maxFaces: 1,
          }
        );

        console.log("FaceMesh model loaded successfully");

        const detect = async () => {
          if (
            webcamRef.current &&
            webcamRef.current.video.readyState === 4
          ) {
            const video = webcamRef.current.video;
            const videoWidth = video.videoWidth;
            const videoHeight = video.videoHeight;

            // Set video and canvas dimensions
            webcamRef.current.video.width = videoWidth;
            webcamRef.current.video.height = videoHeight;
            canvasRef.current.width = videoWidth;
            canvasRef.current.height = videoHeight;

            const faces = await model.estimateFaces(video);
            const ctx = canvasRef.current.getContext("2d");
            ctx.clearRect(0, 0, videoWidth, videoHeight);

            if (faces.length > 0) {
              let { xMin, xMax, yMin, yMax } = faces[0].box;
              const margin = 50;
              xMin = Math.max(0, xMin - margin);
              xMax = Math.min(videoWidth, xMax + margin);
              yMin = Math.max(0, yMin - margin);
              yMax = Math.min(videoHeight, yMax + margin);

              // Draw bounding box
              ctx.strokeStyle = "red";
              ctx.lineWidth = 3;
              ctx.strokeRect(xMin, yMin, xMax - xMin, yMax - yMin);

              // Check for out-of-bounds
              if (xMin < videoWidth * 0.05 || xMax > videoWidth * 0.95) {
                alert("You're out of bounds! Please reposition yourself.");
              }
            }
          }
          animationFrameId = requestAnimationFrame(detect);
        };

        detect();
      } catch (error) {
        console.error("Error loading FaceMesh model:", error);
      }
    };

    runFaceMesh();

    recognition = startSpeechToText((transcript) => {
      console.log("Speech Detected:", transcript);
    });

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (recognition) recognition.stop();
    };
  }, []);

  return (
    <div className="relative w-full h-full flex justify-center items-center">
      <Webcam
        ref={webcamRef}
        className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
      />
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full rounded-xl"
      />
    </div>
  );
};

export default FaceTracking;
