import React, { useRef, useEffect } from "react";
const tf = require("@tensorflow/tfjs");
const handTrack = require("handtrackjs");

function HandTracking() {
  const videoRef = useRef();
  const canvasRef = useRef();

  useEffect(() => {
    // Load the model
    handTrack.load().then((model) => {
      // Get the video stream
      navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();

        // Run the model on each video frame
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        model.detect(videoRef.current).then((predictions) => {
          // Render the predicted bounding boxes on the canvas
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          predictions.forEach((prediction) => {
            const [x, y, width, height] = prediction.bbox;
            ctx.strokeStyle = "#00FF00";
            ctx.strokeRect(x, y, width, height);
          });
        });
      });
    });
  }, []);

  return (
    <div>
      <video ref={videoRef} />
      <canvas ref={canvasRef} />
    </div>
  );
}

export default HandTracking;
