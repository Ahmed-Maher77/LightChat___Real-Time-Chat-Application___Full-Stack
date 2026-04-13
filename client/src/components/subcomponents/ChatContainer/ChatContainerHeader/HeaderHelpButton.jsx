import assets from "../../../../assets/assets";

const HeaderHelpButton = ({ onToggleUserInfo }) => {
    return (
        <div className="group relative">
            <button
                type="button"
                aria-label="Help"
                className="cursor-pointer rounded-full p-2 scale-110 transition hover:bg-gray-700/60"
                onClick={onToggleUserInfo}
            >
                <img src={assets.help_icon} alt="Help" className="h-6 w-6" />
            </button>

            <span className="pointer-events-none absolute -bottom-8 right-0 z-20 rounded-md border border-white/12 bg-black/85 px-2 py-1 text-[11px] text-stone-200 opacity-0 transition group-hover:opacity-100 whitespace-nowrap">
                User info
            </span>
        </div>
    );
};

export default HeaderHelpButton;
