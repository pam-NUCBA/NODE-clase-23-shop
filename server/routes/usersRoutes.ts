import express from "express";
import {
  authUser,
  registerUser,
  getUserProfile,
} from "../controllers/UsersController";
import { protectRoutes } from "../middlewares/authMiddleware";

const router = express.Router();

router.post("/login", authUser);
router.post("/register", registerUser);
router.get("/profile", protectRoutes, getUserProfile);

export default router;
