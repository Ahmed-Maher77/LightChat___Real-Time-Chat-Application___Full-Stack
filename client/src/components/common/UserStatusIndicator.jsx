const UserStatusIndicator = ({
    isOnline,
    showTooltip = true,
    className = "",
}) => {
    const statusLabel = isOnline ? "online" : "offline";

    return (
        <div
            className={`status-indicator ${className}`.trim()}
            aria-label={`User is ${statusLabel}`}
        >
            <span className={`status-dot ${statusLabel}`} />
            {showTooltip ? (
                <span className="status-tooltip">{statusLabel}</span>
            ) : null}
        </div>
    );
};

export default UserStatusIndicator;
