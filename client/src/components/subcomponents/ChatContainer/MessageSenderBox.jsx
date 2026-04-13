import { useEffect, useRef, useState } from "react";
import AttachmentToggleButton from "./MessageSenderBox/AttachmentToggleButton";
import AttachmentOptionsMenu from "./MessageSenderBox/AttachmentOptionsMenu";
import AttachFileNotice from "./MessageSenderBox/AttachFileNotice";
import MessageInputTextarea from "./MessageSenderBox/MessageInputTextarea";
import SendMessageButton from "./MessageSenderBox/SendMessageButton";

const MessageSenderBox = () => {
    const [message, setMessage] = useState("");
    const [showOptions, setShowOptions] = useState(false);
    const [isTextareaOverflowing, setIsTextareaOverflowing] = useState(false);
    const [showAttachFileNotice, setShowAttachFileNotice] = useState(false);
    const optionsWrapperRef = useRef(null);
    const textareaRef = useRef(null);
    const TEXTAREA_MAX_HEIGHT = 128;

    useEffect(() => {
        const handlePointerDownOutside = (event) => {
            if (!showOptions) {
                return;
            }

            if (optionsWrapperRef.current && !optionsWrapperRef.current.contains(event.target)) {
                setShowOptions(false);
            }
        };

        document.addEventListener("mousedown", handlePointerDownOutside);

        return () => {
            document.removeEventListener("mousedown", handlePointerDownOutside);
        };
    }, [showOptions]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!message.trim()) {
            return;
        }

        // Placeholder: replace with real send-message flow.
        setMessage("");
        setShowOptions(false);

        if (textareaRef.current) {
            textareaRef.current.style.height = "40px";
        }

        setIsTextareaOverflowing(false);
    };

    const handleMessageChange = (event) => {
        const nextValue = event.target.value;
        setMessage(nextValue);

        const textareaElement = event.target;
        textareaElement.style.height = "40px";
        textareaElement.style.height = `${Math.min(textareaElement.scrollHeight, TEXTAREA_MAX_HEIGHT)}px`;

        setIsTextareaOverflowing(textareaElement.scrollHeight > TEXTAREA_MAX_HEIGHT);
    };

    const handleTextareaKeyDown = (event) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            if (message.trim()) {
                handleSubmit(event);
            }
        }
    };

    const handleAttachFileClick = () => {
        setShowOptions(false);
        setShowAttachFileNotice(true);
    };

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="absolute bottom-5 left-1/2 z-10 flex w-[calc(100%-2.5rem)] -translate-x-1/2 items-end gap-2"
            >
                <div ref={optionsWrapperRef} className="relative">
                    <AttachmentToggleButton onToggle={() => setShowOptions((prev) => !prev)} />

                    {showOptions ? <AttachmentOptionsMenu onAttachFile={handleAttachFileClick} /> : null}
                </div>

                <MessageInputTextarea
                    textareaRef={textareaRef}
                    message={message}
                    onChange={handleMessageChange}
                    onKeyDown={handleTextareaKeyDown}
                    isTextareaOverflowing={isTextareaOverflowing}
                />

                <SendMessageButton disabled={!message.trim()} />
            </form>

            {showAttachFileNotice ? <AttachFileNotice onClose={() => setShowAttachFileNotice(false)} /> : null}
        </>
    );
};

export default MessageSenderBox;
