import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import http from "node:http";
import connectDB from "./lib/db.js";
import * as userController from "./controllers/user.controller.js";
import registerSchema from "./validation/registerSchema.js";
import validateRequest from "./validation/validateRequest.js";
import cookieParser from "cookie-parser";

// ============== Create Express App and Http Server ==============
const app = express();
const server = http.createServer(app);
dotenv.config();

// ============== Middlewares ==============
app.use(express.json({ limit: "4mb" }));
app.use(cors()); // allow all origins
app.use(cookieParser()); // parse cookies

// ============== Routes ==============
// Health check route
app.get("/healthz", (req, res) => {
    res.status(200).json({ message: "Server is healthy", status: "OK" });
});

// Signup route
app.post(
    "/api/auth/register",
    validateRequest(registerSchema),
    userController.signup,
);

// Not found route
app.use((req, res) => {
    res.status(404).json({ message: "Route not found", status: "Not Found" });
});

// catch all errors
app.use((err, req, res) => {
    return res
        .status(err.statusCode || 500)
        .json({ message: err.message || "Internal Server Error" });
});

// ============== Start the server ==============
await connectDB();

const PORT = process.env.PORT || 5000;
server.listen(PORT, async () => {
    console.log(`Server is running on Port: ${PORT}`);
});
