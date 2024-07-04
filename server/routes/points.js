

const express = require("express");
const router = express.Router();

router.post("/allocate-points", async (req, res) => {
  const { userId, points } = req.body;
  try {
    
    res.status(200).json({ message: `Allocated ${points} points to user ${userId}` });
  } catch (error) {
    console.error("Error allocating points:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
