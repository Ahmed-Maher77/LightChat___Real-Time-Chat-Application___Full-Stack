import assets from "../assets/assets";
import { useState } from "react";

const SearchBar = ({ placeholder, onSearch, padding, borderDashed }) => {
    const [searchValue, setSearchValue] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchValue(value);
        onSearch(value);
    };

    const clearSearch = () => {
        setSearchValue("");
        onSearch("");
    };

    return (
        <div className="relative w-full">
            <img
                src={assets.search_icon}
                alt="search icon"
                className="absolute left-4.5 top-[50%] translate-y-[-50%] w-4 opacity-60"
            />
            <input
                type="search"
                name="search"
                id="search"
                placeholder={placeholder}
                value={searchValue}
                className={`w-full gray-bg rounded-full ${padding || "px-4 py-2"} ps-11.5 pe-11 border-gray-600 focus:border-gray-400 outline-none text-stone-300 placeholder:text-stone-400 ${borderDashed && "border border-gray-600 border-dashed"}`}
                onChange={handleChange}
            />
            {searchValue && (
                <button
                    type="button"
                    aria-label="Clear search"
                    onClick={clearSearch}
                    className="absolute right-4.5 top-[50%] translate-y-[-50%] cursor-pointer"
                >
                    <img src={assets.x_icon} alt="" className="w-6 opacity-70 hover:opacity-100" />
                </button>
            )}
        </div>
    );
};

export default SearchBar;
