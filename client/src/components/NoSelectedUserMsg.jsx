const NoSelectedUserMsg = () => {
  return (
    <section className="hidden sm:flex relative flex-1 min-w-0 items-center justify-center overflow-hidden px-4 py-10 sm:px-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,120,120,0.12),transparent_60%)]" />

      <div className="relative w-full max-w-2xl text-center">
        {/* Message Icon */}
        <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-gray-800/50 ring-1 ring-gray-700/60 sm:h-16 sm:w-16">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-6 w-6 text-stone-300 sm:h-8 sm:w-8"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 8.5h10M7 12h6m-8.5 8 2.05-3.29A8 8 0 1 1 20 10.5a8 8 0 0 1-8 8c-1.2 0-2.34-.26-3.37-.72L4.5 20Z" />
          </svg>
        </div>

        {/* Message Content */}
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">No Conversation Selected</h2>
        <p className="mx-auto mt-3 w-[80%] max-w-[500px] text-base leading-5 text-stone-400 lg:text-lg lg:leading-6">
          Choose a contact from the sidebar to start chatting, or add a new contact from the menu.
        </p>
      </div>
    </section>
  )
}

export default NoSelectedUserMsg
