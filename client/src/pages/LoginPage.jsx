import { useState } from "react";
import assets from "../assets/assets";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const LoginPage = () => {
    const [currentState, setCurrentState] = useState("Login");
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        bio: "",
    });
    const [isDataSubmitted, setIsDataSubmitted] = useState(false);

    const { login } = useContext(AuthContext);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const { fullName, email, password, bio } = formData;
        if (currentState === "Sign Up" && !isDataSubmitted) {
            setIsDataSubmitted(true);
            return;
        }
        setIsDataSubmitted(true);
        login(currentState === "Sign Up" ? "signup" : "login", {
            fullName, email, password, bio
        })
    };

    return (
        <div className="min-h-screen bg-cover bg-center flex items-center justify-center gap-8 sm:gap-12 lg:gap-20 sm:justify-evenly max-sm:flex-col max-sm:py-10 backdrop:blur-2xl">
            {/* ======== Left Side ======== */}
            <div className="logo flex flex-col items-center justify-center gap-4">
                <img src={assets.main_logo} alt="logo" className="w-[100px] sm:w-[120px]" />
                <h1 className="text-3xl sm:text-4xl font-bold text-white mt-4">
                    LightChat
                </h1>
                <p className="text-gray-300 mt-2 text-sm sm:text-base text-center max-w-[280px] sm:max-w-none">
                    Connect with friends and the world around you.
                </p>
            </div>
            {/* ======== Right Side ======== */}
            <form onSubmit={onSubmitHandler} className="border-2 bg-white/8 text-white border-gray-500 p-6 sm:p-8 flex flex-col gap-6 rounded-lg shadow-lg w-full max-sm:w-[88%] sm:max-w-md lg:max-w-lg">
                <h2 className="font-medium text-2xl flex justify-between items-center">
                    {currentState}
                    {isDataSubmitted && (
                        <img
                            src={assets.arrow_icon}
                            alt="User Icon"
                            className="w-5 cursor-pointer"
                            onClick={() => setIsDataSubmitted(false)}
                        />
                    )}
                </h2>

                {currentState === "Sign Up" && !isDataSubmitted && (
                    <input
                        type="text"
                        className="p-2 border border-gray-500 rounded-md focus:outline-none"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                fullName: e.target.value,
                            })
                        }
                        required
                    />
                )}

                {!isDataSubmitted && (
                    <>
                        <input
                            type="email"
                            placeholder="Email Address"
                            required
                            className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    email: e.target.value,
                                })
                            }
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            required
                            className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            value={formData.password}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    password: e.target.value,
                                })
                            }
                        />
                    </>
                )}

                {currentState === "Sign Up" && isDataSubmitted && (
                    <textarea
                        rows={4}
                        name="bio"
                        id="bio"
                        placeholder="Tell us about yourself..."
                        className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        value={formData.bio}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                bio: e.target.value,
                            })
                        }
                        required
                    ></textarea>
                )}

                <button
                    type="submit"
                    className="py-3 bg-gradient-to-r from-purple-400 to-violet-600 text-white rounded-md cursor-pointer"
                >
                    {currentState === "Sign Up"
                        ? "Create Account"
                        : "Login Now"}
                </button>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <input type="checkbox" />
                    <p>Agree to the terms of use & privacy policy.</p>
                </div>

                <div className="flex flex-col gap-2">
                    {currentState === "Sign Up" ? (
                        <p className="text-sm text-gray-600">
                            Already have an account?{" "}
                            <span
                                className="font-medium text-violet-500 cursor-pointer"
                                onClick={() => {setCurrentState("Login"); setIsDataSubmitted(false);}}
                            >
                                Login here
                            </span>
                        </p>
                    ) : (
                        <p className="text-sm text-gray-600">
                            Don't have an account?{" "}
                            <span className="font-medium text-violet-500 cursor-pointer" onClick={() => setCurrentState("Sign Up")}>
                                Sign up here
                            </span>
                        </p>
                    )}
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
