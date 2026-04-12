import ActiveChats from "./ActiveChats";
import SearchBar from "./SearchBar";
import AppLogo from "./subcomponents/Sidebar/AppLogo";

const Sidebar = ({ onSelect }) => {
    const handleSearchChange = (value) => {
        console.log(value);
    }

    return (
        <div className="w-full h-full shrink-0 p-5 flex flex-col gap-7 sm:w-75 sm:min-w-75">
            <AppLogo />
            <SearchBar placeholder="Search here..." onSearch={handleSearchChange} />
            <ActiveChats onSelect={onSelect} />
        </div>
    );
};

export default Sidebar;
