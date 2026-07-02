import { useEffect, useRef, useState } from "react";
import AttachmentToggleButton from "./MessageSenderBox/AttachmentToggleButton";
import AttachmentOptionsMenu from "./MessageSenderBox/AttachmentOptionsMenu";
import AttachFileNotice from "./MessageSenderBox/AttachFileNotice";
import MessageInputTextarea from "./MessageSenderBox/MessageInputTextarea";
import SendMessageButton from "./MessageSenderBox/SendMessageButton";
import pic4 from "../../../assets/pic4.png";

const MessageSenderBox = () => {
    const [message, setMessage] = useState("");
    const [filesUrl, setFilesUrl] = useState({
        imageUrl: null,
        imageName: null,
        fileUrl: null,
        fileName: null
    })
    const [showOptions, setShowOptions] = useState(false);
    const [isTextareaOverflowing, setIsTextareaOverflowing] = useState(false);
    const [isTextareaMultiLine, setIsTextareaMultiLine] = useState(false);
    const [showAttachFileNotice, setShowAttachFileNotice] = useState(false);
    const optionsWrapperRef = useRef(null);
    const textareaRef = useRef(null);
    const formRef = useRef(null);
    const TEXTAREA_SINGLE_LINE_HEIGHT = 40;
    const TEXTAREA_MAX_HEIGHT = 128;

    useEffect(() => {
        const handlePointerDownOutside = (event) => {
            if (!showOptions) {
                return;
            }

            if (
                optionsWrapperRef.current &&
                !optionsWrapperRef.current.contains(event.target)
            ) {
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
        setShowOptions(false);

        if (textareaRef.current) {
            textareaRef.current.style.height = `${TEXTAREA_SINGLE_LINE_HEIGHT}px`;
        }

        setIsTextareaOverflowing(false);
        setIsTextareaMultiLine(false);

        // create a form data object to send the message and files
        const formData = new FormData(formRef.current);
        formData.set("message", message);
        formData.set("file", filesUrl.fileUrl);
        formData.set("image", filesUrl.imageUrl);
        console.log([...formData.entries()]);

        // send to backend server

        setMessage("");

        clearSelectedFiles();
    };

    const handleMessageChange = (event) => {
        const nextValue = event.target.value;
        setMessage(nextValue);

        const textareaElement = event.target;
        textareaElement.style.height = `${TEXTAREA_SINGLE_LINE_HEIGHT}px`;
        textareaElement.style.height = `${Math.min(textareaElement.scrollHeight, TEXTAREA_MAX_HEIGHT)}px`;

        setIsTextareaOverflowing(
            textareaElement.scrollHeight > TEXTAREA_MAX_HEIGHT,
        );
        setIsTextareaMultiLine(
            textareaElement.scrollHeight > TEXTAREA_SINGLE_LINE_HEIGHT,
        );
    };

    const handleTextareaKeyDown = (event) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            if (message.trim()) {
                handleSubmit(event);
            }
        }
    };

    const handleAttachFileClick = async (e) => {
        setShowOptions(false);
        const file = e.target.files[0];
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setFilesUrl(prev => ({...prev, fileUrl: fileReader.result, fileName: file.name}));
        };
        fileReader.readAsDataURL(file);
    };

    const handleAttachImageClick = async (e) => {
        setShowOptions(false);
        const image = e.target.files[0];
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setFilesUrl(prev => ({...prev, imageUrl: fileReader.result, imageName: image.name }));
        };
        fileReader.readAsDataURL(image);
    };

    function clearSelectedFiles() {
        setFilesUrl({
            imageUrl: null,
            fileUrl: null,
            imageName: null,
            fileName: null
        })
    }

    return (
        <>
            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="absolute bottom-0 left-0 z-10 flex flex-col w-full min-h-0 flex-1 backdrop-blur-sm sm:backdrop-blur-xs bg-gray-900/80"
            >
                {/* ====== Selected File Preview ====== */}
                {(filesUrl.imageUrl || filesUrl.fileUrl) && (
                    <figure className="w-[90%] mx-auto pt-6">
                        <button className="px-3 py-2 bg-white text-red-500 rounded-md mb-3 hover:bg-gray-200 transition duration-300 cursor-pointer" onClick={clearSelectedFiles}>Cancel</button>
                        <img src={filesUrl.imageUrl || filesUrl.fileUrl} alt="" className="block h-[400px] max-h-full w-fit mx-auto object-cover" />
                        <p className="text-center mt-1">{filesUrl.fileName || filesUrl.imageName || "Selected File"}</p>
                    </figure>
                )}


                <div className="flex w-full items-end gap-2  p-4">
                    {/* ====== Attachment Options ====== */}
                    <div ref={optionsWrapperRef} className="relative">
                        <AttachmentToggleButton
                            onToggle={() => setShowOptions((prev) => !prev)}
                            disabled={filesUrl.imageUrl || filesUrl.fileUrl}
                        />

                        {showOptions ? (
                            <AttachmentOptionsMenu
                                onAttachFile={handleAttachFileClick}
                                onAttachImage={handleAttachImageClick}
                            />
                        ) : null}
                    </div>

                    {/* ====== Message Input & Send Button ====== */}
                    <MessageInputTextarea
                        textareaRef={textareaRef}
                        message={message}
                        onChange={handleMessageChange}
                        onKeyDown={handleTextareaKeyDown}
                        isTextareaOverflowing={isTextareaOverflowing}
                        isTextareaMultiLine={isTextareaMultiLine}
                    />

                    <SendMessageButton disabled={!message.trim() && !filesUrl.imageUrl && !filesUrl.fileUrl} />
                </div>
            </form>

            {/* ====== Attach File Notice ====== */}
            {showAttachFileNotice ? (
                <AttachFileNotice
                    onClose={() => setShowAttachFileNotice(false)}
                />
            ) : null}
        </>
    );
};

export default MessageSenderBox;
