import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
    const [selectedImg, setSelectedImg] = useState(null);
    const navigate = useNavigate();
    const [name, setName] = useState("Ahmed Maher");
    const [bio, setBio] = useState("Hi Everyone! I'm Ahmed, I use LightChat.");

    return (
        <div className="min-h-screen bg-cover bg-no-repeat flex items-center justify-center">
            <div className="w-5/6 max-w-2xl backdrop:blur-2xl text-gray-300 border-2 border-gray-600 flex items-center justify-between max-sm:flex-col-reverse rounded-lg">
                <form className="flex flex-col gap-5 p-10 flex-1">
                    <h3 className="text-lg">Profile details</h3>
                    <label htmlFor="avatar" className="flex items-center gap-3 cursor-pointer">
                        <span>Avatar</span>
                        <input type="file" hidden id="avatar" accept=".png, .jpg, .jpeg, .webp" className="text-gray-300 bg-gray-700 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </label>
                </form>
                <img src="" alt="" />
            </div>
        </div>
    );
};

export default ProfilePage;