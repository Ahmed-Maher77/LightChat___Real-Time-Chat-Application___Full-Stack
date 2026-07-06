import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext";
import generateAlternativeImage from "../../../utils/functions/generateAlternativeImage.js";
import UserStatusIndicator from "../../common/UserStatusIndicator";

const UserInfo = ({ user }) => {
    const { onlineUsers } = useContext(AuthContext);
    const isOnline = user ? onlineUsers.includes(user._id) : false;

    return (
        <div className="flex flex-col gap-2 items-center p-5">
            <div className="user-chat-picture inline-block w-29 h-29">
                <img
                    src={user?.profilePic || generateAlternativeImage(user?.fullName || "User")}
                    alt="User avatar"
                    className="w-full h-full rounded-full border-4 border-gray-400/20"
                />
                <UserStatusIndicator
                    isOnline={isOnline}
                    showTooltip={false}
                    className="status-indicator--sidebar"
                    mainCustomStyles={{left: "15px", bottom: "0px"}}
                    childCustomStyles={{width: "22px", borderWidth: "4px", borderColor: "#2b3345"}}
                />
            </div>
            <h2 className="font-normal text-lg mt-2 text-stone-300">
                {user?.fullName}
            </h2>
            <p className="text-stone-300 text-[0.95rem] font-light max-w-[80%] sm:max-w-[90%] text-center">
                {user?.bio || "No bio available"}
            </p>
        </div>
    );
};

export default UserInfo;
