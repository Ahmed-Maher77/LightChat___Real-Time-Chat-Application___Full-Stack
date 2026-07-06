import { useEffect, useContext } from "react";
import MessageSenderBox from "./subcomponents/ChatContainer/MessageSenderBox";
import ChatContainerHeader from "./subcomponents/ChatContainer/ChatContainerHeader";
import MessagesContainer from "./subcomponents/ChatContainer/MessagesContainer";
import { ChatContext } from "../../context/ChatContext";

const ChatContainer = ({ onBack, onToggleUserInfo }) => {
    const { selectedUser, getMessages } = useContext(ChatContext);

    useEffect(() => {
        if (selectedUser) {
            getMessages(selectedUser._id);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedUser]);

    return (
        <div
            id="ChatContainer"
            className="absolute inset-0 h-full w-full flex flex-col flex-1 min-w-0 sm:static sm:inset-auto z-10 backdrop-blur-sm sm:backdrop-blur-xs bg-gray-900/95 sm:bg-gray-900/50 p-5 pt-0"
        >
            <ChatContainerHeader
                onBack={onBack}
                onToggleUserInfo={onToggleUserInfo}
            />
            <MessagesContainer />
            <MessageSenderBox />
        </div>
    );
};

export default ChatContainer;
