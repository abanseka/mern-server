import express from "express";
import {
  getUser,
  getUserFriends,
  addRemoveFriends,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// READ 🔖
router.get("/:id", verifyToken, getUser);
router.get("/:id/freinds", verifyToken, getUserFriends);

// UPDATE 🔖
router.patch("/:id/:freindId", verifyToken, addRemoveFriends);

export default router;
