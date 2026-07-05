import mongoose from "mongoose";
import dns from "node:dns";


const connectDB = async () => {
    const mongoUri = process.env.MONGODB_URI;

    if (!mongoUri) {
        console.warn("MONGODB_URI is not set. Skipping MongoDB connection.");
        return false;
    }

    // Set public DNS servers to resolve MongoDB SRV records (addresses ECONNREFUSED querySrv issues)
    try {
        dns.setServers(["8.8.8.8", "1.1.1.1"]);
    } catch (dnsError) {
        console.warn("Failed to set custom DNS servers, using default:", dnsError.message);
    }

    try {
        await mongoose.connect(mongoUri);
        console.log("Connected to MongoDB successfully");
        return true;
    } catch (error) {
        console.warn("MongoDB connection failed, continuing without database:", error.message);
        return false;
    }
};


export default connectDB;
