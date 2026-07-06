import { useState } from "react";
import { useNavigate } from "react-router-dom";
import assets from "../assets/assets";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const ProfilePage = () => {
    const { authUser, updateProfile } = useContext(AuthContext);

    const [selectedImg, setSelectedImg] = useState(null);
    const navigate = useNavigate();
    const [name, setName] = useState(authUser?.fullName || "");
    const [bio, setBio] = useState(authUser?.bio || "Hi Everyone! I'm using LightChat.");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!selectedImg) {
            await updateProfile({ fullName: name, bio });
            navigate("/");
            return;
        }
        const reader = new FileReader();
        reader.onload = async () => {
            const base64Image = reader.result;
            await updateProfile({ fullName: name, bio, profilePic: base64Image });
            navigate("/");
        }
        reader.readAsDataURL(selectedImg);
    }

    const getSourceImage = (selectedImg, profilePic) => {
        if (selectedImg) {
            return URL.createObjectURL(selectedImg);
        } else if (profilePic) {
            return profilePic;
        }
        return null;
    }

    return (
        <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-10">
            <div className="w-full max-w-3xl backdrop-blur-xl bg-gray-900/70 border border-gray-800/80 text-gray-300 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
                {/* ======= Card Header ======= */}
                <div className="p-6 sm:p-8 border-b border-gray-800/80 bg-gray-950/20 flex justify-between items-center">
                    <div>
                        <h2 className="text-xl sm:text-2xl font-semibold text-white">Profile Settings</h2>
                        <p className="text-xs sm:text-sm text-stone-400 mt-1">Manage your public profile information</p>
                    </div>
                    <img className="max-w-10 sm:max-w-12 brightness-90" src={assets.main_logo} alt="logo" />
                </div>

                {/* ======= Form Content ======= */}
                <form className="flex flex-col md:flex-row gap-8 p-6 sm:p-8 items-center md:items-start" onSubmit={handleSubmit}>
                    
                    {/* ======= Left Column: Avatar Uploader ======= */}
                    <div className="flex flex-col items-center justify-center gap-3 w-full md:w-1/3 md:pt-4 md:border-r border-gray-800/50 md:pr-8">
                        <div className="relative group w-32 h-32 sm:w-36 sm:h-36">
                            <img
                                src={
                                    getSourceImage(selectedImg, authUser?.profilePic) || assets.avatar_icon
                                }
                                alt="Avatar"
                                className="w-full h-full rounded-full object-cover border-4 border-gray-800 group-hover:brightness-75 transition duration-300"
                            />
                            
                            <label
                                htmlFor="avatar"
                                className="absolute inset-0 flex flex-col gap-1 items-center justify-center bg-black/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                                </svg>
                                <span className="text-[10px] text-gray-300 font-medium">Change Photo</span>
                            </label>
                            
                            <input
                                onChange={(e) => setSelectedImg(e.target.files[0])}
                                type="file"
                                hidden
                                id="avatar"
                                accept=".png, .jpg, .jpeg, .webp"
                            />
                        </div>
                        <span className="text-xs text-stone-400 font-medium">Select new profile image</span>
                    </div>

                    {/* ======= Right Column: Inputs ======= */}
                    <div className="flex flex-col gap-5 flex-1 w-full">
                        {/* Email Field (Display Only) */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs sm:text-sm text-stone-400 font-medium pl-1">Email Address</label>
                            <input
                                type="email"
                                value={authUser?.email || ""}
                                disabled
                                className="p-2.5 sm:p-3 bg-gray-950/40 border border-gray-800/80 text-stone-400 rounded-lg cursor-not-allowed outline-none text-sm font-light"
                            />
                        </div>

                        {/* Name Field */}
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="name" className="text-xs sm:text-sm text-stone-300 font-medium pl-1">Full Name</label>
                            <input
                                onChange={(e) => setName(e.target.value)}
                                className="p-2.5 sm:p-3 bg-gray-950/20 border border-gray-800 hover:border-gray-700 focus:border-indigo-500 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500 text-stone-200 transition-all duration-300 text-sm"
                                type="text"
                                placeholder="Your name"
                                name="name"
                                id="name"
                                value={name}
                                required
                            />
                        </div>

                        {/* Bio Field */}
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="bio" className="text-xs sm:text-sm text-stone-300 font-medium pl-1">Bio</label>
                            <textarea
                                onChange={(e) => setBio(e.target.value)}
                                className="p-2.5 sm:p-3 bg-gray-950/20 border border-gray-800 hover:border-gray-700 focus:border-indigo-500 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500 text-stone-200 transition-all duration-300 text-sm resize-none"
                                placeholder="Write your bio..."
                                name="bio"
                                id="bio"
                                value={bio}
                                rows={3}
                                required
                            ></textarea>
                        </div>

                        {/* Buttons Footer */}
                        <div className="flex gap-4 mt-2">
                            <button
                                type="button"
                                onClick={() => navigate("/")}
                                className="flex-1 py-2.5 sm:py-3 border border-gray-800 hover:border-gray-700 text-stone-300 rounded-lg hover:bg-gray-800/40 transition duration-300 cursor-pointer text-sm font-medium text-center"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="flex-1 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:brightness-110 transition duration-300 cursor-pointer text-sm font-medium shadow-lg shadow-indigo-500/10"
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProfilePage;
