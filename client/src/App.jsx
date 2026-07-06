import { useContext } from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
// pages
import Layout from "./pages/Layout";
import Home from "./pages/HomePage";
import Login from "./pages/LoginPage";
import Profile from "./pages/ProfilePage";
import NotFound from "./pages/NotFoundPage";
import AddNewContactProvider from "./hooks/contexts/AddNewContactProvider";
import UserDataProvider from "./context/userDataProvider";
import { AuthContext } from "../context/AuthContext";
import { ChatProvider } from "../context/ChatContext";
import { Toaster } from "react-hot-toast";


const App = () => {
    const { authUser, isCheckingAuth } = useContext(AuthContext);

    if (isCheckingAuth) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-950 text-white">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin"></div>
                    <p className="text-stone-400 text-sm font-medium tracking-wide animate-pulse">Loading LightChat...</p>
                </div>
            </div>
        );
    }

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                { path: "/", element: authUser ? <Home /> : <Navigate to="/login" /> },
                { path: "/login", element: !authUser ? <Login /> : <Navigate to="/" /> },
                { path: "/profile", element: authUser ? <Profile /> : <Navigate to="/login" /> },
                { path: "*", element: <NotFound /> },
            ],
        },
    ]);

    return (
        <AddNewContactProvider>
            <UserDataProvider>
            <ChatProvider>
                <Toaster reverseOrder={false} />
                <div className="app-shell min-h-screen text-white">
                    <div className="app-shell-background" aria-hidden="true" />
                    <RouterProvider router={router} />
                </div>
            </ChatProvider>
            </UserDataProvider>
        </AddNewContactProvider>
    );
};

export default App;
