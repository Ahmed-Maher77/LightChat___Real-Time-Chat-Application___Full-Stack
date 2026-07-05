import User from "../models/User.model.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generate-token.js";

// Signup new user
const signup = async (req, res) => {
    const { fullName, email, password, bio } = req.body;

    try {
        // check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return new AppError("User already exists", 400);
        }

        // hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // save user in database
        const newUser = new User({
            fullName,
            email,
            password: hashedPassword,
            bio,
        });
        await newUser.save();

        // create jwt token
        const token = generateToken({
            id: newUser._id,
            email: newUser.email,
        });

        // create cookie with jwt token
        createCookie("lightchat_access_token", token);

        // return response with user data and token
        return res.status(201).json({
            message: "User registered successfully",
            user: {
                id: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email,
                bio: newUser.bio,
                profilePic: newUser.profilePic,
                createdAt: newUser.createdAt,
                updatedAt: newUser.updatedAt,
            },
            accessToken: token,
        });
    } catch (error) {
        console.error("Error during user signup:", error);
        return new AppError(error.message || "Internal server error", 500);
    }
};

export { signup };
