import assets from "../assets/assets";
import UserInfo from "./subcomponents/RightSidebar/UserInfo";

const RightSidebar = ({ selectedUser, onBack, isClosing = false }) => {
    return (
        <div
            id="RightSidebar"
            className={`max-sm:w-full max-sm:min-w-full max-sm:max-w-full min-w-75 max-w-75 h-full p-5 shrink-0 bg-gray-900/80 backdrop-blur-xs max-xl:absolute max-xl:top-0 max-xl:right-0 z-20 ${isClosing ? "right-sidebar-exit" : ""}`}
        >
            <button
                type="button"
                aria-label="Close user info"
                onClick={onBack}
                className="mb-3 rounded-full p-2 hover:bg-gray-700/60 transition"
            >
                <img
                    src={assets.x_icon}
                    alt="Close user info"
                    className="h-6 w-6 cursor-pointer brightness-0 invert"
                />
            </button>
            <UserInfo user={selectedUser} />
        </div>
    );
};

export default RightSidebar;
