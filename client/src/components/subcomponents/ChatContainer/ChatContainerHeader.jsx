import HeaderBackButton from "./ChatContainerHeader/HeaderBackButton";
import HeaderUserInfo from "./ChatContainerHeader/HeaderUserInfo";
import HeaderHelpButton from "./ChatContainerHeader/HeaderHelpButton";
import lastConnectionFormatter from "../../../utils/functions/lastConnectionFormatter";

const ChatContainerHeader = ({ selectedUser, onBack, onToggleUserInfo }) => {
    const handleUserInfoClick = () => {
        onToggleUserInfo();
    };

    const lastConnectionValue = selectedUser?.lastConnectionAt || selectedUser?.time;

    const statusConfig = selectedUser?.isTyping
        ? {
            label: "Typing",
            showDots: true,
            dotClass: "bg-emerald-400 animate-pulse",
            textClass: "text-emerald-300"
        }
        : selectedUser?.isOnline
            ? {
                label: "Online",
                showDots: false,
                dotClass: "bg-emerald-400",
                textClass: "text-emerald-300"
            }
            : {
                label: lastConnectionFormatter(lastConnectionValue),
                showDots: false,
                dotClass: "bg-slate-400",
                textClass: "text-stone-400"
            };

    return (
        <header id="ChatContainerHeader" className="flex gap-5 justify-between border-b-2 border-gray-700">
            <div className="left flex items-center gap-2 py-4">
                <HeaderBackButton onBack={onBack} />
                <HeaderUserInfo
                    selectedUser={selectedUser}
                    statusConfig={statusConfig}
                    onToggleUserInfo={handleUserInfoClick}
                />
            </div>
            
            {/* ======= See User Info ====== */}
            <div className="right flex items-center py-4">
                <HeaderHelpButton onToggleUserInfo={handleUserInfoClick} />
            </div>
        </header>
    );
};

export default ChatContainerHeader;
