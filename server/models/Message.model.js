import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
    },
    image: {
        type: String,
    },
    file: {
        type: String,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    seen: {
        type: Boolean,
        default: false,
    },
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, { timestamps: true  })


const Message = mongoose.model("Message", MessageSchema);

export default Message;