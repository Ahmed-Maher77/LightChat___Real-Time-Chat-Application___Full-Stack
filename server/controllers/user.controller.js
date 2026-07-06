import User from "../models/User.model.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generate-token.js";
import AppError from "../utils/global-error-handler.js";
import createCookie from "../utils/create-cookie.js";
import cloudinary from "../lib/cloudinary.js";

// Signup new user
const signup = async (req, res, next) => {
    const { fullName, email, password, bio } = req.body;

    try {
        // check if user already exists
        const existingUser = await User.findOne({ email }, null, {
            lean: true,
        });
        if (existingUser) {
            return next(new AppError("User already exists", 400));
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
        createCookie(res, "lightchat_access_token", token);

        // return response with user data and token
        return res.status(201).json({
            success: true, 
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
        return next(
            new AppError(error.message || "Internal server error", 500),
        );
    }
};

// Login a user
const login = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        // check if user already exists
        const existingUser = await User.findOne({ email }, null, {
            lean: true,
        });
        if (!existingUser) {
            return next(new AppError("Invalid Email or Password", 404));
        }

        // compare password
        const isMatch = await bcrypt.compare(password, existingUser.password);
        if (!isMatch) {
            return next(new AppError("Invalid Email or Password", 404));
        }

        // create jwt token
        const token = generateToken({
            id: existingUser._id,
            email: existingUser.email,
        });

        // create cookie with jwt token
        createCookie(res, "lightchat_access_token", token);

        // return response with user data and token
        return res.status(201).json({
            success: true, 
            message: "User logged in successfully",
            user: {
                id: existingUser._id,
                fullName: existingUser.fullName,
                email: existingUser.email,
                bio: existingUser.bio,
                profilePic: existingUser.profilePic,
                createdAt: existingUser.createdAt,
                updatedAt: existingUser.updatedAt,
            },
            accessToken: token,
        });
    } catch (error) {
        console.error("Error during user login:", error);
        return next(
            new AppError(error.message || "Internal server error", 500),
        );
    }
};

const profile = (req, res) => {
    return res.status(200).json({
        success: true, 
        message: "User profile fetched successfully",
        user: req.user,
    });
};

const checkAuth = (req, res) => {
    return res
        .status(200)
        .json({ success: true, message: "User is authenticated", user: req.user });
};

const updateProfile = async (req, res, next) => {
    try {
        const { fullName, bio, profilePic } = req.body;

        if (!fullName && !bio && !profilePic) {
            return next(
                new AppError("Append at least one field to update", 400),
            );
        }

        // check if user exists
        const existingUser = await User.findById(req.user.id).select("-password").lean();
        if (!existingUser) {
            return next(new AppError("Unauthorized: User not found", 401));
        }

        let profilePicUrl = existingUser.profilePic;
        if (profilePic) {
            const upload = await cloudinary.uploader.upload(profilePic, {
                folder: "lightchat/profile-pics",
            });
            profilePicUrl = upload.secure_url;
        }

        // update the user data in db
        const updatedUser = await User.findByIdAndUpdate(
            req.user.id,
            {
                fullName: fullName || existingUser.fullName,
                bio: bio || existingUser.bio,
                profilePic: profilePicUrl,
            },
            { new: true, select: "-password", lean: true }
        );

        // return the updated user data
        return res.status(200).json({
            success: true, 
            message: "User profile updated successfully",
            user: {
                id: updatedUser._id,
                fullName: updatedUser.fullName,
                email: updatedUser.email,
                bio: updatedUser.bio,
                profilePic: updatedUser.profilePic,
                createdAt: updatedUser.createdAt,
                updatedAt: updatedUser.updatedAt,
            },
        });
    } catch (err) {
        return next(new AppError(err.message || "Internal server error", 500));
    }
};

export { signup, login, profile, checkAuth, updateProfile };
