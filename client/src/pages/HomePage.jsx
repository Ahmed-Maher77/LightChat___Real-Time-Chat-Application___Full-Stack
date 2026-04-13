import { useState } from "react";
import ChatContainer from "../components/ChatContainer";
import RightSidebar from "../components/RightSidebar";
import Sidebar from "../components/Sidebar";
import NoSelectedUserMsg from "../components/NoSelectedUserMsg";

const HomePage = () => {
    const [selectedUser, setSelectedUser] = useState(null);
    const [showUserInfo, setShowUserInfo] = useState(true);

    return (
        <div id="HomePage" className="w-full min-h-screen">
            <div className="home-page-layout h-screen rounded-xl w-full backdrop-blur-xs flex relative overflow-hidden">
                <Sidebar onSelect={setSelectedUser} />
                {selectedUser ? (
                    <>
                        <ChatContainer selectedUser={selectedUser} onBack={() => setSelectedUser(null)} />
                        {showUserInfo && <RightSidebar selectedUser={selectedUser} onBack={() => setShowUserInfo(false)} />}
                    </>
                ) : (
                    <NoSelectedUserMsg />
                )}
            </div>
        </div>
    );
};

export default HomePage;
