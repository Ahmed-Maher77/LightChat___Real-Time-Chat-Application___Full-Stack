import generateAlternativeImage from "../../../../utils/functions/generateAlternativeImage";

const HeaderUserInfo = ({ selectedUser, statusConfig, onToggleUserInfo }) => {
    return (
        <div className="group relative">
            <div
                id="userInfo-chatContainer"
                className="flex cursor-pointer items-center gap-3"
                onClick={onToggleUserInfo}
            >
                <img
                    src={selectedUser?.profilePic || generateAlternativeImage(selectedUser?.name)}
                    alt={`${selectedUser?.name}'s profile picture`}
                    className="h-13 w-13 2xl:h-14 2xl:w-14 rounded-full border-4 border-gray-800"
                />
                <div className="min-w-0">
                    <h3 className="text-base text-stone-200 md:text-lg truncate">{selectedUser?.name}</h3>
                    <div className="status flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap text-sm">
                        <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${statusConfig.dotClass}`} />
                        <span className={`${statusConfig.textClass} truncate`}>
                            {statusConfig.label}
                            {statusConfig.showDots ? <span className="animate-3dots">...</span> : null}
                        </span>
                    </div>
                </div>
            </div>

            <span className="pointer-events-none absolute -bottom-9 left-3 z-20 rounded-md border border-white/12 bg-black/85 px-2 py-1 text-[11px] text-stone-200 opacity-0 transition group-hover:opacity-100 whitespace-nowrap">
                Toggle user info
            </span>
        </div>
    );
};

export default HeaderUserInfo;
