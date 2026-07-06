import generateAlternativeImage from "../../../../utils/functions/generateAlternativeImage";

const MessageItem = ({
    message,
    isMine,
    timeFormatter,
    userData,
    selectedUser,
    isSameSenderAsPrev,
}) => {
    if (!message.text && !message.image && !message.file) return null;

    const senderPic = isMine 
        ? (userData?.profilePic || generateAlternativeImage(userData?.fullName))
        : (selectedUser?.profilePic || generateAlternativeImage(selectedUser?.fullName));

    const senderName = isMine
        ? (userData?.fullName || "Me")
        : (selectedUser?.fullName || "User");

    return (
        <>
            {/* ======= user's picture ====== */}
            {!isSameSenderAsPrev && (
                <img
                    className={`w-9 h-9 rounded-full object-cover ${isMine ? "order-2" : ""}`}
                    src={senderPic}
                    alt={`${senderName}'s picture`}
                />
            )}

            {/* ======= message ====== */}

            <div className={`message ${isMine ? "right" : ""} ${isSameSenderAsPrev ? (isMine? "me-13 no-arrow" : "ms-13 no-arrow") : ""}`}>
                <div className="bg-gray-800 text-white p-4 rounded-lg flex flex-col gap-2">
                    {message.image && (
                        <img src={message.image} alt="shared image" className="max-w-full rounded-md object-contain max-h-[300px]" />
                    )}

                    {message.file && (
                        <a 
                            href={message.file} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 underline font-medium text-sm py-1"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span>Download Shared File</span>
                        </a>
                    )}

                    {message.text && <p className="break-words whitespace-pre-wrap">{message.text}</p>}
                </div>
                {/* ======= message info ====== */}
                <div
                    className={`message-info flex ${isMine ? "" : "flex-row-reverse"} justify-end items-center gap-3 mt-1.5`}
                >
                    <time
                        className="text-sm text-gray-400"
                        dateTime={message.createdAt}
                    >
                        {timeFormatter(message.createdAt)}
                    </time>
                    <div className="flex -space-x-[12px]">
                        {Array(message.seen ? 2 : 1)
                            .fill(0)
                            .map((_, idx) => (
                                <svg
                                    key={idx}
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
