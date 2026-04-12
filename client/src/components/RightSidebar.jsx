import UserInfo from "./subcomponents/RightSidebar/UserInfo";

const RightSidebar = ({ selectedUser, onBack }) => {
    return (
        <div id="RightSidebar" className="max-sm:w-full max-sm:min-w-full max-sm:max-w-full min-w-75 max-w-75 h-full p-5 shrink-0 backdrop-blur-3xl max-xl:absolute max-xl:top-0 max-xl:right-0 z-20">
            <button
                type="button"
                aria-label="Close user info"
                onClick={onBack}
                className="mb-3 rounded-full p-2 hover:bg-gray-700/60 transition xl:hidden"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-6 w-6 text-stone-200 cursor-pointer"
                    aria-hidden="true"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
                </svg>
            </button>
            <UserInfo user={selectedUser} />
        </div>
    );
};

export default RightSidebar;
