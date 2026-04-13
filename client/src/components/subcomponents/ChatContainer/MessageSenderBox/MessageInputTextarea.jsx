const MessageInputTextarea = ({
    message,
    textareaRef,
    isTextareaOverflowing,
    onChange,
    onKeyDown,
}) => {
    return (
        <textarea
            ref={textareaRef}
            name="type-message"
            id="type-message"
            rows={1}
            placeholder="Type a message..."
            value={message}
            onChange={onChange}
            onKeyDown={onKeyDown}
            className={`h-10 max-h-32 flex-1 resize-none rounded-2xl border border-white/8 bg-gray-800/70 px-4 py-2.5 text-sm leading-5 text-stone-100 outline-none transition placeholder:text-stone-400 focus:border-blue-500/60 ${isTextareaOverflowing ? "overflow-y-auto" : "overflow-y-hidden"}`}
        />
    );
};

export default MessageInputTextarea;
