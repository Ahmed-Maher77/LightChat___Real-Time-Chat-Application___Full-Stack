import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import http from "node:http";
import connectDB from "./lib/db.js";
import * as userController from "./controllers/user.controller.js";
import registerSchema from "./validation/registerSchema.js";
import loginSchema from "./validation/loginSchema.js";
import validateRequest from "./validation/validateRequest.js";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js";
import messageRouter from "./routes/message.routes.js";
import { Server } from "socket.io";


// ============== Create Express App and Http Server ==============
const app = express();
const server = http.createServer(app);
dotenv.config();

// Initialize Socket.IO server
export const io = new Server(server, {
    cors: { origin: "*" }
});

// Store online users
export const userSocketMap = {};    // { userId: socketId }

// Socket.io connection handler
io.on("connection", (socket) => {
    const userId = socket.handshake.query.userId;
    console.log(`User connected: ${userId}, Socket ID: ${socket.id}`);
    if (userId) userSocketMap[userId] = socket.id;

    // Emit online users to all connected clients
    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    socket.on("disconnect", () => {
        console.log(`User disconnected: ${userId}, Socket ID: ${socket.id}`);
        if (userId) delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    })
})

// ============== Middlewares ==============
app.use(express.json({ limit: "4mb" }));
app.use(cors()); // allow all origins
app.use(cookieParser()); // parse cookies


// ============== Routes ==============
// Health check route
app.get("/healthz", (req, res) => {
    res.status(200).json({ success: true, message: "Server is healthy", status: "OK" });
});


// User/Authentication routes
app.use(
    "/api/auth",
    userRouter
);

// message routes
app.use("/api/messages", messageRouter);



// Not found route
app.use((req, res) => {
    res.status(404).json({ success: false, message: "Route not found", status: "Not Found" });
});

// catch all errors
app.use((err, req, res, next) => {
    return res
        .status(err.statusCode || 500)
        .json({ success: false,  message: err.message || "Internal Server Error" });
});


// ============== Start the server ==============
await connectDB();

const PORT = process.env.PORT || 5000;
server.listen(PORT, async () => {
    console.log(`Server is running on Port: ${PORT}`);
});
