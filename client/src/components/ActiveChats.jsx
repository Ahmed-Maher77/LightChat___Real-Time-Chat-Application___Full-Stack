import ActiveChatsItem from "./subcomponents/ActiveChats/ActiveChatsItem";

// Dummy data – replace with real data from API/state once available
const dummyChats = [
    { id: 1, name: "John Doe", lastMessage: "Hello, how are you?", time: "12:00 PM", isOnline: false },
    { id: 2, name: "Jane Smith", lastMessage: "See you tomorrow!", time: "11:45 AM", isOnline: true },
    { id: 3, name: "Bob Johnson", lastMessage: "Sounds good.", time: "10:30 AM", isOnline: false },
    { id: 4, name: "Alice Brown", lastMessage: "Let me know when you're free.", time: "Yesterday", isOnline: true },
    { id: 5, name: "Charlie Davis", lastMessage: "Got it, thanks!", time: "Yesterday", isOnline: false },
];

const ActiveChats = ({ onSelect }) => {
    return (
        <aside id="activeChatsContainer" className="flex-1 min-h-0 overflow-y-auto">
            <ul className="flex flex-col gap-1.5">
                {dummyChats.map((chat) => (
                    <ActiveChatsItem
                        key={chat.id}
                        isOnline={chat.isOnline}
                        userData={chat}
                        onSelect={onSelect}
                    />
                ))}
                {/* Or no chats yet => add contact button */}
            </ul>
        </aside>
    );
};

export default ActiveChats;
