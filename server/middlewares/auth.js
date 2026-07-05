import jwt from "jsonwebtoken";
import AppError from "../utils/global-error-handler.js";

const protectedRoute = async (req, res, next) => {
    // get the jwt token from headers or cookies
    const token =
        req.headers.authorization?.replace("Bearer ", "") ||
        req.cookies["lightchat_access_token"];

    if (!token) {
        return next(new AppError("Unauthorized: No token provided", 401));
    }

    // extract the jwt token + verify it
    try {
        const decoded = await jwt.verify(token, process.env.JWT_SECRET);
        // append the the user data to the request object
        req.user = decoded;
    } catch (error) {
        return next(new AppError("Unauthorized: Invalid token", 401));
    }

    const existingUser = User.findById(req.user.id, { password: 0 }, { lean: true });
    if (!existingUser) {
        return next(new AppError("Unauthorized: User not found", 401));
    }

    // go to next middleware
    next();
};

export default protectedRoute;