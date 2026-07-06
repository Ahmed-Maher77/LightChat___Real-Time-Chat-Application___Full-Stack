import { useState, useContext } from "react";
import OverlayScreenWithCloseAbility from "./common/OverlayScreenWithCloseAbility";
import SearchBar from "./SearchBar";
import NewContactList from "./subcomponents/AddNewContactScreen/NewContactList";
import NoContactsFound from "./subcomponents/AddNewContactScreen/NoContactsFound";
import { ChatContext } from "../../context/ChatContext";

const AddNewContactScreen = ({ onClose }) => {
    const { users } = useContext(ChatContext);
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchChange = (value) => {
        setSearchQuery(value);
    }

    const searchResults = searchQuery.trim()
        ? users.filter(user =>
            user.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.email.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : [];

    return (
        <OverlayScreenWithCloseAbility onClose={onClose}>
            <form
                id="add-new-contact-screen"
                onSubmit={(e) => e.preventDefault()}
                className="w-full max-w-[700px] p-6 rounded-lg border border-gray-600 gray-bg mx-auto"
            >
                <fieldset>
                    <SearchBar placeholder="Enter Contact Name or Email..." onSearch={handleSearchChange} padding="py-3" borderDashed={true} />
                </fieldset>
                <div className="search-results">
                    <h3 className="font-medium text-lg mt-8 mb-6 text-stone-300 border-l-4 border-gray-400 pl-2">Search Results <span className={searchResults.length > 0 ? "text-green-400" : "text-red-400"}>({searchResults.length})</span></h3>
                    {
                        searchResults.length > 0 ? <NewContactList data={searchResults} onClose={onClose} /> : <NoContactsFound />
                    }
                </div>
            </form>
        </OverlayScreenWithCloseAbility>
    );
};

export default AddNewContactScreen;
