import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";
import assets from "../assets/assets";
import UserInfo from "./subcomponents/RightSidebar/UserInfo";

const RightSidebar = ({ selectedUser, onBack, isClosing = false }) => {
    const { messages } = useContext(ChatContext);
    const { logout } = useContext(AuthContext);

    // Extract real media files from messages
    const media = messages
        .filter((msg) => msg.image)
        .map((msg) => msg.image);

    return (
        <div
            id="RightSidebar"
            className={`max-sm:w-full max-sm:min-w-full max-sm:max-w-full min-w-75 max-w-75 h-full p-5 shrink-0 bg-gray-900/80 backdrop-blur-sm max-xl:absolute max-xl:top-0 max-xl:right-0 z-20 ${isClosing ? "right-sidebar-exit" : ""}`}
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

            <hr className="my-3 border-gray-500" />

            <div className="flex flex-col gap-3">
                <div id="media-section">
                    <h2 className="text-start mt-3 mb-1 text-gray-300">
                        Media available
                    </h2>
                    {media.length === 0 && (
                        <p className="text-center text-gray-400">
                            No media available
                        </p>
                    )}
                    {media.length > 0 && (
                        <section className="grid grid-cols-2 gap-2.5 overflow-y-auto max-h-[45vh] pt-2 pb-4">
                            {media.map((item, index) => (
                                <img
                                    key={index}
                                    src={item}
                                    alt={`Media ${index + 1}`}
                                    className="w-full h-auto rounded-lg cursor-pointer hover:brightness-75 transition duration-300 ease-in-out"
                                    onClick={() => window.open(item, "_blank")}
                                />
                            ))}
                        </section>
                    )}
                </div>
                <button className="w-full px-3 py-2 border border-red-500 hover:text-red-500 hover:bg-transparent bg-red-600 text-white cursor-pointer rounded-full transition duration-300 ease-in-out" onClick={logout}>
                    Logout
                </button>
            </div>
        </div>
    );
};

export default RightSidebar;
