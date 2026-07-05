import express from "express";
import * as userController from "../controllers/user.controller.js";
import protectedRoute from "../middlewares/auth.js";
import validateRequest from "../validation/validateRequest.js";
import registerSchema from "../validation/registerSchema.js";
import loginSchema from "../validation/loginSchema.js";

const router = express.Router();

// signup a new user
router.post("/signup", validateRequest(registerSchema), userController.signup);

// login a user
router.post("/login", validateRequest(loginSchema), userController.login);

// check if user is authenticated
router.get("/checkAuth", protectedRoute, userController.checkAuth);

// update user profile route
router.put("/update-profile", protectedRoute, userController.updateProfile);

// profile route
router.get("/profile", protectedRoute, userController.profile);

export default router;
