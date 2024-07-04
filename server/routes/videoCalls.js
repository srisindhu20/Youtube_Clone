// routes/videoCalls.js (Backend)

const express = require("express");
const router = express.Router();

// Simulating video call availability time
const isVideoCallEnabled = () => {
  const now = new Date();
  const hours = now.getHours();
  return hours >= 18 && hours < 24; // Enable video calls between 6 PM to 12 AM
};

router.post("/video-call/initiate", async (req, res) => {
  const { callerId, calleeId } = req.body;
  if (!isVideoCallEnabled()) {
    return res.status(403).json({ error: "Video calls are not available at this time" });
  }
  try {
    // Logic to initiate a video call
    res.status(200).json({ message: `Initiated video call from ${callerId} to ${calleeId}` });
  } catch (error) {
    console.error("Error initiating video call:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/video-call/end", async (req, res) => {
  const { callerId, calleeId } = req.body;
  try {
    // Logic to end a video call
    res.status(200).json({ message: `Ended video call between ${callerId} and ${calleeId}` });
  } catch (error) {
    console.error("Error ending video call:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
