import generateAlternativeImage from "../../../utils/functions/generateAlternativeImage.js";
import UserStatusIndicator from "../../common/UserStatusIndicator";

const UserInfo = ({ user }) => {   // replace static data with the user data passed from the parent component (RightSidebar) to display the selected user's info
  return (
    <div className="flex flex-col gap-2 items-center p-5">
      <div className="user-chat-picture w-29 h-29">
        <img src={user.profilePic || generateAlternativeImage(user.name)} alt="User avatar" className="w-full h-full rounded-full border-4 border-gray-400/20" />
        <UserStatusIndicator isOnline={user?.isOnline} showTooltip={false} />
      </div>
        <h2 className="font-normal text-lg mt-2 text-stone-300">{user.name}</h2>
        <p className="text-stone-300 text-[0.95rem] font-light max-w-[80%] sm:max-w-[90%] text-center">{user.bio}</p>
    </div>
  )
}

export default UserInfo
