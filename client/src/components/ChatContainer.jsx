import MessageSenderBox from "./subcomponents/ChatContainer/MessageSenderBox";
import ChatContainerHeader from "./subcomponents/ChatContainer/ChatContainerHeader";
import MessagesContainer from "./subcomponents/ChatContainer/MessagesContainer";

const ChatContainer = ({ selectedUser, onBack, onToggleUserInfo }) => {
    return (
        <div
            id="ChatContainer"
            className="absolute inset-0 h-full w-full flex-1 min-w-0 sm:static sm:inset-auto z-10 backdrop-blur-sm sm:backdrop-blur-xs bg-gray-900/95 sm:bg-gray-900/50 p-5 pt-0"
        >
            <ChatContainerHeader
                selectedUser={selectedUser}
                onBack={onBack}
                onToggleUserInfo={onToggleUserInfo}
            />
            <MessagesContainer />
            <MessageSenderBox />
        </div>
    );
};

export default ChatContainer;
