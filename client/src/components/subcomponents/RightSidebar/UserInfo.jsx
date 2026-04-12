import assets from "../../../assets/assets";

const UserInfo = ({ user }) => {   // replace static data with the user data passed from the parent component (RightSidebar) to display the selected user's info
  return (
    <div className="flex flex-col gap-2 items-center p-5 max-sm:mt-0 mt-10">
      <img src={assets.profile_martin} alt="User avatar" className="w-29 h-29 rounded-full border-4 border-gray-400/20" />
        <h2 className="font-normal text-lg mt-2 text-stone-300">Ahmed Maher</h2>
        <p className="text-stone-300 text-[0.95rem] font-light max-w-[80%] text-center">The direction is more important than the speed</p>
    </div>
  )
}

export default UserInfo
