import { useContext, useState, useEffect } from "react";
import { ChatContext } from "../../context/ChatContext";
import { AuthContext } from "../../context/AuthContext";
import ActiveChats from "./ActiveChats";
import SearchBar from "./SearchBar";
import AppLogo from "./subcomponents/Sidebar/AppLogo";

const Sidebar = ({ setShowUserInfo }) => {
    const { getUsers, users } = useContext(ChatContext);
    const { onlineUsers } = useContext(AuthContext);
    const [input, setInput] = useState("");

    const filteredUsers = input 
        ? users.filter((user) => user.fullName.toLowerCase().includes(input.toLowerCase())) 
        : users;

    useEffect(() => {
        getUsers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [onlineUsers]);

    return (
        <div className="w-full h-full shrink-0 p-5 flex flex-col gap-7 sm:w-75 sm:min-w-75">
            <AppLogo />
            <SearchBar placeholder="Search here..." onSearch={(value) => setInput(value)} />
            <ActiveChats activeChats={filteredUsers} onlineUsers={onlineUsers} setShowUserInfo={setShowUserInfo} />
            <footer className="text-xs text-center text-stone-500 font-light mt-auto pt-2 border-t border-gray-800">
                <p>&copy; {new Date().getFullYear()} LightChat.</p>
                <p className="mt-0.5">
                    Developed by{" "}
                    <a 
                        href="https://www.linkedin.com/in/ahmed-maher-algohary" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-indigo-400 hover:text-indigo-300 font-medium transition duration-300 hover:underline"
                    >
                        Ahmed Maher
                    </a>
                </p>
            </footer>
        </div>
    );
};

export default Sidebar;
