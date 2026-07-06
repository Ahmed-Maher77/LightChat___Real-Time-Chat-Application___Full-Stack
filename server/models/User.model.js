import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        match: [/.+\@.+\..+/, "Please fill a valid email address"],
    },
    profilePic: {
        type: String,
        default: ""
    },
    bio: {
        type: String,
    },
}, { timestamps: true  })


const User = mongoose.model("User", UserSchema);

export default User;