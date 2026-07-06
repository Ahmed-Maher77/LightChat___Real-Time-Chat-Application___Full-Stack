/* eslint-disable react-refresh/only-export-components */
import React, { useEffect } from 'react'
import { AuthContext } from './AuthContext'
import { useContext } from 'react'
import toast from "react-hot-toast";

export const ChatContext = React.createContext()

const ChatProvider = ({ children }) => {
    const [unseenMessages, setUnseenMessages] = React.useState({})
    const [messages, setMessages] = React.useState([])
    const [users, setUsers] = React.useState([])
    const [selectedUser, setSelectedUser] = React.useState(null)

    const { socket, axios } = useContext(AuthContext);

    // Function to get all users for sidebar
    const getUsers = async () => {
        try {
            const { data } = await axios.get("/api/messages/users");
            if (data.success) {
                setUsers(data.data.users);
                setUnseenMessages(data.data.unreadMessages);
            }
        } catch (error) {
            toast.error(error.message || "Failed to fetch users. Please try again.");
        }
    }

    // function to get messages for selected user
    const getMessages = async (userId) => {
        try {
            const { data } = await axios.get(`/api/messages/${userId}`);
            if (data.success) {
                setMessages(data.messages);
                setUnseenMessages(prevUnseen => {
                    const nextUnseen = { ...prevUnseen };
                    delete nextUnseen[userId];
                    return nextUnseen;
                });
            }
        } catch (error) {
            toast.error(error.message || "Failed to fetch messages. Please try again.");
        }
    }

    // function to send message to selected user
    const sendMessage = async (messageData) => {
        try {
            const {data} = await axios.post(`/api/messages/send/${selectedUser._id}`, messageData);
            if (data.success) {
                setMessages(prevMessages => [...prevMessages, data.data]);
            } else {
                toast.error(data.message || "Failed to send message. Please try again.");
            }
        } catch (error) {
            toast.error(error.message || "Failed to send message. Please try again.");
        }
    }

    // function to subscribe to messages for selected user
    const subscribeToMessages = async () => {
        if (!socket) return;
        socket.on("newMessage", (newMessage) => {
            if (selectedUser && newMessage.senderId === selectedUser._id) {
                newMessage.seen = true;
                setMessages(prevMessages => [...prevMessages, newMessage]);
                axios.patch(`/api/messages/mark/${newMessage._id}`);
            } else {
                setUnseenMessages(prevUnseen => ({
                    ...prevUnseen,
                    [newMessage.senderId]: (prevUnseen[newMessage.senderId] || 0) + 1
                }));
            }
        });

        socket.on("messagesSeen", ({ seenBy }) => {
            if (selectedUser && seenBy === selectedUser._id) {
                setMessages(prevMessages =>
                    prevMessages.map(msg =>
                        msg.receiverId === seenBy ? { ...msg, seen: true } : msg
                    )
                );
            }
        });
    }

    // function to unsubscribe from messages for selected user
    const unsubscribeFromMessages = () => {
        if (socket) {
            socket.off("newMessage");
            socket.off("messagesSeen");
        }
    }

    useEffect(() => {
        subscribeToMessages();
        return () => unsubscribeFromMessages();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [socket, selectedUser]);

    return (
        <ChatContext.Provider
            value={{
                messages,
                users,
                selectedUser,
                getUsers,
                getMessages,
                setMessages,
                sendMessage,
                setSelectedUser,
                unseenMessages,
                subscribeToMessages,
                unsubscribeFromMessages,
            }}
        >
            {children}
        </ChatContext.Provider>
    )
}

export { ChatProvider };
export default ChatProvider;
