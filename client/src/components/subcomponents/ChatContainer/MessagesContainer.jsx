import React, { useEffect, useContext } from "react";
import timeFormatter from "../../../utils/functions/timeFormatter";
import MessageItem from "./ChatContainerHeader/MessageItem";
import { ChatContext } from "../../../../context/ChatContext";
import { AuthContext } from "../../../../context/AuthContext";

const MessagesContainer = () => {
    const { messages, selectedUser } = useContext(ChatContext);
    const { authUser } = useContext(AuthContext);
    const isMine = (message) => authUser && (authUser.id === message.senderId || authUser._id === message.senderId);
    const containerEndRef = React.useRef(null);

    useEffect(() => {
        containerEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, selectedUser]);

    return (
        <div
            id="messages-container"
            className="flex flex-col w-full min-h-0 flex-1"
        >
            <ul className="flex flex-col gap-5 w-full h-full overflow-y-auto pt-8 pb-18">
                {messages && messages.map((message, idx, arr) => (
                    <li
                        key={message._id}
                        className={`max-w-[70%] lg:max-w-[50%] flex gap-4 ${isMine(message) ? "self-end" : "self-start"}`}
                    >
                        <MessageItem
                            message={message}
                            isMine={isMine(message)}
                            timeFormatter={timeFormatter}
                            userData={authUser}
                            selectedUser={selectedUser}
                            isSameSenderAsPrev={
                                idx > 0 &&
                                message.senderId === arr[idx - 1].senderId
                            }
                        />
                    </li>
                ))}
                <div ref={containerEndRef}></div>
            </ul>
        </div>
    );
};

export default MessagesContainer;
