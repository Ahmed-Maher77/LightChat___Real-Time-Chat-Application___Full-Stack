import { useEffect, useRef, useState } from "react";

const AttachFileNotice = ({ onClose }) => {
    const [isClosing, setIsClosing] = useState(false);
    const closeTimeoutRef = useRef(null);

    useEffect(() => {
        return () => {
            if (closeTimeoutRef.current) {
                clearTimeout(closeTimeoutRef.current);
            }
        };
    }, []);

    const startClose = () => {
        if (isClosing) {
            return;
        }

        setIsClosing(true);
        closeTimeoutRef.current = setTimeout(() => {
            onClose?.();
        }, 240);
    };

    return (
        <div
            className={`fixed inset-0 z-40 flex items-center justify-center bg-black/70 p-4 ${isClosing ? "overlay-fade-out" : "overlay-fade-in"}`}
            onClick={startClose}
        >
            <div
                className={`w-full max-w-md rounded-2xl border border-white/12 bg-gray-900/95 p-5 text-stone-100 shadow-2xl shadow-black/40 ${isClosing ? "overlay-content-exit" : "overlay-content-enter"}`}
                onClick={(event) => event.stopPropagation()}
            >
                <h3 className="text-lg font-medium text-white">Feature Temporarily Unavailable</h3>
                <p className="mt-4 text-sm leading-5 text-stone-300">
                    File attachment is currently disabled due to limited resources. We are working to enable it as soon as possible.
                </p>
                <div className="mt-4 flex justify-end">
                    <button
                        type="button"
                        onClick={startClose}
                        className="rounded-full bg-blue-600/90 px-4 py-2 text-sm font-medium text-white shadow-sm shadow-blue-600/20 transition hover:bg-blue-500 hover:shadow-blue-500/25 cursor-pointer"
                    >
                        Got it
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AttachFileNotice;
