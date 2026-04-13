import assets from "../../../assets/assets";
import useAddNewContact from "../../../hooks/contexts/useAddNewContact";

const NoContactsYet = () => {
    const { setShowAddNewContactScreen } = useAddNewContact();
    return (
        <li className="mt-3 rounded-xl border border-gray-700/70 bg-gray-900/45 p-4 text-center">
            <p className="text-sm text-stone-300">No contacts yet.</p>
            <p className="mt-1 text-xs text-stone-400">
                Add your first contact to start chatting.
            </p>

            <button
                type="button"
                onClick={() => setShowAddNewContactScreen(true)}
                className="mx-auto mt-4 inline-flex cursor-pointer items-center gap-2 rounded-lg bg-blue-600/90 px-3 py-2 text-xs font-medium text-white transition hover:bg-blue-500"
            >
                <img src={assets.add_user} alt="" className="h-4 w-4" />
                Add Contact
            </button>
        </li>
    );
};

export default NoContactsYet;
