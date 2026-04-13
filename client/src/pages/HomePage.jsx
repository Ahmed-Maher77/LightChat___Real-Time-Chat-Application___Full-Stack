import { useEffect, useState } from "react";
import ChatContainer from "../components/ChatContainer";
import RightSidebar from "../components/RightSidebar";
import Sidebar from "../components/Sidebar";
import NoSelectedUserMsg from "../components/NoSelectedUserMsg";

const RIGHT_SIDEBAR_EXIT_MS = 220;

const HomePage = () => {
    const [selectedUser, setSelectedUser] = useState(null);
    const [showUserInfo, setShowUserInfo] = useState(false);
    const [isRightSidebarClosing, setIsRightSidebarClosing] = useState(false);

    const handleSelectUser = (user) => {
        setSelectedUser(user);
    };

    const handleBackToChats = () => {
        setSelectedUser(null);
        setShowUserInfo(false);
        setIsRightSidebarClosing(false);
    };

    const handleToggleUserInfo = () => {
        if (isRightSidebarClosing) {
            setIsRightSidebarClosing(false);
            setShowUserInfo(true);
            return;
        }

        if (showUserInfo) {
            setIsRightSidebarClosing(true);
            return;
        }

        setShowUserInfo(true);
    };

    const handleCloseUserInfo = () => {
        if (!showUserInfo || isRightSidebarClosing) {
            return;
        }

        setIsRightSidebarClosing(true);
    };

    useEffect(() => {
        if (!isRightSidebarClosing) {
            return;
        }

        const timeoutId = setTimeout(() => {
            setShowUserInfo(false);
            setIsRightSidebarClosing(false);
        }, RIGHT_SIDEBAR_EXIT_MS);

        return () => clearTimeout(timeoutId);
    }, [isRightSidebarClosing]);

    return (
        <div id="HomePage" className="w-full min-h-screen">
            <div className="home-page-layout h-screen rounded-xl w-full backdrop-blur-xs flex relative overflow-hidden">
                <Sidebar selectedUser={selectedUser} onSelect={handleSelectUser} />
                {selectedUser ? (
                    <>
                        <ChatContainer selectedUser={selectedUser} onBack={handleBackToChats} onToggleUserInfo={handleToggleUserInfo} />
                        {(showUserInfo || isRightSidebarClosing) && (
                            <RightSidebar
                                selectedUser={selectedUser}
                                isClosing={isRightSidebarClosing}
                                onBack={handleCloseUserInfo}
                            />
                        )}
                    </>
                ) : (
                    <NoSelectedUserMsg />
                )}
            </div>
        </div>
    );
};

export default HomePage;
