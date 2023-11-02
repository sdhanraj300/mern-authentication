import express from "express";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

// Import your controller functions here
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/userController.js";

// Authentication Route
router.route("/auth").post(authUser);

// User Registration Route
router.route("/").post(registerUser);

// User Logout Route
router.route("/logout").post(logoutUser);

// User Profile Routes (protected)
router.route("/profile").get(protect, getUserProfile).put(protect, updateUserProfile);

export default router;
