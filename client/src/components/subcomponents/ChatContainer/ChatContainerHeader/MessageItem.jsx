const MessageItem = ({
    message,
    isMine,
    timeFormatter,
    userData,
    selectedUser,
    isSameSenderAsPrev,
}) => {
    if (!message.text && !message.image) return;

    return (
        <>
            {/* ======= user's picture ====== */}
            {!isSameSenderAsPrev && (
                <img
                    className={`w-9 h-9 rounded-full object-cover ${isMine ? "order-2" : ""}`}
                    src={`${isMine ? userData.picture : selectedUser?.profilePic}`}
                    alt={`${isMine ? userData.name : selectedUser?.fullName}'s picture`}
                />
            )}

            {/* ======= message ====== */}

            <div className={`message ${isMine ? "right" : ""} ${isSameSenderAsPrev ? (isMine? "me-13 no-arrow" : "ms-13 no-arrow") : ""}`}>
                <div className="bg-gray-800 text-white p-4 rounded-lg flex flex-col gap-2">
                    {message.image && (
                        <img src={message?.image} alt="shared image" />
                    )}

                    {message.text && <p className="">{message.text}</p>}
                </div>
                {/* ======= message info ====== */}
                <div
                    className={`message-info flex ${isMine ? "" : "flex-row-reverse"} justify-end items-center gap-3 mt-1.5`}
                >
                    <time
                        className="text-sm text-gray-400"
                        datetime={message.createdAt}
                    >
                        {timeFormatter(message.createdAt)}
                    </time>
                    <div className="flex -space-x-[12px]">
                        {Array(message.seen ? 2 : 1)
                            .fill(0)
                            .map((_, idx) => (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="text-green-500"
                                >
                                    <path d="M9 15.59 4.71 11.3 3.3 12.71l5 5c.2.2.45.29.71.29s.51-.1.71-.29l11-11-1.41-1.41L9.02 15.59Z"></path>
                                </svg>
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MessageItem;
