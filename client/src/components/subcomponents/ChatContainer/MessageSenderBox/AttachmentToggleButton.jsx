const AttachmentToggleButton = ({ onToggle, disabled }) => {
    return (
        <button
            type="button"
            aria-label="Add attachment"
            onClick={onToggle}
            className={`flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-gray-800/80 text-stone-200 transition hover:bg-gray-700/80 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={disabled}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
                aria-hidden="true"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
            </svg>
        </button>
    );
};

export default AttachmentToggleButton;
