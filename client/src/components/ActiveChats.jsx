import ActiveChatsItem from "./subcomponents/ActiveChats/ActiveChatsItem";

const ActiveChats = ({ onSelect }) => {
    const isOnline = false; // This should be dynamic based on the user's status
    const userData = { name: "John Doe", lastMessage: "Hello, how are you?", time: "12:00PM" }; // This should be the actual user data for the chat item, including name, last message, time, etc.

    return (
        <aside id="activeChatsContainer" className="flex-1 min-h-0 overflow-y-auto">
            <ul className="flex flex-col gap-1.5">
                <ActiveChatsItem isOnline={isOnline} userData={userData} onSelect={onSelect} />
                <ActiveChatsItem isOnline={isOnline} userData={userData} onSelect={onSelect} />
                <ActiveChatsItem isOnline={isOnline} userData={userData} onSelect={onSelect} />
                <ActiveChatsItem isOnline={isOnline} userData={userData} onSelect={onSelect} />
                <ActiveChatsItem isOnline={isOnline} userData={userData} onSelect={onSelect} />
                <ActiveChatsItem isOnline={isOnline} userData={userData} onSelect={onSelect} />
                <ActiveChatsItem isOnline={isOnline} userData={userData} onSelect={onSelect} />
                <ActiveChatsItem isOnline={isOnline} userData={userData} onSelect={onSelect} />
                <ActiveChatsItem isOnline={isOnline} userData={userData} onSelect={onSelect} />
                <ActiveChatsItem isOnline={isOnline} userData={userData} onSelect={onSelect} />
                <ActiveChatsItem isOnline={isOnline} userData={userData} onSelect={onSelect} />
                <ActiveChatsItem isOnline={isOnline} userData={userData} onSelect={onSelect} />
                <ActiveChatsItem isOnline={isOnline} userData={userData} onSelect={onSelect} />
                {/* Or no chats yet => add contact button */}
            </ul>
        </aside>
    );
};

export default ActiveChats;
