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
        </div>
    );
};

export default Sidebar;
