const NotFoundBackground = () => {
    return (
        <>
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(147,197,253,0.18),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(71,85,105,0.24),transparent_50%)]" />
            <div className="pointer-events-none absolute -left-20 top-12 h-64 w-64 rounded-full bg-blue-400/15 blur-3xl" />
            <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-slate-400/15 blur-3xl" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-slate-400/30 to-transparent" />
        </>
    );
};

export default NotFoundBackground;