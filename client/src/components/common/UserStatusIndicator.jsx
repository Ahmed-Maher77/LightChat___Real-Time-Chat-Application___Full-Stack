const UserStatusIndicator = ({
    isOnline,
    showTooltip = true,
    className = "",
    mainCustomStyles = {},
    childCustomStyles = {}
}) => {
    const statusLabel = isOnline ? "online" : "offline";

    return (
        <div
            className={`status-indicator ${className}`.trim()}
            aria-label={`User is ${statusLabel}`}
            style={{ ...mainCustomStyles }}
        >
            <span className={`status-dot ${statusLabel}`} style={{ ...childCustomStyles }} />
            {showTooltip ? (
                <span className="status-tooltip">{statusLabel}</span>
            ) : null}
        </div>
    );
};

export default UserStatusIndicator;
