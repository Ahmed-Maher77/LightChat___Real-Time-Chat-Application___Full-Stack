import assets from "../../../assets/assets";
import truncateText from "../../../utils/functions/truncateText";

const ActiveChatsItem = ({ isOnline, onSelect, userData }) => {
    const handleSelectUser = () => {   // pass the user data here instead of just calling onSelect() and then use it in the ChatContainer to display the user's info and messages
        onSelect(userData);
    };

    return (
        <li className="flex items-end justify-between p-2 px-[13px] hover:bg-gray-700 cursor-pointer rounded-lg trans-3" onClick={handleSelectUser}>
            <article className="flex items-center gap-3">
                <div
                    className={`user-chat-picture w-12 flex-shrink-0 ${isOnline ? "online" : "offline"}`}
                >
                    {/* ======= user's picture ====== */}
                    <img
                        src={assets.profile_martin}
                        alt="user's picture"
                        className="w-full rounded-full"
                    />
                </div>
                {/* ======= user's info ====== */}
                <div className="info flex flex-col gap-1">
                    <h3 className="font-normal">Ahmed Maher</h3>
                    <p className="text-stone-400 text-xs">
                        {truncateText("Hey, how are you?", 30)}
                    </p>
                </div>
            </article>
            
            {/* ======= message details ====== */}
            <div className="msg-details flex flex-col items-center gap-2">
                <span className="notification-label w-5 h-5 bg-(--primary-color) text-white text-xs flex items-center justify-center rounded-full">
                    3
                </span>
                <div className="date text-stone-400 text-[0.7rem]">12:00PM</div>{" "}
                {/* this should be dynamic based on the message time: if yeaterday: "yesterday", if today: "12:00AM", otherwise: "14/10/2023" */}
            </div>
        </li>
    );
};

export default ActiveChatsItem;
