const NotFoundContent = () => {
    return (
        <section aria-label="Error content">
            <p className="text-sm uppercase tracking-[0.22em] text-stone-400/90">Error</p>
            <h1 className="notfound-glitch-wrap mt-3 text-6xl font-semibold leading-none tracking-tight text-white sm:text-8xl" data-text="404">
                404
            </h1>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-5xl">Page Not Found</h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-stone-300 sm:text-base">
                This page does not exist. Go back or return home.
            </p>
        </section>
    );
};

export default NotFoundContent;