const HeaderBackButton = ({ onBack }) => {
    return (
        <button
            type="button"
            aria-label="Back to chats"
            onClick={onBack}
            className="rounded-full p-2 transition hover:bg-gray-700/60 scale-110"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-6 w-6 cursor-pointer text-stone-200"
                aria-hidden="true"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 18l-6-6 6-6"
                />
            </svg>
        </button>
    );
};

export default HeaderBackButton;
