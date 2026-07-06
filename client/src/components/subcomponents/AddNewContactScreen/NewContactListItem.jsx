import { useContext } from "react";
import { ChatContext } from "../../../../context/ChatContext";
import generateAlternativeImage from "../../../utils/functions/generateAlternativeImage";

const NewContactListItem = ({ contact, onClose }) => {
    const { setSelectedUser } = useContext(ChatContext);

    const handleAddContact = () => {
        setSelectedUser(contact);
        onClose();
    };

    return (
        <li
            key={contact._id}
            className="flex items-center gap-4 justify-between "
        >
            <div className="flex items-center gap-4">
                {/* ======= user's picture ====== */}
                <img
                    src={contact.profilePic || generateAlternativeImage(contact.fullName)}
                    alt={contact.fullName}
                    className="w-12 h-12 rounded-full object-cover"
                />
                {/* ======= user's name and email ====== */}
                <div>
                    <h4 className="font-medium text-lg text-stone-300">
                        {contact.fullName}
                    </h4>
                    <p className="text-sm text-stone-400">{contact.email}</p>
                </div>
            </div>
            {/* ======= add contact button ====== */}
            <button
                type="button"
                className="text-green-500 hover:text-green-600 py-2 px-4 rounded-lg flex items-center gap-1 cursor-pointer text-sm font-medium"
                onClick={handleAddContact}
            >
                Start Chat <span className="text-xl">+</span>
            </button>
        </li>
    );
};

export default NewContactListItem;
