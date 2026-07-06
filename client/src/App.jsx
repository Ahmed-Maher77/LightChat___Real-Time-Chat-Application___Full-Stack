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
import assets from "./assets/assets";


const App = () => {
    const { authUser, isCheckingAuth } = useContext(AuthContext);

    if (isCheckingAuth) {
        return (
            <div className="relative flex items-center justify-center min-h-screen bg-slate-950 overflow-hidden text-white">
                {/* Glow Effects */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
                
                <div className="relative flex flex-col items-center gap-14 z-10">
                    <div className="relative flex items-center justify-center">
                        {/* Orbit ring */}
                        <div className="absolute w-28 h-28 border-t-2 border-r-2 border-indigo-400/70 rounded-full animate-spin" />
                        {/* Inner pulse circle */}
                        <div className="absolute w-24 h-24 bg-indigo-500/10 rounded-full animate-ping" />
                        {/* Logo */}
                        <img 
                            src={assets.main_logo} 
                            alt="LightChat Logo" 
                            className="w-14 h-14 relative animate-pulse" 
                        />
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <h2 className="text-2xl font-bold text-white tracking-[0.2em] uppercase">LightChat</h2>
                        <p className="text-sm text-stone-400 font-medium tracking-wide animate-pulse">Establishing secure connection...</p>
                    </div>
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
