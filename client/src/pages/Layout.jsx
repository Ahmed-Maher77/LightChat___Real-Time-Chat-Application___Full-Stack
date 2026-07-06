import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
    const location = useLocation();
    const isChatPage = location.pathname === "/";

    return (
        <div className="min-h-screen flex flex-col justify-between">
            <div className="flex-grow flex flex-col">
                <Outlet />
            </div>
            {!isChatPage && (
                <footer className="w-full py-4 bg-gray-950/40 border-t border-gray-900/60 text-center text-xs text-stone-500 font-light flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-3 z-10">
                    <span>&copy; {new Date().getFullYear()} LightChat. All rights reserved.</span>
                    <span className="hidden sm:inline text-stone-700">|</span>
                    <span>
                        Developed by{" "}
                        <a 
                            href="https://www.linkedin.com/in/ahmed-maher-algohary" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-indigo-400 hover:text-indigo-300 font-medium transition duration-300 underline underline-offset-2 decoration-indigo-500/30 hover:decoration-indigo-400"
                        >
                            Ahmed Maher
                        </a>
                    </span>
                </footer>
            )}
        </div>
    );
};

export default Layout;
