const NotFoundActions = ({ onBack, onHome }) => {
    return (
        <nav aria-label="Not found actions" className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <button
                onClick={onBack}
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-gray-500/80 bg-gray-900/55 px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-800/80"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
                </svg>
                Go Back
            </button>
            <button
                onClick={onHome}
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-blue-600/90 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-500"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5 12 3l9 7.5" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 9.75V21h13.5V9.75" />
                </svg>
                Go To Home
            </button>
        </nav>
    );
};

export default NotFoundActions;