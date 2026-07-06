/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect } from "react";
import axios from 'axios';
import toast from "react-hot-toast";
import { io } from "socket.io-client";

const backendUrl = import.meta.env.VITE_BACKEND_URL;
axios.defaults.baseURL = backendUrl;
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [authUser, setAuthUser] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [socket, setSocket] = useState(null);
    const [isCheckingAuth, setIsCheckingAuth] = useState(!!localStorage.getItem("token"));

    // Check if user is authenticated and if so, set the user data and connect the socket
    const checkAuth = async () => {
        if (!localStorage.getItem("token")) {
            setIsCheckingAuth(false);
            return;
        }
        await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second before setting isCheckingAuth to false
        try {
            const { data } = await axios.get("/api/auth/checkAuth");
            if (data.success) {
                setAuthUser(data.user);
                connectSocket(data.user);
            }
        } catch (error) {
            toast.error(error.response?.data?.message || error.message || "Failed to check authentication");
        } finally {
            setIsCheckingAuth(false);
        }
    }

    // Login/Register (handle user authentication) user and set the token, user data, and connect the socket
    const login = async (state, credentials) => {
        try {
            const { data } = await axios.post(`/api/auth/${state}`, credentials);
            if (data.success) {
                setToken(data.accessToken);
                localStorage.setItem("token", data.accessToken);
                setAuthUser(data.user);
                connectSocket(data.user);
                axios.defaults.headers.common["token"] = data.accessToken;
                toast.success(data.message || "You are logged in successfully");
            } else {
                toast.error(data.message || "Failed to authenticate user");
            }
        } catch (error) {
            toast.error(error.message || "Failed to authenticate user");
        }
    }

    // Logout user and clear the token, user data, and disconnect the socket
    const logout = async () => {
        localStorage.removeItem("token");
        setToken(null);
        setAuthUser(null);
        setOnlineUsers([]);
        axios.defaults.headers.common["token"] = null;
        toast.success("Logged out successfully");
        socket?.disconnect();
    }

    // Update user profile and set the updated user data
    const updateProfile = async (body) => {
        try {
            const { data } = await axios.put("/api/auth/update-profile", body);
            if (data.success) {
                setAuthUser(data.user);
                toast.success(data.message || "Profile updated successfully");
            } else {
                toast.error(data.message || "Failed to update profile");
            }
        } catch (error) {
            toast.error(error.message || "Failed to update profile");
        }
    }

    // Connect to the socket server and listen for online users
    const connectSocket = (userData) => {
        if (!userData || socket?.connected) return;
        const newSocket = io(backendUrl, {
            query: { userId: userData.id },
        })
        newSocket.connect();
        setSocket(newSocket);

        newSocket.on("getOnlineUsers", (userIds) => {
            setOnlineUsers(userIds);
        });
    }

    useEffect(() => {
        if (token) {
            axios.defaults.headers.common["token"] = token;
        }
        checkAuth();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const value = {
        axios,
        authUser,
        onlineUsers,
        socket,
        login,
        logout,
        updateProfile,
        isCheckingAuth,
    }

  return (
    <AuthContext.Provider value={value}>
    {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
