const NotFoundFace = () => {
    return (
        <figure className="notfound-float-anim relative mx-auto mb-6 h-36 w-36 sm:h-44 sm:w-44">
            <div className="notfound-spin-slow absolute -inset-4 rounded-full border border-dashed border-blue-500/25" />
            <div className="absolute inset-0 overflow-hidden rounded-full border border-slate-500/35 bg-gray-900/55 shadow-[0_25px_70px_-40px_rgba(59,130,246,0.45)] backdrop-blur-md">
                <div className="notfound-scanline-anim pointer-events-none absolute left-0 right-0 h-8 bg-linear-to-b from-transparent via-blue-400/8 to-transparent" />
                <svg
                    viewBox="0 0 120 120"
                    className="relative h-full w-full p-6 text-slate-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    aria-hidden="true"
                >
                    <g className="notfound-blink-anim" style={{ transformOrigin: "36px 42px" }}>
                        <line x1="28" y1="34" x2="44" y2="50" strokeLinecap="round" />
                        <line x1="44" y1="34" x2="28" y2="50" strokeLinecap="round" />
                    </g>
                    <g className="notfound-blink-anim" style={{ transformOrigin: "84px 42px" }}>
                        <line x1="76" y1="34" x2="92" y2="50" strokeLinecap="round" />
                        <line x1="92" y1="34" x2="76" y2="50" strokeLinecap="round" />
                    </g>
                    <path d="M36 84 Q60 72 84 84" strokeLinecap="round" />
                    <ellipse cx="92" cy="42" rx="3" ry="5" fill="#60a5fa" stroke="none" opacity="0.75" className="notfound-sweat-drop" />
                </svg>
            </div>
        </figure>
    );
};

export default NotFoundFace;