const ChatContainer = ({ onBack }) => {
    return (
        <div id="ChatContainer" className="absolute inset-0 h-full w-full flex-1 min-w-0 sm:static sm:inset-auto z-10 backdrop-blur-2xl bg-gray-900">
            <button
                type="button"
                aria-label="Back to chats"
                onClick={onBack}
                className="absolute left-4 top-4 z-20 rounded-full p-2 hover:bg-gray-700/60 transition sm:hidden"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-6 w-6 text-stone-200 cursor-pointer"
                    aria-hidden="true"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
                </svg>
            </button>
            ChatContainer
        </div>
    );
};

export default ChatContainer;
