import NewContactListItem from "./NewContactListItem";

const NewContactList = ({ data, onClose }) => {
    return (
        <ul
            id="newContactList"
            className="flex max-h-[45vh] flex-col gap-7 overflow-y-auto pe-2"
        >
            {data.map((contact) => (
                <NewContactListItem key={contact._id} contact={contact} onClose={onClose} />
            ))}
        </ul>
    );
};

export default NewContactList;
