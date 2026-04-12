import React from "react";

const NewContactListItem = ({ contact }) => {
    const handleAddContact = () => {
        console.log(`Adding contact: ${contact.name}`);
    };

    return (
        <li
            key={contact.id}
            className="flex items-center gap-4 justify-between "
        >
            <div className="flex items-center gap-4">
                {/* ======= user's picture ====== */}
                <img
                    src={contact.avatar}
                    alt={contact.name}
                    className="w-12 h-12 rounded-full"
                />
                {/* ======= user's name and email ====== */}
                <div>
                    <h4 className="font-medium text-lg text-stone-300">
                        {contact.name}
                    </h4>
                    <p className="text-sm text-stone-400">{contact.email}</p>
                </div>
            </div>
            {/* ======= add contact button ====== */}
            <button
                type="button"
                className="text-green-500 hover:text-green-600 py-2 px-4 rounded-lg flex items-center gap-1 cursor-pointer text-sm"
                onClick={handleAddContact}
            >
                Add Contact <span className="text-xl">+</span>
            </button>
        </li>
    );
};

export default NewContactListItem;
