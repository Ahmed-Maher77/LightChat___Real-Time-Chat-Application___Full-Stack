const menuItemClass = "flex w-full cursor-pointer items-center gap-2 rounded-lg px-2.5 py-2 text-left text-sm text-stone-200 transition hover:bg-gray-700/80";

const AttachmentOptionsMenu = ({ onAttachFile }) => {
    return (
        <div className="absolute bottom-12 left-0 w-44 overflow-hidden rounded-xl border border-white/12 bg-gray-900/96 p-1.5 shadow-2xl shadow-black/40">
            {/* ====== Attach File ====== */}
            <button type="button" className={menuItemClass} onClick={onAttachFile}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-[1.1rem] w-[1.1rem]" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.44 11.05l-8.49 8.49a5 5 0 01-7.07-7.07l8.49-8.49a3.5 3.5 0 014.95 4.95l-8.49 8.49a2 2 0 01-2.83-2.83l7.78-7.78" />
                </svg>
                <span>Attach File</span>
            </button>

            {/* =========== Attach Image =========== */}
            <button type="button" className={menuItemClass}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-[1.1rem] w-[1.1rem]" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
                    <circle cx="9" cy="10" r="1.5" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 16l-5-5-4 4-2-2-4 4" />
                </svg>
                <span>Attach Image</span>
            </button>

        
            {/* =========== Record Voice =========== */}
            <button type="button" className={menuItemClass}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-[1.1rem] w-[1.1rem]" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a4 4 0 004-4V8a4 4 0 10-8 0v6a4 4 0 004 4z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 12v2a7 7 0 01-14 0v-2" />
                </svg>
                <span>Record Voice</span>
            </button>
        </div>
    );
};

export default AttachmentOptionsMenu;
