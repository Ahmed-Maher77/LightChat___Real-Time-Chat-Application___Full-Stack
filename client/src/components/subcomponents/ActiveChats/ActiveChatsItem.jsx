import generateAlternativeImage from "../../../utils/functions/generateAlternativeImage";
import timeFormatter from "../../../utils/functions/timeFormatter";
import truncateText from "../../../utils/functions/truncateText";

const ActiveChatsItem = ({ isOnline, onSelect, userData }) => {
    const handleSelectUser = () => {   // pass the user data here instead of just calling onSelect() and then use it in the ChatContainer to display the user's info and messages
        onSelect(userData);
    };

    return (
        <li className="flex items-end justify-between p-2 px-3 hover:bg-gray-700 cursor-pointer rounded-lg trans-3" onClick={handleSelectUser}>
            <article className="flex items-center gap-3">
                <div
                    className={`user-chat-picture w-12 shrink-0 ${isOnline ? "online" : "offline"}`}
                >
                    {/* ======= user's picture ====== */}
                    <img
                        src={userData?.profilePic || generateAlternativeImage(userData?.name)}
                        alt="user's picture"
                        className="w-full rounded-full"
                    />
                </div>
                {/* ======= user's info ====== */}
                <div className="info flex flex-col gap-1">
                    <h3 className="font-normal">{userData?.name}</h3>
                    <p className="text-stone-400 text-xs">
                        {truncateText(userData?.lastMessage, 30)}
                    </p>
                </div>
            </article>
            
            {/* ======= message details ====== */}
            <div className="msg-details flex flex-col items-center gap-2">
                <span className="notification-label w-5 h-5 bg-(--primary-color) text-white text-xs flex items-center justify-center rounded-full">
                    3
                </span>
                <div className="date text-stone-400 text-[0.7rem]">{timeFormatter(userData?.time)}</div>
            </div>
        </li>
    );
};

export default ActiveChatsItem;
