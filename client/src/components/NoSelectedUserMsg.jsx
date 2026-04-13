const NoSelectedUserMsg = () => {
  return (
    <section className="hidden sm:flex relative flex-1 min-w-0 items-center justify-center overflow-hidden px-4 py-10 sm:px-6 bg-[#0408125e]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,120,120,0.12),transparent_60%)]" />

      <div className="relative w-full max-w-2xl text-center">
        {/* Message Icon */}
        <div className="mx-auto mb-5 flex h-13 w-13 items-center justify-center rounded-full bg-gray-800/50 ring-1 ring-gray-700/60 sm:h-16 sm:w-16">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            className="h-7 w-7 text-stone-300 sm:h-8 sm:w-8"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 10.75h7.5M8.25 13.75h4.75" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.75c-4.83 0-8.75 3.31-8.75 7.39 0 2.08 1.02 3.96 2.66 5.3-.16 1.19-.75 2.3-1.65 3.14a.75.75 0 0 0 .49 1.3c2.03-.05 3.78-.72 5.03-1.83.7.16 1.44.25 2.22.25 4.83 0 8.75-3.31 8.75-7.39S16.83 4.75 12 4.75Z" />
          </svg>
        </div>

        {/* Message Content */}
        <h2 className="text-2xl font-semibold -tracking-[0.1px] text-white md:text-3xl">No Conversation Selected</h2>
        <p className="mx-auto mt-3 w-[80%] max-w-125 text-base leading-5 text-stone-400 lg:text-lg lg:leading-6">
          Choose a contact from the sidebar to start chatting, or add a new contact from the menu.
        </p>
      </div>
    </section>
  )
}

export default NoSelectedUserMsg
