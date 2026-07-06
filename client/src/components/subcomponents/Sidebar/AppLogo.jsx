import { useEffect, useState, useContext } from "react";
import assets from "../../../assets/assets";
import { Link } from "react-router-dom";
import AddNewContactScreen from "../../AddNewContactScreen";
import useAddNewContact from "../../../hooks/contexts/useAddNewContact";
import { AuthContext } from "../../../../context/AuthContext";
import { useRef } from "react";

const AppLogo = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { showAddNewContactScreen, setShowAddNewContactScreen } =
        useAddNewContact();
    const { logout } = useContext(AuthContext);
    const [optionsMenuDirection, setOptionsMenuDirection] = useState("left");

    const optionsMenuRef = useRef(null);
    // close the menu when clicking outside of it
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (e.target.closest(".menu-icon")) return;
            setIsMenuOpen(false);
        };
        document.addEventListener("click", handleOutsideClick);
        return () => document.removeEventListener("click", handleOutsideClick);
    }, []);

    // adjust the direction of the optionsMenu based on the viewport width
    useEffect(() => {
        const handleResize = () => {
            const viewPortWidth =
                document.documentElement.getBoundingClientRect().width;
            const optionsMenuRight =
                optionsMenuRef.current?.getBoundingClientRect().right +
                optionsMenuRef.current?.getBoundingClientRect().width;
            console.log(viewPortWidth, optionsMenuRight);
            if (optionsMenuRight > viewPortWidth) {
                setOptionsMenuDirection("right");
            } else {
                setOptionsMenuDirection("left");
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <nav className="flex items-center justify-between">
            {/* ======= app logo ======= */}
            <div className="flex gap-3 items-center">
                <img src={assets.main_logo} alt="app logo" className="w-8" />
                <h1 className="font-medium text-lg">LightChat</h1>
            </div>

            {/* ======= menu ======= */}
            <div className="relative group">
                <img
                    onClick={() => toggleMenu()}
                    src={assets.menu_icon}
                    alt="options"
                    className="menu-icon w-9 h-9 p-2 hover:bg-gray-600 rounded-full trans-3 cursor-pointer"
                />
                <ul
                    className={`gray-bg rounded-lg p-2 border border-gray-600 absolute top-full ${optionsMenuDirection === "left" ? "left-0" : "right-0"} mt-2 w-max ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"} transition z-20`}
                    ref={optionsMenuRef}
                >
                    {/* ======= edit profile ======= */}
                    <li>
                        <Link
                            to="/profile"
                            className=" flex hover:bg-gray-600 p-2 px-3 rounded-lg transition w-full text-left cursor-pointer  items-center justify-between gap-3"
                        >
                            <span>Edit Profile</span>
                            <img
                                src={assets.edit_icon}
                                alt="edit profile"
                                className="w-5"
                            />
                        </Link>
                    </li>
                    <li>
                        <hr className="my-2 bg-gray-700 text-gray-600" />
                    </li>
                    {/* ======= Add New Contact ======= */}
                    <li>
                        <button
                            className="hover:bg-gray-600 p-2 px-3 rounded-lg transition w-full text-left cursor-pointer flex items-center gap-3 justify-between"
                            onClick={() => setShowAddNewContactScreen(true)}
                        >
                            <span>Add New Contact</span>
                            <img
                                src={assets.add_user}
                                alt="add contact"
                                className="w-5"
                            />
                        </button>
                    </li>
                    <li>
                        <hr className="my-2 bg-gray-700 text-gray-600" />
                    </li>
                    {/* ======= logout ======= */}
                    <li>
                        <button
                            className="hover:bg-gray-600 p-2 px-3 rounded-lg transition w-full text-left cursor-pointer flex items-center gap-3 justify-between text-red-500"
                            onClick={logout}
                        >
                            <span>Logout</span>
                            <img
                                src={assets.quit_icon}
                                alt="logout"
                                className="w-5"
                            />
                        </button>
                    </li>
                </ul>
            </div>

            {/* Show/Hide Add New Contact Screen */}
            {showAddNewContactScreen && (
                <AddNewContactScreen
                    onClose={() => setShowAddNewContactScreen(false)}
                />
            )}
        </nav>
    );
};

export default AppLogo;
