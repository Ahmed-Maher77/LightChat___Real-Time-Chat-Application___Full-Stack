import assets from "../assets/assets";
import ActiveChatsItem from "./subcomponents/ActiveChats/ActiveChatsItem";
import NoContactsYet from "./subcomponents/ActiveChats/NoContactsYet";

// Dummy data – replace with real data from API/state once available
const activeChats = [
    { id: 1, name: "John Doe", lastMessage: "Hello, how are you?", time: "2026-04-13T09:12:00.000Z", lastConnectionAt: "2026-04-13T09:08:00.000Z", isOnline: false, profilePic: assets.profile_martin, bio: "The direction is more important than the speed" },
    { id: 2, name: "Jane Smith", time: "2026-04-13T07:45:00.000Z", lastConnectionAt: "2026-04-13T10:02:00.000Z", isOnline: true, bio: "Love to chat about tech and programming" },
    { id: 3, name: "Bob Johnson", lastMessage: "Sounds good.", time: "2026-04-13T06:30:00.000Z", lastConnectionAt: "2026-04-13T09:58:00.000Z", isOnline: false, profilePic: assets.profile_martin, isTyping: true, bio: "Always up for a good conversation" },
    { id: 4, name: "Alice Brown", lastMessage: "Let me know when you're free.", time: "2026-04-12T11:00:00.000Z", lastConnectionAt: "2026-04-13T08:41:00.000Z", isOnline: true, bio: "Passionate about web development" },
    { id: 5, name: "Charlie Davis", lastMessage: "Got it, thanks!", time: "2026-03-30T18:20:00.000Z", lastConnectionAt: "2026-04-11T20:20:00.000Z", isOnline: false, profilePic: assets.profile_martin, bio: "Enjoys hiking and outdoor activities" },
];

const ActiveChats = ({ selectedUser, onSelect }) => {
    return (
        <aside id="activeChatsContainer" className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden">
            <ul className="flex flex-col gap-1.5">
                {activeChats.length > 0 ? (
                    activeChats.map((chat) => (
                        <ActiveChatsItem
                            key={chat.id}
                            isOnline={chat.isOnline}
                            userData={chat}
                            selectedUser={selectedUser}
                            onSelect={onSelect}
                        />
                    ))
                ) : (
                    <NoContactsYet />
                )}
            </ul>
        </aside>
    );
};

export default ActiveChats;
