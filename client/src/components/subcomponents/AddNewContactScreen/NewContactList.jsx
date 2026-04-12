import NewContactListItem from "./NewContactListItem";

const NewContactList = ({ data }) => {
    return (
        <ul
            id="newContactList"
            className="flex max-h-[45vh] flex-col gap-7 overflow-y-auto pe-2"
        >
            {data.map((contact) => (
                <NewContactListItem key={contact.id} contact={contact} />
            ))}
        </ul>
    );
};

export default NewContactList;
