import assets from "../../assets/assets";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const OverlayScreenWithCloseAbility = ({ children, onClose }) => {
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

    const handleOverlayClick = (e) => {
        if (e.target.id === "overlay-screen-with-close-ability") {
            startClose();
        }
    };

    return createPortal(
        <div
            id="overlay-screen-with-close-ability"
            className={`fixed inset-0 bg-black/90 backdrop-blur-sm z-[9999] ${isClosing ? "overlay-fade-out" : "overlay-fade-in"}`}
            onClick={handleOverlayClick}
        >
            <div className="overlay-modal-shell">
                <div className={`w-full ${isClosing ? "overlay-content-exit" : "overlay-content-enter"}`}>{children}</div>
            </div>
            <button
                type="button"
                aria-label="Close overlay"
                onClick={startClose}
                className={`absolute top-8 right-8 z-30 cursor-pointer ${isClosing ? "overlay-content-exit" : "overlay-content-enter"}`}
            >
                <img src={assets.x_icon} alt="" className="h-8 w-8 brightness-0 invert" />
            </button>
        </div>,
        document.body
    );
};

export default OverlayScreenWithCloseAbility;
