import { useContext } from "react";
import { ChatContext } from "../../../../context/ChatContext";
import generateAlternativeImage from "../../../utils/functions/generateAlternativeImage";
import timeFormatter from "../../../utils/functions/timeFormatter";
import UserStatusIndicator from "../../common/UserStatusIndicator";

const ActiveChatsItem = ({ isOnline, setShowUserInfo, userData }) => {
    const { selectedUser, setSelectedUser, unseenMessages } = useContext(ChatContext);

    const handleSelectUser = () => {
        setSelectedUser(userData);
        setShowUserInfo(false);
    };

    const isTyping = Boolean(userData?.isTyping);
    const hasLastMessage = Boolean(userData?.lastMessage);
    const previewMessage = isTyping
        ? "Typing"
        : hasLastMessage
          ? userData.lastMessage
          : "No chat history";

    const unseenCount = unseenMessages ? unseenMessages[userData._id] : 0;

    return (
        <li
            className={`active-chat-item flex items-end gap-3 p-2 px-3 hover:bg-gray-700 ${selectedUser?._id === userData?._id ? "bg-gray-700" : ""} cursor-pointer rounded-lg trans-3`}
            onClick={handleSelectUser}
        >
            <article className="flex flex-1 min-w-0 items-center gap-3">
                <div className="user-chat-picture w-12 h-12 shrink-0">
                    {/* ======= user's picture ====== */}
                    <img
                        src={
                            userData?.profilePic ||
                            generateAlternativeImage(userData?.fullName)
                        }
                        alt="user's picture"
                        className="w-full h-full rounded-full object-cover"
                    />
                    <UserStatusIndicator isOnline={isOnline} />
                </div>
                {/* ======= user's info ====== */}
                <div className="info flex min-w-0 flex-col gap-1">
                    <h3 className="font-normal truncate">{userData?.fullName}</h3>
                    {isTyping ? (
                        <p className="last-message-preview text-xs text-emerald-300">
                            {previewMessage}
                            <span className="animate-3dots">...</span>
                        </p>
                    ) : (
                        <p
                            className={`last-message-preview text-stone-400 text-xs ${hasLastMessage ? "" : "italic opacity-80"}`}
                        >
                            {previewMessage}
                        </p>
                    )}
                </div>
            </article>

            {/* ======= message details ====== */}
            <div className="msg-details shrink-0 flex flex-col items-end gap-2">
                {unseenCount > 0 ? (
                    <span className="notification-label w-5 h-5 bg-(--primary-color) text-white text-xs flex items-center justify-center rounded-full">
                        {unseenCount}
                    </span>
                ) : null}
                <div className="date text-stone-400 text-[0.7rem]">
                    {timeFormatter(userData?.time || userData?.updatedAt)}
                </div>
            </div>

            {hasLastMessage && !isTyping ? (
                <div className="active-chat-item-tooltip" role="tooltip">
                    {userData.lastMessage}
                </div>
            ) : null}
        </li>
    );
};

export default ActiveChatsItem;
