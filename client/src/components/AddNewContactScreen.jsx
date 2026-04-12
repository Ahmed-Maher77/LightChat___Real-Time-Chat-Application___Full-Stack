import { useState } from "react";
import OverlayScreenWithCloseAbility from "./common/OverlayScreenWithCloseAbility";
import SearchBar from "./SearchBar";
import NewContactList from "./subcomponents/AddNewContactScreen/NewContactList";
import NoContactsFound from "./subcomponents/AddNewContactScreen/NoContactsFound";

const AddNewContactScreen = ({ onClose }) => {
    const [searchResults, setSearchResults] = useState([
        {
            id: 1,
            name: "John Doe",
            avatar: "https://randomuser.me/api/portraits/men/1.jpg",
            email: "zOy9K@example.com",
        },
        {
            id: 2,
            name: "John Doe",
            avatar: "https://randomuser.me/api/portraits/men/1.jpg",
            email: "zOy9K@example.com",
        },
        {
            id: 3,
            name: "John Doe",
            avatar: "https://randomuser.me/api/portraits/men/1.jpg",
            email: "zOy9K@example.com",
        },
        {
            id: 4,
            name: "John Doe",
            avatar: "https://randomuser.me/api/portraits/men/1.jpg",
            email: "zOy9K@example.com",
        },
        {
            id: 5,
            name: "John Doe",
            avatar: "https://randomuser.me/api/portraits/men/1.jpg",
            email: "zOy9K@example.com",
        },
        {
            id: 6,
            name: "John Doe",
            avatar: "https://randomuser.me/api/portraits/men/1.jpg",
            email: "zOy9K@example.com",
        },
        {
            id: 7,
            name: "John Doe",
            avatar: "https://randomuser.me/api/portraits/men/1.jpg",
            email: "zOy9K@example.com",
        },
    ]);

    const handleSearchChange = (value) => {
        console.log(value);
    }


    return (
        <OverlayScreenWithCloseAbility onClose={onClose}>
            <form
                id="add-new-contact-screen"
                className="w-full max-w-[700px] p-6 rounded-lg border border-gray-600 gray-bg mx-auto"
            >
                <fieldset>
                    <SearchBar placeholder="Enter Your Contact ID or Email..." onSearch={handleSearchChange} padding="py-3" borderDashed={true} />
                </fieldset>
                <div className="search-results">
                    <h3 className="font-medium text-lg mt-8 mb-6 text-stone-300 border-l-4 border-gray-400 pl-2">Search Results <span className={searchResults.length > 0 ? "text-green-400" : "text-red-400"}>({searchResults.length})</span></h3>
                    {
                        searchResults.length > 0 ? <NewContactList data={searchResults} /> : <NoContactsFound />
                    }
                </div>
            </form>
        </OverlayScreenWithCloseAbility>
    );
};

export default AddNewContactScreen;
