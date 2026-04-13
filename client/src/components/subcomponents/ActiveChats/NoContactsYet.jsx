import assets from "../../../assets/assets";
import useAddNewContact from "../../../hooks/contexts/useAddNewContact";

const NoContactsYet = () => {
    const { setShowAddNewContactScreen } = useAddNewContact();
    return (
        <li className="no-contacts-yet mt-4 px-4 py-6 text-center">
            <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-slate-800/70 ring-1 ring-white/8">
                <img src={assets.add_user} alt="" className="h-5 w-5 opacity-90" />
            </div>

            <p className="text-sm font-medium text-stone-200">No active chats yet</p>
            <p className="mt-1 text-xs leading-5 text-stone-400">
                Add your first contact to start a conversation from here.
            </p>

            <button
                type="button"
                onClick={() => setShowAddNewContactScreen(true)}
                className="mx-auto mt-4 inline-flex cursor-pointer items-center gap-2 rounded-full bg-blue-600/90 px-4 py-2 text-xs font-medium text-white shadow-sm shadow-blue-600/20 transition hover:bg-blue-500 hover:shadow-blue-500/25"
            >
                <img src={assets.add_user} alt="" className="h-4 w-4" />
                Add Contact
            </button>
        </li>
    );
};

export default NoContactsYet;
