import Message from "../models/Message.model.js";
import User from "../models/User.model.js";
import AppError from "../utils/global-error-handler.js";
import cloudinary from "../lib/cloudinary.js";
import { userSocketMap } from "../server.js";
import { io } from "../server.js";

// Get all users except the current user => for sidebar list
export const getAllUsers = async (req, res, next) => {
    try {
        const filteredUsers = await User.find({ _id: { $ne: req.user.id } })
            .select("-password")
            .lean();
        const unreadMessages = {};

        const promises = filteredUsers.map(async (user) => {
            const unreadMessagesCount = await Message.countDocuments({
                senderId: user._id,
                receiverId: req.user.id,
                seen: false,
            });
            if (unreadMessagesCount > 0) {
                unreadMessages[user._id] = unreadMessagesCount;
            }
        });

        await Promise.all(promises);

        res.status(200).json({
            success: true,
            message: "Users fetched successfully",
            data: {
                users: filteredUsers,
                unreadMessages,
            },
        });
    } catch (err) {
        return next(new AppError(err.message || "Internal server error", 500));
    }
};

// Get all messages between the current user and another user
// GET /api/messages/:userId
export const getMessages = async (req, res, next) => {
    try {
        const { userId: selectedUserId } = req.params;

        // get chat messages
        const messages = await Message.find({
            $or: [
                { senderId: req.user.id, receiverId: selectedUserId },
                { senderId: selectedUserId, receiverId: req.user.id },
            ],
        })
            .sort({ createdAt: 1 })
            .lean();

        // update status of messages to "seen" if the current user is the receiver
        await Message.updateMany(
            { senderId: selectedUserId, receiverId: req.user.id },
            { seen: true },
        );

        return res.status(200).json({
            success: true,
            message: "Messages fetched successfully",
            messages,
        });
    } catch (err) {
        return next(new AppError(err.message || "Internal server error", 500));
    }
};

// Mark message as seen
export const markMessageAsSeen = async (req, res, next) => {
    try {
        const { messageId } = req.params;
        if (!messageId) {
            return next(new AppError("Message ID is required", 400));
        }
        await Message.findByIdAndUpdate(messageId, { seen: true });
        res.status(200).json({
            success: true,
            message: "Message marked as seen successfully",
        });
    } catch (err) {
        return next(new AppError(err.message || "Internal server error", 500));
    }
};

// Send a new message
export const sendMessage = async (req, res, next) => {
    try {
        const { id: receiverId } = req.params;
        const { text, image, file } = req.body;

        if (!text && !image && !file) {
            return next(new AppError("You can't send an empty message", 400));
        }

        let imageUrl;
        if (image) {
            const result = await cloudinary.uploader.upload(image, {
                folder: "lightchat/messages",
            });
            imageUrl = result.secure_url;
        }

        let fileUrl;
        if (file) {
            const result = await cloudinary.uploader.upload(file, {
                folder: "lightchat/messages",
            });
            fileUrl = result.secure_url;
        }

        const newMessage = await Message.create({
            senderId: req.user.id,
            receiverId,
            text,
            image: imageUrl,
            file: fileUrl,
        });

        // Emit the new message to the receiver if they are online
        const receiverSocketId = userSocketMap[receiverId];
        if (receiverSocketId) {
            io.to(receiverSocketId).emit("newMessage", newMessage);
        }

        res.status(201).json({
            success: true,
            message: "Message sent successfully",
            data: newMessage,
        });
    } catch (err) {
        return next(new AppError(err.message || "Internal server error", 500));
    }
};
