import express from "express";
import { update, deleteUser,getUserPoints, subscribe, getUser, unsubscribe, like, dislike  } from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";
import User from "../models/User.js";

const router = express.Router();

//update user
router.put("/:id", verifyToken, update)


//delete user
router.delete("/:id", verifyToken, deleteUser)



//get a user
router.get("/find/:id", getUser)

router.get("/points", verifyToken, getUserPoints);


//subscribe a user
router.put("/sub/:id", verifyToken, subscribe)

//unsubscribe a user
router.put("/unsub/:id", verifyToken, unsubscribe)


//like a vieo
router.put("/like/:videoId",verifyToken, like)

router.put('/:id/points', async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) return res.status(404).json('User not found');
  
      user.points += 5; // Add 5 points for watching a video
      const updatedUser = await user.save();
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  });


//dislike a video
router.put("/dislike/:videoId", verifyToken, dislike)

export default router;