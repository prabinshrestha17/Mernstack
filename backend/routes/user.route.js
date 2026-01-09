import { Router } from "express";
import {
  forgotPassword,
  loginUser,
  registerUser,
  resetPassword,
  updateUser,
  verifyUser,
} from "../controller/user.controller.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";

export const userRouter = Router();

userRouter.post("/register", registerUser);
userRouter.get("/verify", verifyUser);
userRouter.post("/login", loginUser);
userRouter.post("/forgot-password", forgotPassword);
userRouter.patch("/reset-password", resetPassword);
userRouter.patch("/update-user", isAuthenticated, updateUser);
