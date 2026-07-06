import express from "express";
import * as messageController from "../controllers/message.controller.js";
import protectedRoute from "../middlewares/auth.js";

const router = express.Router();

// get all users except the current user
router.get("/users", protectedRoute, messageController.getAllUsers);

// get all messages between the current user and another user
router.get("/:userId", protectedRoute, messageController.getMessages);

// get all messages between the current user and another user
router.patch("/mark/:messageId", protectedRoute, messageController.markMessageAsSeen);

// send a new message
router.post("/send/:id", protectedRoute, messageController.sendMessage);


export default router;