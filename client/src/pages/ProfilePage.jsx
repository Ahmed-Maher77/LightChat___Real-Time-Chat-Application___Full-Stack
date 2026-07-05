import { useState } from "react";
import { useNavigate } from "react-router-dom";
import assets from "../assets/assets";

const ProfilePage = () => {
    const [selectedImg, setSelectedImg] = useState(null);
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [bio, setBio] = useState("Hi Everyone! I'm using LightChat.");

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/");
    }

    return (
        <div className="min-h-screen bg-cover bg-no-repeat flex items-center justify-center flex-col-reverse gap-10">
            <div className="w-5/6 max-w-2xl backdrop:blur-2xl text-gray-300 border-2 border-gray-600 flex items-center justify-between max-sm:flex-col-reverse rounded-lg">
                <form className="flex flex-col gap-5 p-10 flex-1" onSubmit={handleSubmit}>
                    <h3 className="text-lg">Profile details</h3>
                    <label
                        htmlFor="avatar"
                        className="flex items-center gap-3 cursor-pointer"
                    >
                        {/* ======= avatar input ====== */}
                        <input
                            onChange={(e) => setSelectedImg(e.target.files[0])}
                            type="file"
                            hidden
                            id="avatar"
                            accept=".png, .jpg, .jpeg, .webp"
                            className="text-gray-300 bg-gray-700 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        {/* ======= avatar image ====== */}
                        <img
                            src={
                                selectedImg
                                    ? URL.createObjectURL(selectedImg)
                                    : assets.avatar_icon
                            }
                            alt="Avatar"
                            className={`w-12 h-12 ${selectedImg && "rounded-full"}`}
                        />
                        upload profile image
                    </label>

                    {/* ======= name and bio inputs ====== */}
                    <input
                        onChange={(e) => setName(e.target.value)}
                        className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text"
                        placeholder="Your name"
                        name="name"
                        id="name"
                        value={name}
                        required
                    />

                    {/* ======= bio input ====== */}
                    <textarea
                        onChange={(e) => setBio(e.target.value)}
                        className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Write your bio..."
                        name="bio"
                        id="bio"
                        value={bio}
                        row={4}
                        required
                    ></textarea>

                    <button

                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors cursor-pointer"
                        type="submit"
                    >
                        Save
                    </button>
                </form>
            </div>
                <img className="max-w-24 mx-10 max-sm:mt-10" src={assets.main_logo} alt="logo" />
        </div>
    );
};

export default ProfilePage;
