import { createBrowserRouter, RouterProvider } from "react-router-dom";
// pages
import Layout from "./pages/Layout";
import Home from "./pages/HomePage";
import Login from "./pages/LoginPage";
import Profile from "./pages/ProfilePage";
import NotFound from "./pages/NotFoundPage";
import AddNewContactProvider from "./hooks/contexts/AddNewContactProvider";

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

const App = () => {
    return (
        <AddNewContactProvider>
            <div className="app-shell min-h-screen text-white">
                <div className="app-shell-background" aria-hidden="true" />
                <RouterProvider router={router} />
            </div>
        </AddNewContactProvider>
    );
};

export default App;
