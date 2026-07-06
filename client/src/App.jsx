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
import { Toaster } from "react-hot-toast";


const App = () => {
    const { authUser } = useContext(AuthContext);

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
                <Toaster reverseOrder={false} />
                <div className="app-shell min-h-screen text-white">
                    <div className="app-shell-background" aria-hidden="true" />
                    <RouterProvider router={router} />
                </div>
            </UserDataProvider>
        </AddNewContactProvider>
    );
};

export default App;
