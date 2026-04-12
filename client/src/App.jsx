import { createBrowserRouter, RouterProvider } from "react-router-dom";
// pages
import Layout from "./pages/Layout";
import Home from "./pages/HomePage";
import Login from "./pages/LoginPage";
import Profile from "./pages/ProfilePage";
import NotFound from "./pages/NotFoundPage";
// images
import assets from "./assets/assets";

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                { path: "/", element: <Home /> },
                { path: "/login", element: <Login /> },
                { path: "/profile", element: <Profile /> },
                { path: "*", element: <NotFound /> },
            ],
        },
    ]);

    return (
        <div
            className="min-h-screen text-white bg-center bg-contain"
            style={{ backgroundImage: `url(${assets.bgImage})` }}
        >
            <RouterProvider router={router} />
        </div>
    );
};

export default App;
